import { useQuery } from '@apollo/client';
import { FETCH_BOARDS } from './BoardList.queries';
import { useRouter } from 'next/router';
import { IQuery, IQueryFetchBoardsArgs } from '../../../commons/types/generated/types';
import { MouseEvent } from 'react';
import BoardListUI from './BoardList.presenter';

export default function BoardList() {
  const { data } = useQuery<Pick<IQuery, 'fetchBoards'>, IQueryFetchBoardsArgs>(FETCH_BOARDS);

  const router = useRouter();

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
      />
    </>
  );
}
