import React, { useState } from 'react';
import { PageNumber, PaginationButton, PaginationWrapper } from './Pagination.styles';
import { IQuery, IQueryFetchBoardsArgs } from '../../../commons/types/generated/types';
import { ApolloQueryResult } from '@apollo/client';

interface IPaginationProps {
  boardsCount: number;
  pageGroupSize: number;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs>,
  ) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchBoards'>>>;
}

export default function Pagination({ boardsCount, pageGroupSize, refetch }: IPaginationProps) {
  const [startPage, setStartPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const lastPage = Math.ceil(boardsCount / 10); //총 페이지 수

  const onClickPage = (page: number) => {
    if (page < 1 || page > lastPage) return;

    setCurrentPage(page);
    setStartPage(Math.floor((page - 1) / pageGroupSize) * pageGroupSize + 1);
    void refetch({ page });
  };

  const onClickPrevGroup = () => {
    if (startPage === 1) return;
    const prevStartPage = startPage - pageGroupSize;
    setStartPage(prevStartPage);
    setCurrentPage(prevStartPage);
    void refetch({ page: prevStartPage });
  };

  const onClickNextGroup = () => {
    if (startPage + pageGroupSize > lastPage) return;
    const nextStartPage = startPage + pageGroupSize;
    setStartPage(nextStartPage);
    setCurrentPage(nextStartPage);
    void refetch({ page: nextStartPage });
  };

  return (
    <PaginationWrapper>
      {/* 그룹 앞으로 이동 */}
      <PaginationButton isActive={currentPage > pageGroupSize} onClick={onClickPrevGroup}>
        {'<<'}
      </PaginationButton>
      {/* 한 페이지 앞으로 이동 */}
      <PaginationButton isActive={currentPage !== 1} onClick={() => onClickPage(currentPage - 1)}>
        {'<'}
      </PaginationButton>
      {/* 페이지 넘버 */}
      {new Array(pageGroupSize)
        .fill(null)
        .filter((_, index) => startPage + index <= lastPage)
        .map((_, index) => (
          <PageNumber
            key={startPage + index}
            onClick={() => onClickPage(startPage + index)}
            isActive={currentPage === startPage + index}
          >
            {startPage + index}
          </PageNumber>
        ))}
      {/* 한 페이지 뒤로 이동 */}
      <PaginationButton
        isActive={currentPage !== lastPage}
        onClick={() => onClickPage(currentPage + 1)}
      >
        {'>'}
      </PaginationButton>
      {/* 그룹 뒤로 이동 */}
      <PaginationButton isActive={lastPage - startPage > pageGroupSize} onClick={onClickNextGroup}>
        {'>>'}
      </PaginationButton>
    </PaginationWrapper>
  );
}
