import { gql, useQuery } from "@apollo/client";
import BoardRegister from "../../../../src/components/units/board/register/BoardRegister.container";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../src/commons/types/generated/types";

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function UpdatePage() {
  const router = useRouter();

  // const { data } = useQuery(FETCH_BOARD, {
  //   variables: { boardId: String(router.query.boardId) },
  // });
  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: { boardId: String(router.query.boardId) },
    }
  );

  return (
    <>
      <BoardRegister isUpdate={true} data={data} />
    </>
  );
}
