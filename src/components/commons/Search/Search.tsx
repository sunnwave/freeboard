import { ChangeEvent } from 'react';
import SearchUI from './Search.presenter';
import _ from 'lodash';
import { IQuery, IQueryFetchBoardsArgs } from '@/graphql';
import { ApolloQueryResult } from '@apollo/client';

interface ISearchProps {
  searchParams: IQueryFetchBoardsArgs;
  setSearchParams: React.Dispatch<React.SetStateAction<IQueryFetchBoardsArgs>>;
  refetch: (
    variables?: Partial<IQueryFetchBoardsArgs>,
  ) => Promise<ApolloQueryResult<Pick<IQuery, 'fetchBoards'>>>;
}

export default function Search({ searchParams, setSearchParams, refetch }: ISearchProps) {
  // const [searchParams, setSearchParams] = useState({
  //   keyword: '',
  //   startDate: '',
  //   endDate: '',
  // });

  // const getDebounce = _.debounce(() => {
  //   // setSearchParams(prev => ({ ...prev, search: value }));
  //   void refetch({
  //     search: searchParams.search,
  //     startDate: searchParams.startDate
  //       ? new Date(searchParams.startDate).toISOString()
  //       : undefined,
  //     endDate: searchParams.endDate ? new Date(searchParams.endDate).toISOString() : undefined,
  //     page: 1,
  //   });
  // }, 500);

  const onChangeKeyword = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setSearchParams(prev => ({ ...prev, search: value }));
    // getDebounce();
  };

  const onChangeDate = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchParams(prev => ({ ...prev, [event.target.id]: event.target.value }));
  };

  const onClickSearch = () => {
    void refetch({
      search: searchParams.search,
      startDate: searchParams.startDate
        ? new Date(searchParams.startDate).toISOString()
        : undefined,
      endDate: searchParams.endDate ? new Date(searchParams.endDate).toISOString() : undefined,
      page: 1,
    });
  };

  return (
    <SearchUI
      searchParams={searchParams}
      onChangeKeyword={onChangeKeyword}
      onChangeDate={onChangeDate}
      onClickSearch={onClickSearch}
    />
  );
}
