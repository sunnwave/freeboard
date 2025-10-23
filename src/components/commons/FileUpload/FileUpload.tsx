import { ChangeEvent, useRef } from 'react';
import FileUploadUI from './FileUpload.presenter';
import { checkValidationFile } from '@/commons/libraries/validationFile';
import { useMutation } from '@apollo/client';
import { IMutation, IMutationUploadFileArgs } from '@/graphql';
import { UPLOAD_FILE } from './FileUpload.queries';

interface IFileUploadProps {
  index: number;
  fileUrl: string;
  // defaultFileUrl?: string;
  onChangeFiles: (url: string, index: number) => void;
}

export default function FileUpload(props: IFileUploadProps) {
  const fileRef = useRef<HTMLInputElement>(null);

  const [uploadFile] = useMutation<Pick<IMutation, 'uploadFile'>, IMutationUploadFileArgs>(
    UPLOAD_FILE,
  );

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
    const file = event.target.files?.[0];
    const isValid = checkValidationFile(file);

    if (!isValid) return;

    const result = await uploadFile({ variables: { file } });
    props.onChangeFiles(result.data?.uploadFile.url ?? '', props.index);
  };

  const onClickAddImage = (): void => {
    fileRef.current?.click();
  };

  return (
    <FileUploadUI
      fileUrl={props.fileUrl}
      fileRef={fileRef}
      onChangeFile={onChangeFile}
      onClickAddImage={onClickAddImage}
    />
  );
}
