import React from 'react';// Import the storybook libraries
import { storiesOf } from '@storybook/react';
import Map from './Map';

storiesOf('Map', module)
	.add('basic map', () => (
		<Map/>
	));
