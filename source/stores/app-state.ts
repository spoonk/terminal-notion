import {create} from 'zustand';

interface AppState {
	currentDB: string | undefined;
	setCurrentDB: (newDB: string) => void;
	clearCurrentDB: () => void;
	currentNote: string | undefined;
	clearCurrentNote: () => void;
}

export const useAppState = create<AppState>(set => ({
	currentDB: undefined,
	setCurrentDB: newDB => set(() => ({currentDB: newDB})),
	clearCurrentDB: () => set(() => ({currentDB: undefined})),
	currentNote: undefined,
	clearCurrentNote: () => set(() => ({currentNote: undefined})),
}));
