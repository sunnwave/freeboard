import React, { ChangeEvent } from 'react';
import { Thumbnail, UploadButton } from './FileUpload.styles';

interface IFileUploadUIProps {
  fileRef: React.RefObject<HTMLInputElement>;
  fileUrl: string;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickAddImage: () => void;
}

export default function FileUploadUI(props: IFileUploadUIProps) {
  return (
    <>
      {props.fileUrl ? (
        <Thumbnail
          src={`https://storage.googleapis.com/${props.fileUrl}`}
          onClick={props.onClickAddImage}
        />
      ) : (
        <UploadButton onClick={props.onClickAddImage}>+</UploadButton>
      )}

      <input
        style={{ display: 'none' }}
        type="file"
        onChange={props.onChangeFile}
        ref={props.fileRef}
        accept="image/jpeg,image/png"
      />
    </>
  );
}
