import { Col, Icon, Row, Text } from 'atoms';
import classNames from 'classnames';
import { ChildrenType, IconsType } from 'types';
import { Clear, Wrapper } from './index.styles';

type Props = {
	title?: string;
	caption?: string;
	onClear: () => void;
	onChoose: () => void;
	icon: IconsType;
	placeholder?: string;
	children?: ChildrenType;
	loading?: boolean;
	choose?: boolean;
};

export function ViewField({
	title,
	caption,
	onClear,
	onChoose,
	icon,
	placeholder,
	children,
	loading,
	choose,
}: Props) {
	const isSelected = (!!title && title !== '00:00') || choose;

	const Component = (
		<>
			<Text size="Medium">{title || placeholder}</Text>
			{caption && (
				<Text size="xSmall" className="caption">
					{caption}
				</Text>
			)}
		</>
	);
	const classname = classNames({
		'view-field': true,
		loading,
	});
	return (
		<Wrapper selected={isSelected} className={classname}>
			<Col size={2} onClick={() => onChoose()}>
				<Row align="center">
					<Icon as={icon} size="Small" />
					{children || Component}
				</Row>
			</Col>
			{isSelected && (
				<Col>
					<Clear onClick={() => onClear()}>
						<Icon as="Cross" size="xSmall" color="border" />
					</Clear>
				</Col>
			)}
		</Wrapper>
	);
}

export default ViewField;
