export interface ICommentWriteProps {
  isUpdate?: boolean;
}

export interface ICommentWriteUIProps extends ICommentWriteProps {
  onChangeWriter: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeRating: (rate: number) => void;
  onChangeContents: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onClickRegister: () => void;
  contentsCount: number;
  rating?: number;
}
