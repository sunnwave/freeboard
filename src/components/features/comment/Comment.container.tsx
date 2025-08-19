import { useMutation } from '@apollo/client';
import CommentUI from './Comment.presenter';
import { ICommentProps } from './Comment.types';
import { IMutation, IMutationDeleteBoardCommentArgs } from '../../../commons/types/generated/types';
import { DELETE_BOARD_COMMENT } from './Comment.queries';
import { MouseEvent } from 'react';
import { FETCH_BOARD_COMMENTS } from '../commentList/CommentList.queries';
import { useRouter } from 'next/router';

export default function Comment(props: ICommentProps) {
  const router = useRouter();

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, 'deleteBoardComment'>,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const onClickUpdateBoardComment = async (event: MouseEvent<HTMLButtonElement>) => {
    console.log('update clicked');
    // return <CommentWrite isUpdate={true} />;
  };

  const onClickDeleteBoardComment = async (boardCommentId?: string) => {
    console.log('delete clicked');
    console.log('댓글 삭제 시도', boardCommentId);

    const confirmResult = confirm('댓글을 삭제하시겠습니까?');

    if (!boardCommentId) {
      // alert("댓글 ID가 없습니다.");
      return;
    }

    if (!router || typeof router.query.boardId !== 'string') {
      alert('잘못된 접근입니다.');
      return;
    }
    if (confirmResult) {
      try {
        const commentPassword = prompt('댓글 비밀번호를 입력해주세요.');
        console.log('댓글 삭제 시도', boardCommentId);
        await deleteBoardComment({
          variables: {
            boardCommentId: boardCommentId,
            password: String(commentPassword),
          },
          refetchQueries: [
            {
              query: FETCH_BOARD_COMMENTS,
              variables: {
                pages: 10,
                boardId: router.query.boardId as string,
              },
            },
          ],
        });
        alert('댓글이 삭제되었습니다.');
      } catch (error) {
        alert('댓글 삭제에 실패했습니다.');
        console.error(error);
      }
      return;
    }
  };
  return (
    <CommentUI
      data={props.data}
      onClickUpdateBoardComment={onClickUpdateBoardComment}
      onClickDeleteBoardComment={onClickDeleteBoardComment}
    />
  );
}
