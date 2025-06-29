import sqlite3 from 'sqlite3';
//import React from 'react';

export const useSQLite = () => {
	const db = new sqlite3.Database(
		'./db/terminal-notion',
		sqlite3.OPEN_CREATE | sqlite3.OPEN_READWRITE,
		err => err && console.log(err),
	);
	return db;
};
