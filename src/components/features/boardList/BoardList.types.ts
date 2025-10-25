import { IQueryFetchBoardsArgs } from '@/graphql';
import { IQuery } from '../../../commons/types/generated/types';
import { ApolloQueryResult } from '@apollo/client';

export interface IBoardListUIProps {
  onClickBoardToDetail: (event: React.MouseEvent<HTMLTableCellElement>) => void;
  onClickRegister: () => void;
  data?: Pick<IQuery, 'fetchBoards'>;
  searchParams: IQueryFetchBoardsArgs;
  setSearchParams: React.Dispatch<React.SetStateAction<IQueryFetchBoardsArgs>>;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs>,
  ) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchBoards'>>>;
}
