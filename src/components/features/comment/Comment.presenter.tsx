import * as C from './Comment.styles';
import { VscStarFull } from 'react-icons/vsc';
import moment from 'moment';
import { ICommentUIProps } from './Comment.types';

export default function CommentUI(props: ICommentUIProps) {
  return (
    <C.CommentWrappper key={props.data?._id}>
      <C.ProfileWrapper>
        <C.ProfileImg src="/commentRead/profile.png" />
        <C.ProfileInfoWrapper>
          <C.NameStarWrapper>
            <C.UserName>{props.data?.writer}</C.UserName>
            <C.StarWrapper>
              <VscStarFull className="star" />
              <VscStarFull className="star" />
              <VscStarFull className="star" />
              <VscStarFull className="star" />
              <VscStarFull className="star" />
            </C.StarWrapper>
          </C.NameStarWrapper>
          <C.Comment>{props.data?.contents}</C.Comment>
          <C.Date>{moment(props.data?.createdAt).format('YYYY.MM.DD')}</C.Date>
        </C.ProfileInfoWrapper>
      </C.ProfileWrapper>
      <div>
        <C.IconButton
        // onClick={() => props.onClickUpdateBoardComment(props.data?._id)}
        >
          <img src="/commentRead/ic_update.png" alt="Update Comment" />
        </C.IconButton>
        <C.IconButton onClick={() => props.onClickDeleteBoardComment(props.data?._id)}>
          <img src="/commentRead/ic_delete.png" alt="Delete Comment" />
        </C.IconButton>
      </div>
    </C.CommentWrappper>
  );
}
