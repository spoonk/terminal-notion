import {Box} from 'ink';
import React from 'react';
import _ from 'lodash';
import {Row} from './row.js';
import {ColumnConfiguration, Note} from '../../types.js';

interface Props {
	rows: Note[];
	config: {
		columns: ColumnConfiguration;
	};
}

export const Table = (props: Props) => {
	//useInput((input, key) => {
	//	if (input === '\t') {
	//		console.log('tab');
	//	} else {
	//		console.log(input, key);
	//	}
	//});

	return (
		<Box flexDirection="column" width={'80%'}>
			{props.rows.map(row => (
				<Row key={row.id} note={row} colConfig={props.config.columns}></Row>
			))}
		</Box>
	);
};
