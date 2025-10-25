import { ChangeEvent } from 'react';
import {
  DateInput,
  KeywordInput,
  SearchButton,
  SearchDateWrapper,
  SearchIcon,
  SearchKeywordWrapper,
  SearchWrapper,
} from './Search.styles';

interface ISearchUIProps {
  onChangeKeyword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeDate: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickSearch: () => void;
}

export default function SearchUI(props: ISearchUIProps) {
  return (
    <>
      <SearchWrapper>
        <SearchKeywordWrapper>
          <SearchIcon src={'/boardsList/ic_search.png'} />
          <KeywordInput placeholder="제목을 검색해주세요" onChange={props.onChangeKeyword} />
        </SearchKeywordWrapper>
        <SearchDateWrapper>
          <DateInput
            type="date"
            placeholder="YYYY.MM.DD"
            id="startDate"
            onChange={props.onChangeDate}
          />
          ~
          <DateInput
            type="date"
            placeholder="YYYY.MM.DD"
            id="endDate"
            onChange={props.onChangeDate}
          />
        </SearchDateWrapper>
        <SearchButton onClick={props.onClickSearch}>검색하기</SearchButton>
      </SearchWrapper>
    </>
  );
}
