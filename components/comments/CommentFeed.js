import Link from 'next/link';
import HeartButton from '../Inputs/HeartButton';
import { firestore, getUserWithUsername } from '../../lib/firebase';
import {
	Card,
	CardImg,
	CardHeader,
	Row,
	CardBody,
	UncontrolledTooltip,
	CardTitle,
	Button,
	Col,
	Media,
	Input,
	Form,
	CardText
} from 'reactstrap';

export default function CommentFeed({ comments, slug, admin, commentRef }) {
	return comments ? comments.map((comment) => <PostItem comment={comment} key={comment._id} admin={admin} />) : null;
}

function PostItem({ comment, admin = false }) {
	return (
		<div>
			<Media className="media-comment">
				<img
					alt="..."
					className="avatar avatar-lg media-comment-avatar rounded-circle"
					src={comment.authorPhotoURL}
				/>

				<Media>
					{' '}
					<div className="media-comment-text">
						<h5>
							<Link href={`/${comment.username}`}>{`${comment.username}`}</Link>
						</h5>
						<p className="text-sm lh-160">{comment.content}</p>
						<div className="icon-actions">
							{/* <a className="like active" href="#pablo" onClick={(e) => e.preventDefault()}>
								<i className="ni ni-like-2" />
								<span className="text-muted">3 likes</span>
							</a> */}
						</div>
					</div>
				</Media>
			</Media>
		</div>
	);
}
