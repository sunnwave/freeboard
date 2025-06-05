import { IQuery } from "../../../../commons/types/generated/types";

export interface ICommentListProps {
  data?: Pick<IQuery, "fetchBoardComments">;
  onClickUpdate: () => void;
}
