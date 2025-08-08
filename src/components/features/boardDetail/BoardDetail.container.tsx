import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';
import { DELETE_BOARD, FETCH_BOARD } from './BoardDetail.queries';
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from '../../../commons/types/generated/types';
import BoardDetailUI from './BoardDetail.presenter';

export default function BoardDetail() {
  const router = useRouter();

  const foo = 123;
  console.log(foo);

  if (!router || typeof router.query.boardId !== 'string') {
    return <></>;
  }
  const { data } = useQuery<Pick<IQuery, 'fetchBoard'>, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: { boardId: router.query.boardId as string },
  });
  const [deleteBoard] = useMutation<Pick<IMutation, 'deleteBoard'>, IMutationDeleteBoardArgs>(
    DELETE_BOARD,
  );

  const onClickToList = () => {
    router.push(`/boards`);
  };
  const onClickUpdate = async () => {
    router.push(`/boards/${router.query.boardId}/update`);
  };

  const onClickDelete = async () => {
    const confirmResult = confirm('게시물을 삭제하시겠습니까?');
    if (confirmResult) {
      try {
        if (!router.query.boardId || typeof router.query.boardId !== 'string') {
          return;
        }
        const result = await deleteBoard({
          variables: {
            boardId: router.query.boardId,
          },
        });
        alert('게시물을 삭제하였습니다');
        router.push(`/boards`);
      } catch (err) {
        console.error(err);
      }
    }
  };
  return (
    <>
      <BoardDetailUI
        data={data}
        onClickToList={onClickToList}
        onClickUpdate={onClickUpdate}
        onClickDelete={onClickDelete}
      />
    </>
  );
}
