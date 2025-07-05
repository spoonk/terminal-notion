import {Box} from 'ink';
import React from 'react';
import {
	MultiSelect,
	MultiSelectConfig,
	MultiSelectValue,
} from './multi-select.js';
import {TextProperty} from './text.js';
import {useAppState} from '../stores/app-state.js';

interface Props {
	name: string;
	value: unknown;
}

// this is a factory for properties based on their types
export const Property = ({name, value}: Props) => {
	const allConfig = useAppState(state => state.currentDataColConfig);
	const colConfig = allConfig?.[name];

	const type = colConfig?.type;
	const propertyConfig = colConfig?.config;

	return (
		<Box>
			{type === 'multi-select' && (
				<MultiSelect
					value={value as MultiSelectValue}
					config={propertyConfig as MultiSelectConfig}
				/>
			)}
			{type === 'text' && <TextProperty text={value as string}></TextProperty>}
		</Box>
	);
};
