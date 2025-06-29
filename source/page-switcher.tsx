import React, {useContext} from 'react';
import {useDBList} from './hooks/use-db-list.js';
import {Box, Text} from 'ink';
import {PageContext} from './context.js';
import {Demo} from './select-table.js';

export const PageSwitcher = () => {
	const tables = useDBList();
	const {page} = useContext(PageContext);

	return (
		<Box>
			{page === 'home' && <Text>You are home</Text>}
			{page === 'table' && <Demo tables={tables}></Demo>}
		</Box>
	);
};
