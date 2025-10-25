import { ChangeEvent, useState } from 'react';
import SearchUI from './Search.presenter';
import _ from 'lodash';
import { IQuery, IQueryFetchBoardsArgs } from '@/graphql';
import { ApolloQueryResult } from '@apollo/client';

interface ISearchProps {
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs>,
  ) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchBoards'>>>;
}

export default function Search(props: ISearchProps) {
  const [searchParams, setSearchParams] = useState({
    keyword: '',
    startDate: '',
    endDate: '',
  });

  const getDebounce = _.debounce((value: string) => {
    setSearchParams(prev => ({ ...prev, keyword: value }));
    void props.refetch({
      search: searchParams.keyword,
      startDate: searchParams.startDate
        ? new Date(searchParams.startDate).toISOString()
        : undefined,
      endDate: searchParams.endDate ? new Date(searchParams.endDate).toISOString() : undefined,
      page: 1,
    });
  }, 500);

  const onChangeKeyword = (event: ChangeEvent<HTMLInputElement>) => {
    getDebounce(event.currentTarget.value);
  };

  const onChangeDate = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchParams(prev => ({ ...prev, [event.target.id]: event.target.value }));
  };

  const onClickSearch = () => {
    void props.refetch({
      search: searchParams.keyword,
      startDate: searchParams.startDate
        ? new Date(searchParams.startDate).toISOString()
        : undefined,
      endDate: searchParams.endDate ? new Date(searchParams.endDate).toISOString() : undefined,
      page: 1,
    });
  };

  return (
    <SearchUI
      onChangeKeyword={onChangeKeyword}
      onChangeDate={onChangeDate}
      onClickSearch={onClickSearch}
    />
  );
}
