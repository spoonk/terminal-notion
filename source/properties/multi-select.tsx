import {Box, Text} from 'ink';
import React from 'react';
import _ from 'lodash';

interface Props {
	value: MultiSelectValue;
	config: MultiSelectConfig;
}

export interface MultiSelectConfig {
	options: {name: string; color: string}[];
}

export type MultiSelectValue = string[];

export const MultiSelect = ({value, config}: Props) => {
	const valToConfig = _.keyBy(config.options, 'name');
	return (
		<Box>
			{value.map((val, index) => (
				<Box
					borderColor={valToConfig[val]?.color || 'red'}
					borderStyle={'round'}
					key={index}
				>
					<Text>{val}</Text>
				</Box>
			))}
		</Box>
	);
};
