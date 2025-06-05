import { useQuery } from "@apollo/client";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queries";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import { MouseEvent } from "react";

export default function BoardList() {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  const router = useRouter();

  const onClickBoardToDetail = (event: MouseEvent<HTMLTableCellElement>) => {
    //TODO: if (event.target instanceof HTMLImageElement) 가 왜 필요한지?
    if (event.target instanceof HTMLTableCellElement) {
      router.push(`/boards/${event.target.id}`);
    }
  };

  const onClickRegister = () => {
    console.log("게시글 등록 클릭");
    router.push(`/boards/new`);
  };
  return (
    <>
      <BoardListUI
        onClickBoardToDetail={onClickBoardToDetail}
        onClickRegister={onClickRegister}
        data={data}
      />
    </>
  );
}
