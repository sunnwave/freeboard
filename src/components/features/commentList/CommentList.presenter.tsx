import { ICommentListProps } from './CommentList.types';
import Comment from '../comment/Comment.container';

export default function CommentListUI(props: ICommentListProps) {
  return (
    <>
      {props.data?.fetchBoardComments.map(el => (
        <Comment data={el} key={el._id} />
      ))}
    </>
  );
}
