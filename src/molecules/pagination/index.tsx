import { Text } from 'atoms';

import { Wrapper } from './index.styles';

type Props = {
	qty: number;
};

export function Pagination({ qty }: Props) {
	return (
		<Wrapper className="pagination">
			<Text size="xSmall">
				Total: <strong>{qty || 0}</strong>
			</Text>
		</Wrapper>
	);
}

export default Pagination;
