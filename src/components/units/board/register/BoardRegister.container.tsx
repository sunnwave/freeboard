import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import BoardRegisterUI from "./BoardRegister.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardRegister.queries";
import {
  IBoardRegisterProps,
  ImyUpdateBoardInput,
} from "./BoardRegister.types";

export default function BoardRegister(props: IBoardRegisterProps) {
  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");

  const [buttonColor, setButtonColor] = useState("#EFEFEF");

  const [writerError, setWriterError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [titleError, setTitleError] = useState("");
  const [contentsError, setContentsError] = useState("");

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  const router = useRouter();

  function onChangeWriter(event: ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);
    if (event.target.value !== "") {
      setWriterError("");
    }
    if (event.target.value && password && title && contents) {
      setButtonColor("#ffd600");
    } else {
      setButtonColor("#EFEFEF");
    }
  }
  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    if (event.target.value !== "") {
      setPasswordError("");
    }
    if (writer && event.target.value && title && contents) {
      setButtonColor("#ffd600");
    } else {
      setButtonColor("#EFEFEF");
    }
  }
  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
    if (event.target.value !== "") {
      setTitleError("");
    }
    if (writer && password && event.target.value && contents) {
      setButtonColor("#ffd600");
    } else {
      setButtonColor("#EFEFEF");
    }
  }
  function onChangeContents(event: ChangeEvent<HTMLTextAreaElement>) {
    setContents(event.target.value);
    if (event.target.value !== "") {
      setContentsError("");
    }
    if (writer && event.target.value && password && title) {
      setButtonColor("#ffd600");
    } else {
      setButtonColor("#EFEFEF");
    }
  }
  // function onChangeZipcode(event: ChangeEvent<HTMLInputElement>) {
  //   setZipcode(event.target.value);
  // }
  // function onChangeAddress(event: ChangeEvent<HTMLInputElement>) {
  //   setAddress(event.target.value);
  // }
  // function onChangeAddressDetail(event: ChangeEvent<HTMLInputElement>) {
  //   setAddressDetail(event.target.value);
  // }
  // function onChangeYoutube(event: ChangeEvent<HTMLInputElement>) {
  //   setYoutube(event.target.value);
  // }

  const onClickRegister = async () => {
    if (!writer) {
      setWriterError("작성자를 입력하지 않았습니다. 작성자를 입력해주세요");
    }
    if (!password) {
      setPasswordError(
        "비밀번호를 입력하지 않았습니다. 비밀번호를 입력해주세요"
      );
    }
    if (!title) {
      setTitleError("제목을 입력하지 않았습니다. 제목을 입력해주세요.");
    }
    if (!contents) {
      setContentsError("내용을 입력하지 않았습니다. 내용을 입력해주세요");
    }

    if (writer && password && title && contents) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents,
            },
          },
        });
        alert("게시글이 등록되었습니다.");
        router.push(`/boards/${result.data.createBoard._id}`);
      } catch (error) {
        if (error instanceof Error) {
          console.error(error);
          alert(error.message);
        }
      }
    }
  };

  const onClickUpdate = async () => {
    const myUpdateBoardInput: ImyUpdateBoardInput = {};

    if (!title && !contents) {
      alert("수정된 내용이 없습니다.");
      return;
    }

    if (!password) {
      alert("비밀번호를 입력하지 않았습니다. 비밀번호를 입력해주세요");
      return;
    }

    if (title) myUpdateBoardInput.title = title;
    if (contents) myUpdateBoardInput.contents = contents;

    try {
      const result = await updateBoard({
        variables: {
          password,
          boardId: router.query.boardId,
          updateBoardInput: myUpdateBoardInput,
        },
      });
      alert("게시물이 수정되었습니다");
      router.push(`/boards/${router.query.boardId}`);
    } catch (err) {
      if (err instanceof Error) {
        console.error(err);
        alert(err.message);
      }
    }
  };

  return (
    <>
      <BoardRegisterUI
        data={props.data}
        isUpdate={props.isUpdate}
        onChangeWriter={onChangeWriter}
        writerError={writerError}
        onChangePassword={onChangePassword}
        passwordError={passwordError}
        onChangeTitle={onChangeTitle}
        titleError={titleError}
        onChangeContents={onChangeContents}
        contentsError={contentsError}
        // onChangeZipcode={onChangeZipcode}
        // onChangeAddress={onChangeAddress}
        // onChangeAddressDetail={onChangeAddressDetail}
        // onChangeYoutube={onChangeYoutube}
        onClickRegister={onClickRegister}
        onClickUpdate={onClickUpdate}
        buttonColor={buttonColor}
      />
    </>
  );
}
