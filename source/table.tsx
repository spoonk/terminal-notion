import {Box} from 'ink';
import React, {useEffect} from 'react';
import {useSQLite} from './hooks/use-sqlite.js';

interface Props {
	tableName: string;
}

export const Table = (props: Props) => {
	const db = useSQLite();
	useEffect(() => {
		// load contents on boot
		const results = db.run('SELECT * FROM ?', props.tableName);
		console.log(results);
	}, []);
	return <Box></Box>;
};
