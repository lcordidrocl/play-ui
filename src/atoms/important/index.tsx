import classNames from 'classnames';
import Icon from '../icon';

import { Wrapper } from './index.styles';

type Props = {
	important: boolean;
	onClick: () => void;
};

export function Important({ important, onClick }: Props) {
	const importantIcon = important ? 'Star' : 'StarOutline';
	const classname = classNames({
		important: true,
		active: important,
	});
	return (
		<Wrapper className={classname} onClick={() => onClick()}>
			<Icon as={importantIcon} />
		</Wrapper>
	);
}

export default Important;
