import {Box, Spacer, Text} from 'ink';
import React from 'react';
import {Property, PropertyType} from './properties/property.js';
interface Props {
	rowId: number;
	name: string;
	rowProperties: {name: string; value: unknown}[];
	colConfig: {[key: string]: {type: PropertyType; config: unknown}};
}

export const Row = ({name, rowProperties, colConfig}: Props) => {
	const validProperties = rowProperties.filter(({name}) => colConfig[name]);

	return (
		<Box flexDirection="row">
			<Box padding={1}>
				<Text color={'gray'}>{name}</Text>
			</Box>
			<Spacer></Spacer>
			{validProperties.map(({name, value}) => (
				<Property
					key={name}
					type={colConfig[name]?.type || 'bad'}
					value={value}
					config={colConfig[name]?.config || {}}
				></Property>
			))}
		</Box>
	);
};
