import * as W from "./CommentWrite.styles";
import { VscStarFull } from "react-icons/vsc";
import { ICommentWriteUIProps } from "./CommentWrite.types";

export default function CommentWriteUI(props: ICommentWriteUIProps) {
  return (
    <W.CommentWriteWrapper>
      <W.CommentInfoWrapper>
        <W.InfoInput placeholder="작성자" onChange={props.onChangeWriter} />
        <W.InfoInput
          type="password"
          placeholder="비밀번호"
          onChange={props.onChangePassword}
        />
        <W.StarWrapper>
          <VscStarFull className="star" />
          <VscStarFull className="star" />
          <VscStarFull className="star" />
          <VscStarFull className="star" />
          <VscStarFull className="star" />
        </W.StarWrapper>
      </W.CommentInfoWrapper>
      <W.CommentInputWrapper>
        <W.CommentInput
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          onChange={props.onChangeContents}
          maxLength={100}
        />
        <W.CommentFooterWrapper>
          <W.CommentCounter>{props.contentsCount}/100</W.CommentCounter>
          <W.CommentRegisterButton onClick={props.onClickRegister}>
            {props.isUpdate ? "수정" : "등록"}하기
          </W.CommentRegisterButton>
        </W.CommentFooterWrapper>
      </W.CommentInputWrapper>
    </W.CommentWriteWrapper>
  );
}
