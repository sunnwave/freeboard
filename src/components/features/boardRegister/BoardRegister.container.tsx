import { useRouter } from 'next/router';
import { ChangeEvent, useRef, useState } from 'react';
import { useMutation } from '@apollo/client';
import BoardRegisterUI from './BoardRegister.presenter';
import { CREATE_BOARD, UPDATE_BOARD, UPLOAD_FILE } from './BoardRegister.queries';
import { IBoardRegisterProps, ImyUpdateBoardInput } from './BoardRegister.types';
import { Address } from 'react-daum-postcode';
import { IMutation, IMutationUploadFileArgs } from '@/graphql';
import { checkValidationFile } from '@/commons/libraries/validationFile';

export default function BoardRegister(props: IBoardRegisterProps) {
  const [writer, setWriter] = useState('');
  const [password, setPassword] = useState('');
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [address, setAddress] = useState('');
  const [addressDetail, setAddressDetail] = useState('');
  const [youtubeUrl, setYoutubeUrl] = useState('');
  const [images, setImages] = useState<string[]>(['', '', '']);

  const fileRefs = [
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
    useRef<HTMLInputElement>(null),
  ];

  const [isAddressModalOpen, setIsAddressModalOpen] = useState(false);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const [buttonColor, setButtonColor] = useState('#EFEFEF');

  const [writerError, setWriterError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [titleError, setTitleError] = useState('');
  const [contentsError, setContentsError] = useState('');

  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [uploadFile] = useMutation<Pick<IMutation, 'uploadFile'>, IMutationUploadFileArgs>(
    UPLOAD_FILE,
  );

  const router = useRouter();

  function onChangeWriter(event: ChangeEvent<HTMLInputElement>) {
    setWriter(event.target.value);
    if (event.target.value !== '') {
      setWriterError('');
    }
    if (event.target.value && password && title && contents) {
      setButtonColor('#ffd600');
    } else {
      setButtonColor('#EFEFEF');
    }
  }
  function onChangePassword(event: ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
    if (event.target.value !== '') {
      setPasswordError('');
    }
    if (writer && event.target.value && title && contents) {
      setButtonColor('#ffd600');
    } else {
      setButtonColor('#EFEFEF');
    }
  }
  function onChangeTitle(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
    if (event.target.value !== '') {
      setTitleError('');
    }
    if (writer && password && event.target.value && contents) {
      setButtonColor('#ffd600');
    } else {
      setButtonColor('#EFEFEF');
    }
  }
  function onChangeContents(event: ChangeEvent<HTMLTextAreaElement>) {
    setContents(event.target.value);
    if (event.target.value !== '') {
      setContentsError('');
    }
    if (writer && event.target.value && password && title) {
      setButtonColor('#ffd600');
    } else {
      setButtonColor('#EFEFEF');
    }
  }
  function onChangeAddressDetail(event: ChangeEvent<HTMLInputElement>) {
    setAddressDetail(event.target.value);
  }

  const onChangeFile = (index: number) => async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; //배열로 들어오는 이유: <input type="file" multiple /> 일 때, 여러개 드래그 가능

    const isValid = checkValidationFile(file);
    if (!isValid) return;

    const result = await uploadFile({ variables: { file } });

    const newUrl = result.data?.uploadFile.url ?? '';
    setImages(prev => {
      const updated = [...prev];
      updated[index] = newUrl;
      return updated;
    });
  };

  const onClickAddImage = (index: number): void => {
    fileRefs[index].current?.click();
  };

  function onChangeYoutube(event: ChangeEvent<HTMLInputElement>) {
    setYoutubeUrl(event.target.value);
  }

  const onToggleAddressModal = (): void => {
    setIsAddressModalOpen(prev => !prev);
  };

  const onToggleAlertModal = (): void => {
    setIsAlertModalOpen(prev => !prev);
  };

  const handleAddressComplete = (data: Address) => {
    console.log(data);
    setZipcode(data.zonecode);
    setAddress(data.address);
    onToggleAddressModal();
  };

  const onClickRegister = async () => {
    if (!writer) {
      setWriterError('작성자를 입력하지 않았습니다. 작성자를 입력해주세요');
    }
    if (!password) {
      setPasswordError('비밀번호를 입력하지 않았습니다. 비밀번호를 입력해주세요');
    }
    if (!title) {
      setTitleError('제목을 입력하지 않았습니다. 제목을 입력해주세요.');
    }
    if (!contents) {
      setContentsError('내용을 입력하지 않았습니다. 내용을 입력해주세요');
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
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
              youtubeUrl,
              images: images.filter(url => url !== ''),
            },
          },
        });
        setAlertMessage('게시글이 등록되었습니다.');
        setIsAlertModalOpen(true);
        // console.log('alertMessage, isAlertModalOpen', alertMessage, isAlertModalOpen);
        // alert('게시글이 등록되었습니다.');
        console.log('result', result);
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

    if (!title && !contents && !zipcode && !address && !addressDetail && !youtubeUrl) {
      alert('수정된 내용이 없습니다.');
      return;
    }

    if (!password) {
      alert('비밀번호를 입력하지 않았습니다. 비밀번호를 입력해주세요');
      return;
    }

    if (title) myUpdateBoardInput.title = title;
    if (contents) myUpdateBoardInput.contents = contents;

    if (!myUpdateBoardInput.boardAddress) {
      myUpdateBoardInput.boardAddress = {};
    }
    if (zipcode) myUpdateBoardInput.boardAddress.zipcode = zipcode;
    if (address) myUpdateBoardInput.boardAddress.address = address;
    if (addressDetail) myUpdateBoardInput.boardAddress.addressDetail = addressDetail;
    if (youtubeUrl) myUpdateBoardInput.youtube = youtubeUrl;
    if (images) myUpdateBoardInput.images = images;

    try {
      //TIL : router.query.boardId의 타입을 확인 router.query.boardId가 string일 때만 작동될 수 있도록 함
      if (typeof router.query.boardId !== 'string') {
        alert('시스템에 문제가 있습니다. 잠시 후 다시 시도해주세요.');
        return;
      }
      const result = await updateBoard({
        variables: {
          password,
          boardId: router.query.boardId, //TIL: boardId는 string 타입이므로, router.query.boardId가 string일 때만 작동됨
          updateBoardInput: myUpdateBoardInput,
        },
      });
      alert('게시물이 수정되었습니다');
      router.push(`/boards/${router.query.boardId}`);
    } catch (err) {
      //TIL: instanceof( 자식요소인지 판별)
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
        writerError={writerError}
        passwordError={passwordError}
        titleError={titleError}
        contentsError={contentsError}
        buttonColor={buttonColor}
        zipcode={zipcode}
        address={address}
        fileRefs={fileRefs}
        isAddressModalOpen={isAddressModalOpen}
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        onChangeFile={onChangeFile}
        onClickAddImage={onClickAddImage}
        onChangeYoutube={onChangeYoutube}
        handleAddressComplete={handleAddressComplete}
        onChangeAddressDetail={onChangeAddressDetail}
        onClickRegister={onClickRegister}
        onClickUpdate={onClickUpdate}
        onToggleAddressModal={onToggleAddressModal}
        onToggleAlertModal={onToggleAlertModal}
        alertMessage={alertMessage}
        isAlertModalOpen={isAlertModalOpen}
        images={images}
      />
    </>
  );
}
