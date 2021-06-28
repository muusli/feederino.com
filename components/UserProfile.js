import { Card, CardImg, Row, Col, CardHeader, CardBody, Button } from 'reactstrap';
export default function UserProfile({ user }) {
	return (
		<div className="box-center">
			<Card className="card-profile">
				{/* <CardImg alt="..." src={require('assets/img/theme/img-1-1000x600.jpg')} top /> */}
				<Row className="justify-content-center">
					<Col className="order-lg-2" lg="3">
						<div className="card-profile-image">
							<a href="#pablo" onClick={(e) => e.preventDefault()}>
								<img alt="..." className="rounded-circle" src={user.photoURL || '/hacker.png'} />
							</a>
						</div>
					</Col>
				</Row>
				<CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
					{/* <div className="d-flex justify-content-between">
						<Button
							className="mr-4"
							color="info"
							href="#pablo"
							onClick={(e) => e.preventDefault()}
							size="sm"
						>
							Connect
						</Button>
						<Button
							className="float-right"
							color="default"
							href="#pablo"
							onClick={(e) => e.preventDefault()}
							size="sm"
						>
							Message
						</Button>
					</div> */}
				</CardHeader>
				<CardBody className="pt-0">
					<Row>
						<div className="col">
							<div className="card-profile-stats d-flex justify-content-center">
								{/* <div>
									<span className="heading">22</span>
									<span className="description">Friends</span>
								</div> */}
								<div>
									<span className="heading">10</span>
									<span className="description">Rezepte</span>
								</div>
								{/* <div>
									<span className="heading">89</span>
									<span className="description">Comments</span>
								</div> */}
							</div>
						</div>
					</Row>
					<div className="text-center">
						<h5 className="h3">
							<i>@{user.username}</i>
						</h5>

						<h1 className="font-weight-light">{user.displayName || 'Anonymous User'}</h1>
					</div>
				</CardBody>
			</Card>
		</div>
	);
}
