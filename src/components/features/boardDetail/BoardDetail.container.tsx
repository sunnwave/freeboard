import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';
import { DELETE_BOARD, FETCH_BOARD } from './BoardDetail.queries';
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from '../../../commons/types/generated/types';
import BoardDetailUI from './BoardDetail.presenter';
import { useState } from 'react';

export default function BoardDetail() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [modalTitle, setModalTitle] = useState('');
  const [confirmResult, setConfirmResult] = useState(false);

  const { data } = useQuery<Pick<IQuery, 'fetchBoard'>, IQueryFetchBoardArgs>(FETCH_BOARD, {
    variables: { boardId: router.query.boardId as string },
  });

  console.log('data', data);
  const [deleteBoard] = useMutation<Pick<IMutation, 'deleteBoard'>, IMutationDeleteBoardArgs>(
    DELETE_BOARD,
  );

  if (!router || typeof router.query.boardId !== 'string') {
    return <></>;
  }

  const onToggleModal = (): void => {
    setIsModalOpen(prev => !prev);
  };

  const handleOk = () => {
    setConfirmResult(true);
    onToggleModal();
  };

  const handleCancel = () => {
    setConfirmResult(false);
    onToggleModal();
  };

  const onClickToList = () => {
    router.push(`/boards`);
  };
  const onClickUpdate = async () => {
    router.push(`/boards/${router.query.boardId}/update`);
  };

  const onClickDelete = async () => {
    setModalTitle('게시물 삭제');
    setMessage('게시물을 삭제하시겠습니까?');
    setIsModalOpen(true);
    console.log('confirmResult', confirmResult);
    // const confirmResult = confirm('게시물을 삭제하시겠습니까?');
    if (confirmResult) {
      try {
        if (!router.query.boardId || typeof router.query.boardId !== 'string') {
          return;
        }
        const result = await deleteBoard({
          variables: {
            boardId: router.query.boardId,
          },
        });

        setMessage('게시물이 삭제되었습니다');
        onToggleModal();
        router.push(`/boards`);
      } catch (err) {
        setMessage('게시물 삭제에 실패하였습니다');
        onToggleModal();
        console.error(err);
      }
    }
  };
  return (
    <>
      <BoardDetailUI
        data={data}
        onClickToList={onClickToList}
        onClickUpdate={onClickUpdate}
        onClickDelete={onClickDelete}
        onToggleModal={onToggleModal}
        handleOk={handleOk}
        handleCancel={handleCancel}
        isModalOpen={isModalOpen}
        message={message}
        modalTitle={modalTitle}
      />
    </>
  );
}
