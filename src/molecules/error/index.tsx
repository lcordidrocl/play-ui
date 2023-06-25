import { Icon, Text } from 'atoms';

import { Wrapper } from './index.styles';

type Props = {
	value: string;
};

export function Error({ value }: Props) {
	return (
		<Wrapper className="error">
			<Icon as="WarningOutline" size="Small" />
			<Text size="xSmall">{value}</Text>
		</Wrapper>
	);
}

export default Error;
