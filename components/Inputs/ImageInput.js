import React from 'react';
import { useState } from 'react';
import { ListGroup, ListGroupItem, Row, Col, Button } from 'reactstrap';
import { auth, storage, STATE_CHANGED } from '../../lib/firebase';
import { Input, Progress } from 'reactstrap';
function ImageInput({ register, setImage, defaultImage }) {
	const [ downloadURL, setDownloadURL ] = React.useState(null);

	const [ uploading, setUploading ] = useState(false);
	const [ progress, setProgress ] = useState(0);

	// React.useEffect(async () => {
	// 	// we make a dynamic import for the Dropzone, as this component is not made to work on SSR
	// 	const Dropzone = (await import('dropzone')).default;
	// 	Dropzone.autoDiscover = false;
	// 	// this variable is to delete the previous image from the dropzone state
	// 	// it is just to make the HTML DOM a bit better, and keep it light
	// 	let currentMultipleFile = undefined;
	// 	// multiple dropzone file - accepts any type of file
	// 	new Dropzone(document.getElementById('dropzone-multiple'), {
	// 		url               : '/recipes',
	// 		thumbnailWidth    : null,
	// 		thumbnailHeight   : null,
	// 		previewsContainer : document.getElementsByClassName('dz-preview-multiple')[0],
	// 		previewTemplate   : document.getElementsByClassName('dz-preview-multiple')[0].innerHTML,
	// 		maxFiles          : null,
	// 		acceptedFiles     : null,
	// 		init              : function() {
	// 			this.on('addedfile', function(file) {
	// 				if (currentMultipleFile) {
	// 				}
	// 				currentMultipleFile = file;
	// 			});
	// 		}
	// 	});
	// 	document.getElementsByClassName('dz-preview-multiple')[0].innerHTML = '';
	// }, []);

	React.useEffect(async () => {
		const Dropzone = (await import('dropzone')).default;
		Dropzone.autoDiscover = false;
		// this variable is to delete the previous image from the dropzone state
		// it is just to make the HTML DOM a bit better, and keep it light
		let currentSingleFile = defaultImage;
		// single dropzone file - accepts only images
		new Dropzone(document.getElementById('dropzone-single'), {
			url               : '/recipes',
			thumbnailWidth    : null,
			thumbnailHeight   : null,
			previewsContainer : document.getElementsByClassName('dz-preview-single')[0],
			previewTemplate   : document.getElementsByClassName('dz-preview-single')[0].innerHTML,
			maxFiles          : 1,
			acceptedFiles     : 'image/*',
			init              : function() {
				this.on('addedfile', function(file) {
					if (currentSingleFile) {
						this.removeFile(currentSingleFile);
					}
					currentSingleFile = file;
					uploadFile(file);
					// console.log(downloadURL);
				});
			}
		});

		document.getElementsByClassName('dz-preview-single')[0].innerHTML = '';
	}, []);

	// Creates a Firebase Upload Task
	const uploadFile = async (file) => {
		// Get the file

		const extension = file.type.split('/')[1];

		// Makes reference to the storage bucket location
		const ref = storage.ref(`uploads/${auth.currentUser.uid}/${Date.now()}.${extension}`);
		setUploading(true);

		// Starts the upload
		const task = ref.put(file);

		// Listen to updates to upload task
		task.on(STATE_CHANGED, (snapshot) => {
			const pct = (snapshot.bytesTransferred / snapshot.totalBytes * 100).toFixed(0);
			setProgress(pct);

			// Get downloadURL AFTER task resolves (Note: this is not a native Promise)
			task.then((d) => ref.getDownloadURL()).then((url) => {
				console.log(url);
				setImage(url);
				setDownloadURL(url);

				setUploading(false);
			});
		});
	};

	return (
		<div>
			<div className="dropzone dropzone-single mb-3" id="dropzone-single">
				<div className="fallback">
					<div className="custom-file">
						<input
							accept="image/x-png,image/gif,image/jpeg"
							onChange={uploadFile}
							className="custom-file-input"
							id="projectCoverUploads"
							type="file"
						/>
						<label className="custom-file-label" htmlFor="projectCoverUploads">
							Choose file
						</label>
					</div>
				</div>
				<div className="dz-preview dz-preview-single">
					<div className="dz-preview-cover">
						<img alt="..." className="dz-preview-img" data-dz-thumbnail="" />
					</div>
				</div>
			</div>

			{/* <div className="dropzone dropzone-multiple" id="dropzone-multiple">
				<div className="fallback">
					<div className="custom-file">
						<input
							className="custom-file-input"
							id="customFileUploadMultiple"
							onChange={uploadFile}
							multiple="multiple"
							type="file"
						/>
						<label className="custom-file-label" htmlFor="customFileUploadMultiple">
							Choose file
						</label>
					</div>
				</div>
				<ListGroup className=" dz-preview dz-preview-multiple list-group-lg" flush>
					<ListGroupItem className=" px-0">
						<Row className=" align-items-center">
							<Col className=" col-auto">
								<div className=" avatar">
									<img
										alt="..."
										className=" avatar-img rounded"
										data-dz-thumbnail
										src={defaultImage}
									/>
								</div>
							</Col>
							<div className=" col ml--3">
								<h4 className=" mb-1" data-dz-name>
									...
								</h4>
								<p className=" small text-muted mb-0" data-dz-size>
									...
								</p>
							</div>
							<Col className=" col-auto">
								<Button size="sm" color="danger" data-dz-remove>
									<i className="fas fa-trash" />
								</Button>
							</Col>
						</Row>
					</ListGroupItem>
				</ListGroup>
			</div> */}

			<div className=" progress-wrapper">
				{' '}
				<div className=" progress-info">
					{downloadURL && (
						<div className=" progress-label">
							<span>Bild hochgeladen</span>
						</div>
					)}
					{uploading && (
						<div className=" progress-percentage">
							<span>{progress}%</span>
						</div>
					)}
				</div>
				{uploading && <Progress max="100" value={progress} color="success" />}
			</div>
		</div>
	);
}

export default ImageInput;
