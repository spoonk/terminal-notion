import {useState, useEffect} from 'react';
//import * as path from 'path';

import sqlite3 from 'sqlite3';
import {listTablesOutput} from '../query-types.js';
//const sqlite = sqlitebase.verbose();

export const useDBList = (): listTablesOutput => {
	const [tables, setTables] = useState<listTablesOutput>([]);
	useEffect(() => {
		const db = new sqlite3.Database(
			'./db/terminal-notion',
			sqlite3.OPEN_CREATE | sqlite3.OPEN_READWRITE,
			err => err && console.log(err),
		);

		db.serialize(function () {
			return db.all(
				"select name from sqlite_master where type='table'",
				function (err, tables: {name: string}[]) {
					if (err) {
						console.log(err);
					} else {
						setTables(tables);
					}
				},
			);
		});
	}, []);
	return tables;
};
