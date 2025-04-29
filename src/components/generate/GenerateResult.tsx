import { FC, useRef } from 'react';
import { ErrorResponse } from '../../models/errorResponse';
import ErrorResult from '../error/ErrorResult';
import { GenerateResponse } from '../../models/generateResponse';
import { Record } from '../../models/generateRequest';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import QrList from './qr/QrList';
import BarcodeList from './barcode/BarcodeList';
import styled from 'styled-components';
import NothingList from './nothing/NothingList';

type Props = {
  result: GenerateResponse | ErrorResponse;
  recordType: Record | null;
};

const StyledResultArea = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 300px;
  margin: 0 auto 0 auto;
  padding: 0;
  overflow-x: scroll;
  overflow-y: scroll;
  border: 1px solid black;
`;

const StyledConvertPDFArea = styled.div`
  aspect-ratio: 210 / 297;
  width: auto;
  height: 1485px;
  margin: 0 auto;
  background-color: #ffffff;
  border: 1px solid black;
`;

const StyledDownloadPDFButton = styled.button`
  width: 200px;
  height: 50px;
  font-size: 18px;
  margin: 10px auto 0 auto;
  display: block;
`;

const GenerateResult: FC<Props> = (props) => {
  // PDFに変換する対象のエリア
  const contentRef = useRef<HTMLDivElement>(null);
  // download処理
  const handleDownloadPdf = async () => {
    if (!contentRef.current) return;

    try {
      // 1️: 指定した要素をキャプチャしてCanvasに変換
      const canvas: HTMLCanvasElement = await html2canvas(contentRef.current);

      // 2: jsPDF インスタンスを作成（A4縦向き）
      const pdf: jsPDF = new jsPDF({
        orientation: 'p',
        unit: 'mm',
        format: 'a4',
      });

      // 3: PDFの幅を取得し、アスペクト比を維持した高さを計算
      const pdfWidth: number = pdf.internal.pageSize.getWidth();
      const pdfHeight: number = (canvas.height * pdfWidth) / canvas.width;

      // 4: canvasをPDFに追加（左上から配置）
      pdf.addImage({
        imageData: canvas,
        x: 0,
        y: 0,
        width: pdfWidth,
        height: pdfHeight,
      });

      // 5: PDFをダウンロード
      pdf.save('dashi-record.pdf');
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      {'code' in props.result && 'message' in props.result ? (
        <ErrorResult result={props.result} />
      ) : (
        <>
          {props.recordType === 'Qr' ? (
            <>
              {/* Qr */}
              <StyledResultArea>
                {/* PDFに変換する対象のエリア start */}
                <StyledConvertPDFArea ref={contentRef}>
                  <QrList visible_ids={props.result.visible_ids} />
                </StyledConvertPDFArea>
                {/* PDFに変換する対象のエリア end */}
              </StyledResultArea>
              <div style={{ width: '100%' }}>
                <StyledDownloadPDFButton onClick={handleDownloadPdf}>PDFをダウンロード</StyledDownloadPDFButton>
              </div>
            </>
          ) : props.recordType === 'Barcode' ? (
            <>
              {/* Barcode */}
              <StyledResultArea>
                {/* PDFに変換する対象のエリア start */}
                <StyledConvertPDFArea ref={contentRef}>
                  <BarcodeList visible_ids={props.result.visible_ids} />
                </StyledConvertPDFArea>
                {/* PDFに変換する対象のエリア end */}
              </StyledResultArea>
              <div style={{ width: '100%' }}>
                <StyledDownloadPDFButton onClick={handleDownloadPdf}>PDFをダウンロード</StyledDownloadPDFButton>
              </div>
            </>
          ) : (
            // Nothing
            <NothingList visible_ids={props.result.visible_ids} />
          )}
        </>
      )}
    </>
  );
};

export default GenerateResult;
