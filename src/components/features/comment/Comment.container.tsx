import { useMutation } from '@apollo/client';
import CommentUI from './Comment.presenter';
import { ICommentProps } from './Comment.types';
import {
  IBoardComment,
  IMutation,
  IMutationDeleteBoardCommentArgs,
} from '../../../commons/types/generated/types';
import { DELETE_BOARD_COMMENT } from './Comment.queries';
import { useRouter } from 'next/router';
import { Reference, useState } from 'react';

export default function Comment(props: ICommentProps) {
  const router = useRouter();

  const [deleteBoardComment] = useMutation<
    Pick<IMutation, 'deleteBoardComment'>,
    IMutationDeleteBoardCommentArgs
  >(DELETE_BOARD_COMMENT);

  const [isUpdate, setIsUpdate] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [boardCommentId, setBoardCommentId] = useState<string>('');

  const onCancelDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const onClickUpdateBoardComment = () => {
    setIsUpdate(true);
    console.log('update clicked', props.data);
  };

  const onClickDeleteBoardComment = (boardCommentId?: string) => {
    console.log('delete clicked', boardCommentId);
    setBoardCommentId(boardCommentId ?? '');
    setIsDeleteModalOpen(true);
  };

  const onConfirmDeleteBoardComment = async (password: string) => {
    if (!boardCommentId) {
      alert('댓글 ID가 없습니다.');
      return;
    }

    if (!router || typeof router.query.boardId !== 'string') {
      alert('잘못된 접근입니다.');
      return;
    }
    try {
      await deleteBoardComment({
        variables: {
          boardCommentId: boardCommentId,
          password: password,
        },
        update(cache) {
          cache.modify({
            fields: {
              fetchBoardComments(existingComments: readonly Reference[] = [], { readField }) {
                return existingComments.filter(
                  (commentRef: Reference) =>
                    readField<IBoardComment['_id']>('_id', commentRef) !== boardCommentId,
                );
              },
            },
          });
        },
      });
      alert('댓글이 삭제되었습니다.');
    } catch (error) {
      alert('댓글 삭제에 실패했습니다.');
      console.error(error);
    }
  };
  return (
    <CommentUI
      data={props.data}
      isUpdate={isUpdate}
      isDeleteModalOpen={isDeleteModalOpen}
      onCancelDeleteModal={onCancelDeleteModal}
      onClickUpdateBoardComment={onClickUpdateBoardComment}
      onClickDeleteBoardComment={onClickDeleteBoardComment}
      onConfirmDeleteBoardComment={onConfirmDeleteBoardComment}
    />
  );
}
