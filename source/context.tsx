import {createContext} from 'react';
//import {Page} from './hooks/use-current-page.js';

export type Page = 'table' | 'home' | 'note';
export const PageContext = createContext<{page: Page; setPage: any}>({
	page: 'home',
	setPage: () => {},
});

export const CurrentNoteContext = createContext<{
	content: string | null;
	setContent: any;
}>({
	content: null,
	setContent: () => {},
});
