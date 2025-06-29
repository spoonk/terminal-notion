import {Box} from 'ink';
import React from 'react';
import _ from 'lodash';
import {Row} from './row.js';
import {PropertyType} from './properties/property.js';

interface Props {
	rows: {
		id: number;
		name: string;
		properties: {name: string; value: unknown}[];
	}[];
	config: {
		columns: {
			[key: string]: {type: PropertyType; config: unknown};
		};
	};
}

export const Table = (props: Props) => {
	return (
		<Box flexDirection="column">
			{props.rows.map(row => (
				<Row
					key={row.id}
					rowId={row.id}
					name={row.name}
					colConfig={props.config.columns}
					rowProperties={row.properties}
				></Row>
			))}
		</Box>
	);
};
