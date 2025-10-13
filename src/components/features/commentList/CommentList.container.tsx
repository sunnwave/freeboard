import { useQuery } from '@apollo/client';
import { FETCH_BOARD_COMMENTS } from './CommentList.queries';
import { useRouter } from 'next/router';
import { IQuery, IQueryFetchBoardCommentsArgs } from '../../../commons/types/generated/types';
import CommentListUI from './CommentList.presenter';
import { useState } from 'react';

const COMMENTS_PER_PAGE = 10; // Number of comments to fetch per page

export default function CommentList() {
  const router = useRouter();

  if (!router || typeof router.query.boardId !== 'string') {
    return <></>; // router가 준비되지 않았거나, boardId가 문자열이 아닐 때 빈 컴포넌트 반환
  }

  const [hasMore, setHasMore] = useState(true);

  const { data, fetchMore } = useQuery<
    Pick<IQuery, 'fetchBoardComments'>,
    IQueryFetchBoardCommentsArgs
  >(FETCH_BOARD_COMMENTS, {
    variables: {
      boardId: String(router.query.boardId),
      page: 1,
    },
  });

  const onLoadMore = () => {
    const nextPage = Math.ceil((data?.fetchBoardComments.length ?? 0) / COMMENTS_PER_PAGE) + 1;

    if (!data || !hasMore) return;

    void fetchMore({
      variables: {
        page: nextPage,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        const newComments = fetchMoreResult?.fetchBoardComments ?? [];

        if (newComments.length < COMMENTS_PER_PAGE || newComments.length === 0) {
          setHasMore(false);
        }

        return {
          fetchBoardComments: [...prev.fetchBoardComments, ...newComments],
        };
      },
    });
  };
  return <CommentListUI data={data} onLoadMore={onLoadMore} hasMore={hasMore} />;
}
