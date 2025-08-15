import { gql, useQuery } from '@apollo/client';
import { useRouter } from 'next/router';
import { IQuery, IQueryFetchBoardArgs } from '../../../../src/commons/types/generated/types';
import BoardRegister from '../../../../src/components/features/boardRegister/BoardRegister.container';

const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      youtubeUrl
      likeCount
      dislikeCount
      images
      boardAddress {
        zipcode
        address
        addressDetail
      }
      createdAt
      updatedAt
      deletedAt
    }
  }
`;

export default function UpdatePage() {
  const router = useRouter();

  // const { data } = useQuery(FETCH_BOARD, {
  //   variables: { boardId: String(router.query.boardId) },
  // });
  const { data } = useQuery<Pick<IQuery, 'fetchBoard'>, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: { boardId: String(router.query.boardId) },
  });
  console.log('data', data);

  return (
    <>
      <BoardRegister isUpdate={true} data={data} />
    </>
  );
}
