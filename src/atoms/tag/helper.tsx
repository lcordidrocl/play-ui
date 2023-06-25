import React from 'react';

import { getSplitMoveType } from 'helpers';
import Text from '../text';
import Icon from '../icon';

type Props = {
	value: string;
};

export function getTagValue({ value }: Props) {
	const splitMoveType = getSplitMoveType(value);

	const isMoveType = Array.isArray(splitMoveType);
	const isExport = value?.toLowerCase() === 'export';
	switch (true) {
		case isMoveType:
			return (
				<>
					<Text size="xSmall">{splitMoveType[0]}</Text>
					<Icon as="ArrowRight" size="Small" />
					<Text size="xSmall">{splitMoveType[1]}</Text>
				</>
			);
		case isExport:
			return (
				<>
					<Icon as="ArrowLeft" size="xSmall" />
					<Text size="xSmall">{value}</Text>
				</>
			);
		default:
			return <Text size="xSmall">{splitMoveType}</Text>;
	}
}
