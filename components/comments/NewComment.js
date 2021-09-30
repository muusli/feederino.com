import React from 'react';

import { UserContext } from '../../lib/context';
import AuthCheck from '../auth/AuthCheck';
import { Input, Form, Media, Button, Row, Col } from 'reactstrap';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import Image from 'next/image';
import { firestore, auth, serverTimestamp } from '../../lib/firebase';
function NewComment(slug) {
	const { username } = useContext(UserContext);
	const router = useRouter();
	const createComment = async (e) => {
		e.preventDefault();
		const photoURL = auth.currentUser.photoURL;
		const uid = auth.currentUser.uid;
		const ref = firestore
			.collection('users')
			.doc(slug.authorId)
			.collection('recipes')
			.doc(slug.slug)
			.collection('comments');

		// Tip: give all fields a default value here
		const data = {
			content        : e.target.content.value,
			uid,
			username,
			authorPhotoURL : photoURL,
			createdAt      : serverTimestamp(),
			updatedAt      : serverTimestamp()
		};

		await ref
			.add(data)
			.then((docRef) => {
				router.push(`/${slug.username}/${slug.slug}`);
				toast.success('Kommentar hinzugefügt');
			})
			.catch((error) => {
				toast.error(error);
			});
	};
	return (
		<div>
			<AuthCheck>
				<Media className="align-items-center">
					{auth.currentUser ? (
						<img
							layout="fill"
							alt="..."
							className="avatar avatar-lg rounded-circle mr-4"
							src={auth.currentUser.photoURL}
						/>
					) : (
						''
					)}
					<Media body>
						<Form onSubmit={createComment}>
							<Input placeholder="Write your comment" name="content" rows="1" type="textarea" />
							<Row className="justify-content-md-end">
								{/* <Col md="2"> */}
								<Button
									justify="flex-end"
									size="sm"
									className="btn-icon btn-2 m-3"
									color="primary"
									type="submit"
								>
									<span className="btn-inner--icon">
										<i className="ni ni-chat-round" />
									</span>
									{'   '}
									Senden
								</Button>
								{/* </Col> */}
							</Row>
						</Form>
					</Media>
				</Media>
			</AuthCheck>
		</div>
	);
}

export default NewComment;
