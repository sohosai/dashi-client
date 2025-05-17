import sharp from 'sharp';

export async function createLargeImageFileList(sizeInMB: number): Promise<FileList> {
  const baseImage = await sharp({
    create: {
      width: 100,
      height: 100,
      channels: 3,
      background: 'white',
    },
  })
    .png()
    .toBuffer();

  const paddingSize = sizeInMB * 1024 * 1024 - baseImage.length;
  const padding = Buffer.alloc(paddingSize > 0 ? paddingSize : 0, 0);
  const fullBuffer = Buffer.concat([baseImage, padding]);

  const blob = new Blob([fullBuffer], { type: 'image/png' });
  const file = new File([blob], 'large.png', { type: 'image/png' });

  const dt = new DataTransfer();
  dt.items.add(file);
  return dt.files;
}
