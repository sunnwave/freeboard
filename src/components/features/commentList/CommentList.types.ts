import { IQuery } from '../../../commons/types/generated/types';

export interface ICommentListProps {
  data?: Pick<IQuery, 'fetchBoardComments'>;
  refetch: () => void;
  onLoadMore: () => void;
  hasMore: boolean;
}
