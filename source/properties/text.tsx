import {Box, Text} from 'ink';
import React from 'react';

interface Props {
	text: string;
}
export const TextProperty = ({text}: Props) => {
	return (
		<Box padding={1}>
			<Text>{text}</Text>
		</Box>
	);
};
