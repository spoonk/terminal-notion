import React  from 'react';
import {Table} from './views/table-view/table-view.js';
import data from './dummy-data.json' with {type: 'json'};
import _ from 'lodash'
import { ColumnConfiguration } from './types.js';

//interface dummyDataRow {
//	id: number;
//	name: string;
//	properties: {
//		name: string; value: unknown
//	}[]
//}

interface dummyDataCols {
	columns: ColumnConfiguration
}

export const JSONTable = () => {
	//const setConfig = useAppState(state => state.setCurrentColConfig)
	//	setConfig(data.config.columns)

	return <Table rows={data.rows} config={data.config as dummyDataCols}></Table>;
};
