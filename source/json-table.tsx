import React, {useEffect, useState} from 'react';
import {Table} from './table.js';

import data from './dummy-data.json' with {type: 'json'};

interface dummyDataRow {
	id: number;
	name: string;
	tags: string[];
}

export const JSONTable = () => {
	const [rows, setRows] = useState<dummyDataRow[]>([]);
	useEffect(() => {
		setRows(data.rows);
	}, []);

	return <Table rows={rows} config={data.config}></Table>;
};
