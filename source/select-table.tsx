import React from 'react';
import SelectInput from 'ink-select-input';
import {listTablesOutput} from './query-types.js';

interface props {
	tables: listTablesOutput;
}

export const Demo = ({tables}: props) => {
	const handleSelect = (item: any) => {
		console.log(item.value);
	};

	const items = tables.map(({name}) => ({label: name, value: name}));
	return <SelectInput items={items} onSelect={handleSelect} />;
};
