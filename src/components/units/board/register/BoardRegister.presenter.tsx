import {
  Wrapper,
  Title,
  WriterWrapper,
  InputWrapper,
  Label,
  Writer,
  Password,
  Subject,
  Contents,
  ZipcodeWrapper,
  Zipcode,
  SearchButton,
  Address,
  Youtube,
  ImageWrapper,
  UploadButtonWrapper,
  UploadButton,
  OptionWrapper,
  RadioWrapper,
  RadioButton,
  RadioLabel,
  ButtonWrapper,
  RegisterButton,
  Error,
} from "./BoardRegister.styles";
import { IBoardRegisterUIProps } from "./BoardRegister.types";

export default function BoardRegisterUI(props: IBoardRegisterUIProps) {
  return (
    <>
      <Wrapper>
        <Title>게시물 {props.isUpdate ? "수정" : "등록"}</Title>
        <WriterWrapper>
          <InputWrapper>
            <Label>작성자</Label>
            <Writer
              type="text"
              placeholder="이름을 적어주세요."
              onChange={props.onChangeWriter}
              defaultValue={props?.data?.fetchBoard.writer}
              disabled={props.data?.fetchBoard.writer}
            />
            <Error>{props.writerError}</Error>
          </InputWrapper>
          <InputWrapper>
            <Label>비밀번호</Label>
            <Password
              type="password"
              placeholder="비밀번호를 입력해주세요."
              onChange={props.onChangePassword}
            />
            <Error>{props.passwordError}</Error>
          </InputWrapper>
        </WriterWrapper>
        <InputWrapper>
          <Label>제목</Label>
          <Subject
            type="text"
            placeholder="제목을 작성해주세요."
            onChange={props.onChangeTitle}
            defaultValue={props.data?.fetchBoard.title}
          />
          <Error>{props.titleError}</Error>
        </InputWrapper>
        <InputWrapper>
          <Label>내용</Label>
          <Contents
            placeholder="내용을 작성해주세요."
            onChange={props.onChangeContents}
            defaultValue={props.data?.fetchBoard.contents}
          />
          <Error>{props.contentsError}</Error>
        </InputWrapper>
        <InputWrapper>
          <Label>주소</Label>
          <ZipcodeWrapper>
            <Zipcode placeholder="07250" onChange={props.onChangeZipcode} />
            <SearchButton>우편번호 검색</SearchButton>
          </ZipcodeWrapper>
          <Address onChange={props.onChangeAddress} />
          <Address onChange={props.onChangeAddressDetail} />
        </InputWrapper>
        <InputWrapper>
          <Label>유튜브</Label>
          <Youtube
            placeholder="링크를 복사해주세요."
            onChange={props.onChangeYoutube}
          />
        </InputWrapper>
        <ImageWrapper>
          <Label>사진 첨부</Label>
          <UploadButtonWrapper>
            <UploadButton>+</UploadButton>
            <UploadButton>+</UploadButton>
            <UploadButton>+</UploadButton>
          </UploadButtonWrapper>
        </ImageWrapper>
        <OptionWrapper>
          <Label>메인 설정</Label>
          <RadioWrapper>
            <RadioButton type="radio" id="youtube" name="radio-button" />
            <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
            <RadioButton type="radio" id="image" name="radio-button" />
            <RadioLabel htmlFor="youtube">사진</RadioLabel>
          </RadioWrapper>
        </OptionWrapper>
        <ButtonWrapper>
          <RegisterButton
            onClick={
              props.isUpdate ? props.onClickUpdate : props.onClickRegister
            }
            style={{ background: props.buttonColor }}
          >
            {props.isUpdate ? "수정" : "등록"}하기
          </RegisterButton>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
}
