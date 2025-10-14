import { useRouter } from 'next/router';
import CommentWriteUI from './CommentWrite.presenter';
import { useMutation } from '@apollo/client';
import { CREATE_BOARD_COMMENT, UPDATE_BOARD_COMMENT } from './CommentWrite.queries';
import { ChangeEvent, useEffect, useState } from 'react';
import { ICommentWriteProps } from './CommentWrite.types';

export default function CommentWrite(props: ICommentWriteProps) {
  const router = useRouter();

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);
  const [updateBoardComment] = useMutation(UPDATE_BOARD_COMMENT);

  const [input, setInput] = useState({
    writer: '',
    password: '',
    rating: 0,
    contents: '',
  });

  useEffect(() => {
    if (props.isUpdate && props.data) {
      setInput({
        writer: props.data.writer ?? '익명',
        password: '',
        rating: props.data.rating ?? 0,
        contents: props.data.contents ?? '',
      });
    }
  }, [props.data, props.isUpdate]);

  function onChangeInput(event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) {
    setInput(prev => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
  }

  function onChangeRating(rating: number) {
    setInput(prev => ({
      ...prev,
      rating: rating,
    }));
  }

  const onClickRegister = async () => {
    if (!input.contents) {
      alert('댓글을 작성해주세요.');
      return;
    }
    if (!input) {
      alert('비밀번호를 입력해주세요.');
      return;
    }
    try {
      await createBoardComment({
        variables: {
          boardId: router.query.boardId,
          createBoardCommentInput: {
            writer: input.writer ?? '익명',
            password: input.password,
            contents: input.contents,
            rating: input.rating,
          },
        },
        update(cache, { data }) {
          if (!data) return;

          const newComment = data.createBoardComment;

          cache.modify({
            fields: {
              fetchBoardComments(existing = []) {
                return [newComment, ...existing];
              },
            },
          });
        },
      });
      alert('댓글이 등록되었습니다.');
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
        console.error(err);
      }
    }
    setInput({
      writer: '',
      password: '',
      rating: 0,
      contents: '',
    });
  };

  const onClickUpdate = async () => {
    try {
      await updateBoardComment({
        variables: {
          boardCommentId: props.data?._id,
          password: input.password,
          updateBoardCommentInput: {
            contents: input.contents,
            rating: input.rating,
          },
        },
      });
      alert('댓글이 수정되었습니다.');
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message);
        console.error(err);
      }
    }
  };

  return (
    <CommentWriteUI
      data={props.data}
      isUpdate={props.isUpdate}
      input={input}
      onChangeInput={onChangeInput}
      onChangeRating={onChangeRating}
      onClickRegister={onClickRegister}
      onClickUpdate={onClickUpdate}
    />
  );
}
