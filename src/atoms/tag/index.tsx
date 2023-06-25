import { getTagValue } from './helper';
import { Wrapper } from './index.styles';

type Props = {
	selected?: boolean;
	onClick?: () => void;
	value: string;
};

export function Tag({ value, selected, onClick }: Props) {
	const tagValue = getTagValue({ value });
	return (
		<Wrapper
			className="tag"
			selected={selected}
			onClick={() => onClick && onClick()}
		>
			<div>{tagValue}</div>
		</Wrapper>
	);
}

export default Tag;
