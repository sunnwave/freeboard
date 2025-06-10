export interface ICommentWriteProps {
  isUpdate?: boolean;
}

export interface ICommentWriteUIProps extends ICommentWriteProps {
  onChangeWriter: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  // onChangeRating: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  onChangeContents: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onClickRegister: () => void;
  contentsCount: number;
}
