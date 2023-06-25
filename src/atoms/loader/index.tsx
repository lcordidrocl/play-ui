import Logo from '../logo';
import Text from '../text';
import { Wrapper } from './index.styles';

export function Loader() {
	return (
		<Wrapper className="loader">
			<Logo name="SortMe" size="xLarge" />
		</Wrapper>
	);
}

export default Loader;
