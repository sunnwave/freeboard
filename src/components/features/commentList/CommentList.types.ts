import { IQuery } from '../../../commons/types/generated/types';

export interface ICommentListProps {
  data?: Pick<IQuery, 'fetchBoardComments'>;
  onLoadMore: () => void;
  hasMore: boolean;
}
