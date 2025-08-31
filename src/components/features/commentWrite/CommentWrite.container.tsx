import { useRouter } from 'next/router';
import CommentWriteUI from './CommentWrite.presenter';
import { useMutation } from '@apollo/client';
import { CREATE_BOARD_COMMENT, FETCH_BOARD_COMMENTS } from './CommentWrite.queries';
import { ChangeEvent, useState } from 'react';
import { ICommentWriteProps } from './CommentWrite.types';

export default function CommentWrite(props: ICommentWriteProps) {
  const router = useRouter();

  const [createBoardComment] = useMutation(CREATE_BOARD_COMMENT);

  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [rating, setRating] = useState(0);
  const [contents, setContents] = useState('');
  const [contentsCount, setContentsCount] = useState(0);

  function onChangeWriter(event: ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);
  }

  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function onChangeRating(rate: number) {
    setRating(rate);
  }

  function onChangeContents(event: ChangeEvent<HTMLTextAreaElement>) {
    setContents(event.target.value);
    setContentsCount(event.target.value.length);
  }

  const onClickRegister = async () => {
    if (!contents) {
      alert('댓글을 작성해주세요.');
      return;
    }
    if (!password) {
      alert('비밀번호를 입력해주세요.');
      return;
    }
    try {
      await createBoardComment({
        variables: {
          boardId: router.query.boardId,
          createBoardCommentInput: {
            writer: writer ? writer : '익명',
            password,
            contents,
            rating,
          },
        },
        // refetchQueries: [
        //   {
        //     query: FETCH_BOARD_COMMENTS,
        //     variables: {
        //       page: 1,
        //       boardId: router.query.boardId as string,
        //     },
        //   },
        // ],
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
    setWriter('');
    setPassword('');
    setRating(0);
    setContents('');
  };

  return (
    <CommentWriteUI
      isUpdate={props.isUpdate}
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeRating={onChangeRating}
      onChangeContents={onChangeContents}
      onClickRegister={onClickRegister}
      contentsCount={contentsCount}
      rating={rating}
      writer={writer}
      password={password}
      contents={contents}
    />
  );
}
