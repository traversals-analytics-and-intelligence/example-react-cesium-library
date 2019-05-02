import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Map } from 'cesium-react-library';

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Map />
			</div>
		);
	}
}

export default hot(module)(App);
