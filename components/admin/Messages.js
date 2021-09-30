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
	CardText
} from 'reactstrap';
export default function PostFeed({ posts, admin, postRef }) {
	return posts ? posts.map((post) => <PostItem post={post} key={post.slug} admin={admin} />) : null;
}

function PostItem({ post, admin = false }) {
	return (
		<Col md="12" justify-self="center">
			<Card>
				<CardBody>
					<h5 className="h3 mb-0">{post.email}</h5>
					<small>
						{post.prename} {post.name}
					</small>
					<p className="mb-4">{post.message}</p>
					{/* <Link href={`/${post.username}/${post.slug}`}>
						<Image alt="..." className="img-fluid rounded" src={post.image} />
					</Link>
					<Row className="align-items-center my-3 pb-3 border-bottom">
						<Col sm="6">
							<div className="icon-actions">
								<a className="like active" href="#pablo" onClick={(e) => e.preventDefault()}>
									<i className="far fa-heart text-danger" />
									<span className="text-muted">{post.heartCount || 0}</span>
								</a>
							</div>
						</Col>
						<Col className="d-none d-sm-block" sm="6">
							<div className="d-flex align-items-center justify-content-sm-end">
								<small className="text-muted">
									by{' '}
									<Link href={`/${post.username}`}>
										<a>
											<strong>@{post.username}</strong>
										</a>
									</Link>
								</small>
							</div>
						</Col>
					</Row> */}
				</CardBody>
			</Card>
		</Col>
	);
}
