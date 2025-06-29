import {createContext} from 'react';
import {page} from './hooks/use-current-page.js';

export const PageContext = createContext<{page: page; setPage: any}>({
	page: 'home',
	setPage: () => {},
});
