import {Box, Spacer, Text} from 'ink';
import React from 'react';
import _ from 'lodash';

interface Props {
	rows: {id: number; tags: string[]}[];
	config: {
		columns: {
			[key: string]: {type: string; options: {name: string; color: string}[]};
		};
	};
}

export const Table = (props: Props) => {
	const optionNameToColor = _.keyBy(
		props.config.columns['tags']?.options,
		'name',
	);

	return (
		<Box flexDirection="column">
			<Text>I am table</Text>
			{props.rows.map(row => (
				<Box key={row.id} flexDirection="row">
					<Box padding={1}>
						<Text color={'gray'} bold>
							{row.id}
						</Text>
					</Box>
					<Spacer></Spacer>
					<Box>
						{row.tags.map(tag => (
							<Box
								key={tag}
								borderColor={optionNameToColor[tag]?.color || 'red'}
								borderStyle={'round'}
							>
								<Text>{tag}</Text>
							</Box>
						))}
					</Box>
				</Box>
			))}
		</Box>
	);
};
