import { useQuery } from '@apollo/client';
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from './BoardList.queries';
import { useRouter } from 'next/router';
import { IQuery, IQueryFetchBoardsArgs } from '../../../commons/types/generated/types';
import { MouseEvent, useEffect, useState } from 'react';
import BoardListUI from './BoardList.presenter';
import Pagination from '../../commons/Pagination/Pagination';

export default function BoardList() {
  const [searchParams, setSearchParams] = useState<IQueryFetchBoardsArgs>({
    search: '',
    startDate: '',
    endDate: '',
  });

  const [boardsCount, setBoardsCount] = useState(0);

  const { data, refetch } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
  );
  const { refetch: refetchBoardsCount } =
    useQuery<Pick<IQuery, 'fetchBoardsCount'>>(FETCH_BOARDS_COUNT);

  const router = useRouter();

  useEffect(() => {
    const fetchCount = async () => {
      const { data } = await refetchBoardsCount({
        search: searchParams.search || undefined,
        startDate: searchParams.startDate
          ? new Date(searchParams.startDate).toISOString()
          : undefined,
        endDate: searchParams.endDate ? new Date(searchParams.endDate).toISOString() : undefined,
      });

      if (data?.fetchBoardsCount) {
        setBoardsCount(data.fetchBoardsCount);
      }
    };

    void fetchCount();
  }, [searchParams]);

  const onClickBoardToDetail = (event: MouseEvent<HTMLTableCellElement>) => {
    //TIL: event.target이 항상 태그를 의미하진 않으므로 태그인 경우를 확인할 필요가 있음
    if (event.target instanceof HTMLTableCellElement) {
      router.push(`/boards/${event.target.id}`);
    }
  };

  const onClickRegister = () => {
    console.log('게시글 등록 클릭');
    router.push(`/boards/new`);
  };

  return (
    <>
      <BoardListUI
        onClickBoardToDetail={onClickBoardToDetail}
        onClickRegister={onClickRegister}
        data={data}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        refetch={refetch}
      />
      <Pagination boardsCount={boardsCount} pageGroupSize={10} refetch={refetch} />
    </>
  );
}
