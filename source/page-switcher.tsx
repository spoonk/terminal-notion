import React from 'react';
import {Box} from 'ink';
import {JSONTable} from './json-table.js';
import {useAppState} from './stores/app-state.js';
import {NoteModal} from './note/note-modal.js';

export const PageSwitcher = () => {
	const currentDB = useAppState(state => state.currentDB);
	const currentNote = useAppState(state => state.currentNote);

	return (
		<Box flexGrow={1} justifyContent="center" alignSelf="center">
			{currentDB && !currentNote && <JSONTable />}
			{currentNote && <NoteModal note={currentNote} />}
		</Box>
	);
};
