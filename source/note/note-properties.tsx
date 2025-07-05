import {Box, Text} from 'ink';
import React from 'react';
import {Property as PropertyType} from '../types.js';
import {Property} from '../properties/property.js';

interface Props {
	properties: PropertyType[];
}

export const NoteProperties = ({properties}: Props) => {
	return (
		<Box flexDirection="column">
			{properties.map(prop => {
				return (
					<Box key={prop.name}>
						<Box margin={1}>
							<Text>{prop.name}:</Text>
						</Box>
						<Property name={prop.name} value={prop.value} />
					</Box>
				);
			})}
		</Box>
	);
};
