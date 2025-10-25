import styled from '@emotion/styled';

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 40px;
  height: 52px;
  align-items: center;
  width: 100%;
`;

export const SearchKeywordWrapper = styled.div`
  width: 776px;
  height: 100%;
  height: 52px;
  border-radius: 10px;
  border: none;
  background: #f2f2f2;
  padding: 14px 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 42px;
`;

export const KeywordInput = styled.input`
  border: none;
  background: #f2f2f2;
  color: black;
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-weight: 400;
  /* line-height: 23.68px; */
  height: 24px;
  text-align: left;
  width: 100%;
`;
export const SearchIcon = styled.img`
  margin-right: 8px;
`;
export const SearchDateWrapper = styled.div`
  width: Hug (244px) px;
  height: Hug (52px) px;
  padding: 14px 16px 14px 16px;
  gap: 8px;
  border: 1px solid #bdbdbd;
  margin-right: 44px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const DateInput = styled.input`
  width: 93px;
  height: 24px;
  gap: 0px;
  opacity: 0px;
  font-family: Noto Sans CJK KR;
  font-size: 16px;
  font-weight: 400;
  line-height: 23.68px;
  text-align: left;
  border: none;
`;

export const SearchButton = styled.button`
  width: 94px;
  height: 52px;
  padding: 14px 16px 14px 16px;
  gap: 10px;
  border-radius: 10px;
  background: #000000;
  color: white;
  cursor: pointer;
`;
