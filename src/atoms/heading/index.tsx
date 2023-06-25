import classnames from 'classnames';
import { ChildrenType, HeadingType } from 'types';
import { H1, H2, H3, H4, H5, H6 } from './index.styles';

type Props = {
	as?: HeadingType;
	children: ChildrenType;
	className?: string;
};

export function Heading({ as = 'h1', children, className }: Props) {
	const classNames = classnames({
		heading: true,
		[as]: as,
		[`${className}`]: className,
	});
	switch (as) {
		case 'h2':
			return <H2 className={classNames}>{children}</H2>;
		case 'h3':
			return <H3 className={classNames}>{children}</H3>;
		case 'h4':
			return <H4 className={classNames}>{children}</H4>;
		case 'h5':
			return <H5 className={classNames}>{children}</H5>;
		case 'h6':
			return <H6 className={classNames}>{children}</H6>;
		case 'h1':
		default:
			return <H1 className={classNames}>{children}</H1>;
	}
}

export default Heading;
