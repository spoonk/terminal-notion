import React, {useState} from 'react';
import {page} from './hooks/use-current-page.js';
import {PageContext} from './context.js';
import {PageSwitcher} from './page-switcher.js';

export default function App() {
	const [currentPage, setCurrentPage] = useState<page>('home');
	const pageContext = {page: currentPage, setPage: setCurrentPage};

	return (
		<PageContext.Provider value={pageContext}>
			<PageSwitcher></PageSwitcher>
		</PageContext.Provider>
	);
}
