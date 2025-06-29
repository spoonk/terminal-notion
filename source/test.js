import sqlite3 from 'sqlite3';

const db = new sqlite3.Database(
	'./db/terminal-notion',
	sqlite3.OPEN_CREATE | sqlite3.OPEN_READWRITE,
	err => console.log(err),
);

db.serialize(function () {
	return db.all(
		"select name from sqlite_master where type='table'",
		function (err, tables) {
			if (err) {
				console.log(err);
			} else {
				console.log(tables);
			}
		},
	);
});
