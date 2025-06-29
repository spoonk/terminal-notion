//import React, {useState} from 'react';
import React from 'react';
//import {page} from './hooks/use-current-page.js';
//import {PageContext} from './context.js';
//import {PageSwitcher} from './page-switcher.js';
import {JSONTable} from './json-table.js';

export default function App() {
	//const [currentPage, setCurrentPage] = useState<page>('home');
	//const pageContext = {page: currentPage, setPage: setCurrentPage};

	//return (
	//	<PageContext.Provider value={pageContext}>
	//		<PageSwitcher></PageSwitcher>
	//	</PageContext.Provider>
	//);
	return <JSONTable></JSONTable>;
}
