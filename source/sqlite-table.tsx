import {Box} from 'ink';
import React, {useEffect} from 'react';
import {useSQLite} from './hooks/use-sqlite.js';

interface Props {
	tableName: string;
}

// TODO: table should just be a renderer component that takes rows as props
// should NOT do any loading
export const SQLiteTable = (props: Props) => {
	const db = useSQLite();
	useEffect(() => {
		// load contents on boot
		const results = db.run('SELECT * FROM ?', props.tableName);
		console.log(results);
	}, []);
	return <Box></Box>;
};
