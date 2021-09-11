import { auth, firestore, googleAuthProvider, serverTimestamp } from '../../lib/firebase';
import { UserContext } from '../../lib/context';
import 'assets/scss/nextjs-argon-dashboard-pro.scss?v1.1.0';
import { useEffect, useState, useCallback, useContext } from 'react';
import debounce from 'lodash.debounce';
import router from 'next/router';
import Default from '../../layouts/Default.js';
import { Button, Input } from 'reactstrap';
export default function Enter(props) {
	const { user, username } = useContext(UserContext);

	// 1. user signed out <SignInButton />
	// 2. user signed in, but missing username <UsernameForm />
	// 3. user signed in, has username <SignOutButton />
	return (
		<main>
			{/* <Metatags title="Enter" description="Sign up for this amazing app!" /> */}
			{user ? !username ? <UsernameForm /> : <SignOutButton /> : <SignInButton />}
		</main>
	);
}

// Sign in with Google button
function SignInButton() {
	const signInWithGoogle = async () => {
		await auth.signInWithPopup(googleAuthProvider);
	};

	return (
		// <button className="btn-google" onClick={signInWithGoogle}>
		// 	<img src={'/google.jpg'} width="30px" /> Sign in with Google
		// </button>
		<Button className="btn-neutral btn-icon btn-google" color="default" href="#pablo" onClick={signInWithGoogle}>
			<span className="btn-inner--icon mr-1">
				<img alt="..." src={require('assets/img/icons/common/google.svg')} />
			</span>
			<span className="btn-inner--text">Google</span>
		</Button>
	);
}

// Sign out button
function SignOutButton() {
	return <button onClick={() => auth.signOut()}>Sign Out</button>;
}

// Username form
function UsernameForm() {
	const [ formValue, setFormValue ] = useState('');
	const [ isValid, setIsValid ] = useState(false);
	const [ loading, setLoading ] = useState(false);

	const { user, username } = useContext(UserContext);

	const onSubmit = async (e) => {
		e.preventDefault();

		// Create refs for both documents
		const userDoc = firestore.doc(`users/${user.uid}`);
		const usernameDoc = firestore.doc(`usernames/${formValue}`);

		// Commit both docs together as a batch write.
		const batch = firestore.batch();
		batch.set(userDoc, { username: formValue, photoURL: user.photoURL, displayName: user.displayName });
		batch.set(usernameDoc, { uid: user.uid });
		const mealplanDoc = firestore.doc(`users/${user.uid}/mealplans/currentMealplan`);
		batch.set(mealplanDoc, {
			uid       : user.uid,
			createdAt : serverTimestamp(),
			updatedAt : serverTimestamp()
		});

		await batch.commit().then(router.push('/recipes'));
	};

	const onChange = (e) => {
		// Force form value typed in form to match correct format
		const val = e.target.value.toLowerCase();
		const re = /^(?=[a-zA-Z0-9._]{3,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

		// Only set form value if length is < 3 OR it passes regex
		if (val.length < 3) {
			setFormValue(val);
			setLoading(false);
			setIsValid(false);
		}

		if (re.test(val)) {
			setFormValue(val);
			setLoading(true);
			setIsValid(false);
		}
	};

	//

	useEffect(
		() => {
			checkUsername(formValue);
		},
		[ formValue ]
	);

	// Hit the database for username match after each debounced change
	// useCallback is required for debounce to work
	const checkUsername = useCallback(
		debounce(async (username) => {
			if (username.length >= 3) {
				const ref = firestore.doc(`usernames/${username}`);
				const { exists } = await ref.get();
				console.log('Firestore read executed!');
				setIsValid(!exists);
				setLoading(false);
			}
		}, 500),
		[]
	);

	return (
		!username && (
			<section>
				<h3>Wähle einen Namen</h3>
				<form onSubmit={onSubmit}>
					<Input name="username" placeholder="Name" value={formValue} onChange={onChange} />
					<UsernameMessage username={formValue} isValid={isValid} loading={loading} />
					<Button type="submit" outline color="success" disabled={!isValid}>
						Wählen
					</Button>

					{/* <h3>Debug State</h3>
					<div>
						Username: {formValue}
						<br />
						Loading: {loading.toString()}
						<br />
						Username Valid: {isValid.toString()}
					</div> */}
				</form>
			</section>
		)
	);
}

function UsernameMessage({ username, isValid, loading }) {
	if (loading) {
		return <p>Überprüfe...</p>;
	}
	else if (isValid) {
		return <p className="text-success">{username} ist verfügbar</p>;
	}
	else if (username && !isValid) {
		return <p className="text-danger">Der Name ist leider vergeben</p>;
	}
	else {
		return <p />;
	}
}
Enter.layout = Default;
