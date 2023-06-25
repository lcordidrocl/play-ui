import React, { useState } from 'react';

import { OnChangeType, OnChangeEventType } from 'types';

import Text from '../text';
import { InputField, Wrapper } from './index.styles';

type InputType = 'radio';

type Props = {
	disabled?: boolean;
	title: string;
	type?: InputType;
	handleChange: OnChangeType;
};

export function Radio(props: Props) {
	const { disabled, type = 'radio', title } = props;
	const [isChecked, setIsChecked] = useState(false);

	const handleChange = (e: OnChangeEventType) => {
		setIsChecked(e.target.checked);
	};
	return (
		<Wrapper checked={isChecked}>
			<div />
			<InputField
				type={type}
				disabled={disabled}
				onChange={(e: OnChangeEventType) => handleChange(e)}
			/>
			{title && <Text>{title}</Text>}
		</Wrapper>
	);
}

export default Radio;
