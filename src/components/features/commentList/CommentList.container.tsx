import { useQuery } from "@apollo/client";
import { FETCH_BOARD_COMMENTS } from "./CommentList.queries";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardCommentsArgs,
} from "../../../commons/types/generated/types";
import CommentListUI from "./CommentList.presenter";
import CommentWrite from "../commentWrite/CommentWrite.container";

export default function CommentList() {
  const router = useRouter();
  if (!router || typeof router.query.boardId !== "string") {
    return <></>; // router가 준비되지 않았거나, boardId가 문자열이 아닐 때 빈 컴포넌트 반환
  }

  const { data } = useQuery<
    Pick<IQuery, "fetchBoardComments">,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: {
      page: 1,
      boardId: router.query.boardId,
    },
  });

  const onClickUpdate = () => {
    console.log("update clicked");
    return <CommentWrite isUpdate={true} />;
  };
  console.log(data?.fetchBoardComments);

  const onClickDelete = () => {
    console.log("delete clicked");
    // 여기에 삭제 로직을 추가할 수 있습니다.
  };
  return <CommentListUI data={data} onClickUpdate={onClickUpdate} />;
}
