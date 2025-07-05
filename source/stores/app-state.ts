import {create} from 'zustand';
import {ColumnConfiguration, Note} from '../types.js';
import data from '../dummy-data.json' with {type: 'json'};

interface AppState {
	currentDB: string | undefined;
	setCurrentDB: (newDB: string) => void;
	clearCurrentDB: () => void;
	setCurrentNote: (newNote: Note) => void;
	currentNote: Note | undefined;
	clearCurrentNote: () => void;
	currentDataColConfig: ColumnConfiguration | undefined;
	setCurrentColConfig: (newConfig: ColumnConfiguration | undefined) => void;
}

export const useAppState = create<AppState>(set => ({
	currentDB: 'json',
	setCurrentDB: newDB => set(() => ({currentDB: newDB})),
	clearCurrentDB: () => set(() => ({currentDB: undefined})),
	currentNote: undefined,
	setCurrentNote: newNote => set(() => ({currentNote: newNote})),
	clearCurrentNote: () => set(() => ({currentNote: undefined})),
	currentDataColConfig: data.config.columns,
	setCurrentColConfig: newConfig =>
		set(() => ({currentDataColConfig: newConfig})),
}));
