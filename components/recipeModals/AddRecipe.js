import React from 'react';
import { Button, Modal, ModalBody, ModalFooter, Form, InputGroup, Input, Col } from 'reactstrap';
import { UserContext } from '../../lib/context';
import { firestore, auth, serverTimestamp } from '../../lib/firebase';
import toast from 'react-hot-toast';
import { useContext } from 'react';
import kebabCase from 'lodash.kebabcase';
import { useRouter } from 'next/router';
import classnames from 'classnames';
export default function Page({}) {
	const [ modalOpen, setModalOpen ] = React.useState(false);
	const { username } = useContext(UserContext);
	const [ titleFocus, setTitleFocus ] = React.useState(false);
	const [ title, setTitle ] = React.useState('');
	const slug = encodeURI(kebabCase(title));
	const isValid = title.length > 3 && title.length < 100;
	const router = useRouter();
	const createPost = async (event) => {
		event.preventDefault();
		//   const uid = auth.currentUser.uid;
		const uid = auth.currentUser.uid;
		const photoURL = auth.currentUser.photoURL;
		const ref = firestore.collection('users').doc(uid).collection('recipes').doc(slug);

		// Tip: give all fields a default value here
		const data = {
			title,
			slug,
			uid,
			username,
			authorPhotoURL : photoURL,
			ingredients    : [],
			steps          : [],
			categories     : [],
			published      : false,

			createdAt      : serverTimestamp(),
			updatedAt      : serverTimestamp(),
			heartCount     : 0
		};
		console.log(data);
		await ref.set(data);
		setModalOpen(!modalOpen);
		toast.success('Post created!');
		router.push(`/recipes/myRecipes/${slug}`);
		// Imperative navigation after doc is set
		//   router.push(`/collection/myrecipes`);
	};
	return (
		<main>
			<Button className="btn-neutral" color="default" onClick={() => setModalOpen(!modalOpen)} size="sm">
				Neues Rezept
			</Button>
			<Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
				<div className=" modal-header">
					<h5 className=" modal-title" id="exampleModalLabel">
						Rezept hinzufügen
					</h5>
					<button
						aria-label="Close"
						className=" close"
						type="button"
						onClick={() => setModalOpen(!modalOpen)}
					>
						<span aria-hidden={true}>×</span>
					</button>
				</div>
				<Form onSubmit={createPost}>
					<ModalBody>
						<Col>
							<InputGroup>
								<Input
									placeholder="Titel"
									value={title}
									onChange={(e) => setTitle(e.target.value)}
									onFocus={(e) => setTitleFocus(true)}
									onBlur={(e) => setTitleFocus(false)}
								/>
							</InputGroup>
						</Col>
					</ModalBody>
					<ModalFooter>
						<Button color="secondary" type="button" onClick={() => setModalOpen(!modalOpen)}>
							Close
						</Button>
						<Button color="primary" type="submit" disabled={!isValid}>
							Save changes
						</Button>
					</ModalFooter>
				</Form>
			</Modal>
		</main>
	);
}
