import { Wrapper } from './index.styles';
import { Loader } from 'atoms';

export const Loading = () => {
	return (
		<Wrapper className="loading">
			<Loader />
		</Wrapper>
	);
};

export default Loading;
