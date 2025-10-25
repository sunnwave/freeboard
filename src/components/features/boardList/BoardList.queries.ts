import { gql } from '@apollo/client';

export const FETCH_BOARDS = gql`
  query fetchBoards($page: Int, $startDate: DateTime, $endDate: DateTime, $search: String) {
    fetchBoards(page: $page, startDate: $startDate, endDate: $endDate, search: $search) {
      _id
      writer
      title
      createdAt
    }
  }
`;

export const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;
