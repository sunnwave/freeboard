import { useQuery } from '@apollo/client';
import { FETCH_BOARD_COMMENTS } from './CommentList.queries';
import { useRouter } from 'next/router';
import { IQuery, IQueryFetchBoardCommentsArgs } from '../../../commons/types/generated/types';
import CommentListUI from './CommentList.presenter';

export default function CommentList() {
  const router = useRouter();

  if (!router || typeof router.query.boardId !== 'string') {
    return <></>; // router가 준비되지 않았거나, boardId가 문자열이 아닐 때 빈 컴포넌트 반환
  }

  const { data } = useQuery<Pick<IQuery, 'fetchBoardComments'>, IQueryFetchBoardCommentsArgs>(
    FETCH_BOARD_COMMENTS,
    {
      variables: {
        boardId: String(router.query.boardId),
      },
    },
  );
  return <CommentListUI data={data} />;
}
