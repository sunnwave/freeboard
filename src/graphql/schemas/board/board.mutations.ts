import { gql } from '@apollo/client';

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      images
      createdAt
      updatedAt
      deletedAt
      boardAddress {
        zipcode
        address
        addressDetail
      }
    }
  }
`;

export const UPDATE_BOARD = gql`
  mutation updateBoard($updateBoardInput: UpdateBoardInput!, $password: String, $boardId: ID!) {
    updateBoard(updateBoardInput: $updateBoardInput, password: $password, boardId: $boardId) {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      images
      createdAt
    }
  }
`;
export const DELETE_BOARD = gql`
  mutation deleteBoard($boardId: ID!) {
    deleteBoard(boardId: $boardId)
  }
`;
