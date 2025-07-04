import React, {useState} from 'react';
import {PageContext, Page} from './context.js';
import {PageSwitcher} from './page-switcher.js';
//import {JSONTable} from './json-table.js';

export default function App() {
	const [currentPage, setCurrentPage] = useState<Page>('table');
	const pageContext = {page: currentPage, setPage: setCurrentPage};
	const [currentPageContent, setCurrentPageContent] = useState<string | null>(
		null,
	);

	return (
		<PageContext.Provider value={pageContext}>
			<PageSwitcher></PageSwitcher>
		</PageContext.Provider>
	);
	//return <JSONTable></JSONTable>;
}
