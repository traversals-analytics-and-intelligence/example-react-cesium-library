import React from 'react';
import { storiesOf } from '@storybook/react';
import Map from './Map';

storiesOf('Map', module)
	.add('basic map', () => (
		<Map/>
	));
