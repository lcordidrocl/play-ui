import React from 'react';
import { Col, Icon, Text } from 'atoms';
import { IconsType, SizeType } from 'types';

import { Wrapper } from './index.styles';
import classNames from 'classnames';

interface Props {
	title?: string;
	icon: IconsType;
	count?: number;
	onClick: () => void;
	loading?: boolean;
	size?: SizeType;
}

export function DrawerLR({
	title,
	icon,
	count,
	onClick,
	loading,
	size = 'Small',
}: Props) {
	const classname = classNames({ loading });

	return (
		<Wrapper onClick={onClick} className={classname}>
			{!!icon && (
				<Col size={1}>
					<Icon as={icon} size={size} />
				</Col>
			)}
			{!!title && (
				<Col size={6} align="flex-start">
					<Text size="Medium">{title}</Text>
				</Col>
			)}
			{count! >= 0 && (
				<Col size={1} align="flex-end">
					<Text size="Medium">{count}</Text>
				</Col>
			)}
		</Wrapper>
	);
}

export default DrawerLR;
