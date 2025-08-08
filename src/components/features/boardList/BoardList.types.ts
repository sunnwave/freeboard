import { IQuery } from '../../../commons/types/generated/types';

export interface IBoardListUIProps {
  onClickBoardToDetail: (event: React.MouseEvent<HTMLTableCellElement>) => void;
  onClickRegister: () => void;
  data?: Pick<IQuery, 'fetchBoards'>;
}
