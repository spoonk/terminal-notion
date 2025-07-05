import React from 'react';
import {PageSwitcher} from './page-switcher.js';
import {Box} from 'ink';

export default function App() {
	return (
		<Box width={'100%'} flexGrow={1}>
			<PageSwitcher></PageSwitcher>
		</Box>
	);

	//return;
}
