import {useState} from 'react';

export type page = 'home' | 'table';

export const useCurrentPage = () => {
	const [page, setPage] = useState<page>('home');

	const changePage = (page: page) => {
		console.log(page);
		setPage(page);
	};

	return {
		page,
		changePage,
	};
};
