import DepreiationCsvButton from './DepreiationCsvButton';
import ItemCsvButton from './ItemCsvButton';
import styled from 'styled-components';

const StyledBox = styled.div`
  margin: 40px 0 0 0;
  display: flex;
  @media (max-width: 415px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
  @media (min-width: 416px) {
    flex-direction: row;
    justify-content: center;
    gap: 100px;
  }
  width: 100%;
`;

const CsvBox = () => {
  return (
    <StyledBox>
      <DepreiationCsvButton />
      <ItemCsvButton />
    </StyledBox>
  );
};

export default CsvBox;
