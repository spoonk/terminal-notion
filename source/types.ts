export interface Property {
	name: string;
	value: unknown;
}

export interface Note {
	id: string;
	name: string;
	properties: Property[];
}

export type PropertyType =
	| 'select'
	| 'multi-select'
	| 'text'
	| 'bad'
	| 'status'
	| string;

export interface ColumnConfiguration {
	[key: string]: {type: PropertyType; config: unknown};
}
