import { ColorType, SizeType } from 'types';
import Text from '../text';
import { Wrapper } from './index.styles';

type Props = {
	name: string;
	theme?: ColorType;
	size?: SizeType;
};

export function Logo({ name, theme, size = 'Medium' }: Props) {
	return (
		<Wrapper className="logo" themeType={theme}>
			<Text size={size}>
				<strong>{name}</strong>
			</Text>
		</Wrapper>
	);
}

export default Logo;
