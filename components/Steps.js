import React from 'react';
import { Input, Col, Row } from 'reactstrap';
function Steps(props) {
	return (
		<Row>
			{props.steps ? (
				props.steps.map((step) => (
					<Col md="12">
						<label className="form-control-label" htmlFor="exampleFormControlTextarea1">
							Schritt {props.steps.indexOf(step) + 1}
						</label>
						<Input
							id="exampleFormControlTextarea1"
							defaultValue={step}
							onChange={(event) => props.updateSteps(event.target.value, props.steps.indexOf(step))}
							rows="3"
							name="steps"
							type="textarea"
						/>
					</Col>
				))
			) : null}
		</Row>
	);
}

export default Steps;
