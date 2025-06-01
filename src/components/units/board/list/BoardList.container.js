import { useQuery } from "@apollo/client";
import BoardListUI from "./BoardList.presenter";
import { FETCH_BOARDS } from "./BoardList.queries";
import { useRouter } from "next/router";

export default function BoardList() {
  const { data } = useQuery(FETCH_BOARDS);

  const router = useRouter();

  const onClickBoardToDetail = (event) => {
    router.push(`/boards/${event.target.id}`);
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
