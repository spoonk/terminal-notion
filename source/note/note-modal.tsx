import {Box, useInput} from 'ink';
import React from 'react';
import {Note} from '../types.js';
import {NoteProperties} from './note-properties.js';
import BigText from 'ink-big-text';
import {useAppState} from '../stores/app-state.js';

interface Props {
	note: Note;
}

export const NoteModal = ({note}: Props) => {
	const clearNote = useAppState(state => state.clearCurrentNote);
	useInput((_, key) => {
		if (key.escape) {
			clearNote();
		}
	});

	return (
		<Box
			position="absolute"
			justifyContent="center"
			borderStyle={'round'}
			borderColor={'black'}
			alignSelf="center"
			flexDirection="column"
			width={'60%'}
			overflowX="hidden"
		>
			<BigText font="tiny" text={note.name} />
			<NoteProperties properties={note.properties} />
		</Box>
	);
};
