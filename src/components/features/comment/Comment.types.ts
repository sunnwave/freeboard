import { MouseEvent } from 'react';
import { IBoardComment } from '../../../commons/types/generated/types';

export interface ICommentProps {
  data?: IBoardComment;
}

export interface ICommentUIProps {
  data?: IBoardComment;
  onClickUpdateBoardComment: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickDeleteBoardComment: (boardCommentId?: string) => void;
}
