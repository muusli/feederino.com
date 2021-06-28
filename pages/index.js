import React, { Component } from 'react';
import Router from 'next/router';

export default function Landing() {
	React.useEffect(() => {
		Router.push('/recipes');
	});
	return <div />;
}
