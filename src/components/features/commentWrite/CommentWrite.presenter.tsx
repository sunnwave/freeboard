import { Rate } from 'antd';
import * as W from './CommentWrite.styles';
import { ICommentWriteUIProps } from './CommentWrite.types';

export default function CommentWriteUI(props: ICommentWriteUIProps) {
  return (
    <div>
      {props.isUpdate !== true && (
        <W.CommentTitleWrapper>
          <W.CommentIcon src="/comment/ic_comment.png" />
          <W.CommentLabel>댓글</W.CommentLabel>
        </W.CommentTitleWrapper>
      )}
      <W.CommentWriteWrapper>
        <W.CommentInfoWrapper>
          <W.InfoInput
            type="text"
            placeholder="작성자"
            onChange={props.onChangeWriter}
            value={props?.data?.writer ?? props.writer ?? ''}
            // defaultValue={props?.data?.writer ?? ''}
            disabled={!!props.data?.writer}
          />
          <W.InfoInput
            type="password"
            placeholder="비밀번호"
            onChange={props.onChangePassword}
            //TIL :value를 props로 받아와서 초기값 설정: 작성 후 빈칸으로 초기화
            value={props.password}
          />
          <Rate onChange={props.onChangeRating} value={props.rating} />
        </W.CommentInfoWrapper>
        <W.CommentInputWrapper>
          <W.CommentInput
            placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
            onChange={props.onChangeContents}
            // defaultValue={props?.data?.contents ?? ''}
            value={props.contents ?? ''}
            maxLength={100}
          />
          <W.CommentFooterWrapper>
            <W.CommentCounter>{props.contentsCount}/100</W.CommentCounter>
            <W.CommentRegisterButton onClick={props.onClickRegister}>
              {props.isUpdate ? '수정' : '등록'}하기
            </W.CommentRegisterButton>
          </W.CommentFooterWrapper>
        </W.CommentInputWrapper>
      </W.CommentWriteWrapper>
    </div>
  );
}
