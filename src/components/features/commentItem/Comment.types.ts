import { IBoardComment } from '../../../commons/types/generated/types';

export interface ICommentProps {
  data?: IBoardComment;
}

export interface IMyUpdateBoardCommentInput {
  contents?: string;
  rating?: number;
}

export interface ICommentUIProps {
  data?: IBoardComment;
  isUpdate?: boolean;
  setIsUpdate?: (value: boolean) => void;
  isDeleteModalOpen?: boolean;
  onCancelDeleteModal: () => void;
  onClickUpdateBoardComment: (boardCommentId?: string) => void;
  onClickDeleteBoardComment: (boardCommentId?: string) => void;
  onConfirmDeleteBoardComment: (password: string) => Promise<void>;
}
