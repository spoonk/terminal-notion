import {Box, Spacer, Text, useFocus, useInput} from 'ink';
import React from 'react';
import {Property} from '../../properties/property.js';
import {useAppState} from '../../stores/app-state.js';
import {ColumnConfiguration, Note} from '../../types.js';
interface Props {
	note: Note;
	colConfig: ColumnConfiguration;
}

export const Row = ({note, colConfig}: Props) => {
	const validProperties = note.properties.filter(({name}) => colConfig[name]);
	const {isFocused} = useFocus();

	const setNote = useAppState(state => state.setCurrentNote);
	useInput((_, key) => {
		if (key.return && isFocused) {
			setNote(note);
		}
	});

	return (
		<Box flexDirection="row">
			<Box padding={1}>
				<Text color={'white'}>{isFocused ? '|  ' : '   '}</Text>
				<Text color={isFocused ? 'white' : 'gray'}>{note.name}</Text>
			</Box>
			<Spacer></Spacer>
			{validProperties.map(({name, value}) => (
				<Property key={name} name={name} value={value}></Property>
			))}
		</Box>
	);
};
