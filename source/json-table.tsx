import React, {useEffect, useState} from 'react';
import {Table} from './table.js';
import data from './dummy-data.json' with {type: 'json'};
import _ from 'lodash'
import { PropertyType } from './properties/property.js';

interface dummyDataRow {
	id: number;
	name: string;
	properties: {
		name: string; value: unknown
	}[]
}

interface dummyDataCols {
	columns: {
		[key: string]: {type: PropertyType, config: unknown}
	}
}

export const JSONTable = () => {
	const [rows, setRows] = useState<dummyDataRow[]>([]);
	useEffect(() => {
		setRows(data.rows);
	}, []);

	return <Table rows={rows} config={data.config as dummyDataCols}></Table>;
};
