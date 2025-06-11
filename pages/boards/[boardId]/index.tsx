import BoardDetail from "../../../src/components/features/boardDetail/BoardDetail.container";
import CommentList from "../../../src/components/features/commentList/CommentList.container";
import CommentWrite from "../../../src/components/features/commentWrite/CommentWrite.container";

export default function DetailPage() {
  return (
    <>
      <BoardDetail />
      <CommentWrite isUpdate={false} />
      <CommentList />
    </>
  );
}
