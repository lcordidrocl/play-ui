import React from 'react';
import classNames from 'classnames';

import { SizeType, VariantType } from 'types';
import Icon from '../icon';
import Text from '../text';
import { InputField, Wrapper } from './index.styles';

type InputType = 'checkbox';

type Props = {
	disabled?: boolean;
	type?: InputType;
	isChecked?: boolean;
	onChange: () => void;
	title?: string;
	variant?: VariantType;
	size?: SizeType;
};

export function Checkbox(props: Props) {
	const {
		disabled,
		type = 'checkbox',
		isChecked = false,
		onChange,
		title,
		variant,
		size,
	} = props;
	const classname = classNames({
		checkbox: true,
		checked: isChecked,
	});
	return (
		<Wrapper className={classname} variant={variant} size={size}>
			<div>
				<Icon as="Tick" size="xSmall" />
			</div>
			<InputField
				type={type}
				disabled={disabled}
				onChange={() => onChange()}
				checked={isChecked}
			/>
			{title && <Text size="Small">{title}</Text>}
		</Wrapper>
	);
}

export default Checkbox;
