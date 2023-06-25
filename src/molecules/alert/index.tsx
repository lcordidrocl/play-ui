import React from 'react';
import { ChildrenType, IconsType, ThemeType } from 'types';

import { Wrapper } from './index.styles';
import { Text, Heading, Icon, Col, Button, Row } from 'atoms';

import { Capitalize } from 'helpers';

type Props = {
	message?: string;
	title: string;
	type?: ThemeType;
	onClick?: () => void;
	children?: ChildrenType;
};

export const Alert = ({
	message,
	type = 'warning',
	title,
	onClick,
	children,
}: Props) => {
	const icon = Capitalize(type) as IconsType;

	return (
		<Wrapper className="alert" themeType={type}>
			<Icon as={icon} size="Medium" />
			<Heading as="h3">{title}</Heading>
			{message && <Text size="xSmall">{message}</Text>}
			{children && <Text size="xSmall">{children}</Text>}

			{onClick && (
				<Row justify="center">
					<Button onClick={onClick} size="Small" theme="error">
						Refresh
					</Button>
				</Row>
			)}
		</Wrapper>
	);
};

export default Alert;
