import { Text } from 'atoms';

import { Wrapper } from './index.styles';

type Props = {
	title: string;
};

export function EmptyLR(props: Props) {
	const { title } = props;

	return (
		<Wrapper className="empty-lr">
			<Text size="Medium">{title}</Text>
		</Wrapper>
	);
}

export default EmptyLR;
