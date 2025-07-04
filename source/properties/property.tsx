import {Box} from 'ink';
import React from 'react';
import {
	MultiSelect,
	MultiSelectConfig,
	MultiSelectValue,
} from './multi-select.js';
import {TextProperty} from './text.js';

export type PropertyType =
	| 'select'
	| 'multi-select'
	| 'text'
	| 'bad'
	| 'status';

interface Props {
	type: PropertyType;
	value: unknown;
	config: unknown;
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
			{type === 'text' && <TextProperty text={value as string}></TextProperty>}
		</Box>
	);
};
