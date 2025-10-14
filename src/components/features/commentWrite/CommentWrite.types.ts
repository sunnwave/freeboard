import { IBoardComment } from '../../../commons/types/generated/types';

export interface ICommentWriteProps {
  isUpdate?: boolean;
  data?: IBoardComment;
}

export interface ICommentWriteUIProps extends ICommentWriteProps {
  input: {
    writer: string;
    password: string;
    rating: number;
    contents: string;
    contentsCount?: number;
  };
  onChangeInput: (
    event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  onChangeRating: (rate: number) => void;
  onClickRegister: () => void;
  onClickUpdate: () => void;
}
