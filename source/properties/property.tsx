import {Box} from 'ink';
import React from 'react';
import {
	MultiSelect,
	MultiSelectConfig,
	MultiSelectValue,
} from './multi-select.js';

export type PropertyType = 'select' | 'multi-select' | 'text' | 'bad';

interface Props {
	type: PropertyType;
	value: unknown;
	config: unknown; // TODO: factory
}

// this is a factory for properties based on their types
export const Property = ({type, value, config}: Props) => {
	return (
		<Box>
			{type === 'multi-select' && (
				<MultiSelect
					value={value as MultiSelectValue}
					config={config as MultiSelectConfig}
				/>
			)}
		</Box>
	);
};
