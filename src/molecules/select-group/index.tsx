import { ChildrenType, OnSelectChangeEventType } from 'types/index';
import Icon from 'atoms/icon';

import Label from 'atoms/label';
import Select from 'atoms/select';

import { Wrapper } from './index.styles';

type Props = {
	title?: string;
	value: string | number;
	disabled?: boolean;
	placeholder: string;
	onChange: (e: OnSelectChangeEventType) => void;
	name: string;
	required?: boolean;
	children: ChildrenType;
};

export function SelectGroup({
	title,
	value,
	disabled = false,
	placeholder,
	onChange,
	name,
	required = false,
	children,
}: Props) {
	const isValue = !!value;

	return (
		<Label size="Small" type={title || placeholder} isValue={isValue}>
			<Wrapper isValue={isValue}>
				<Select
					disabled={disabled}
					name={name}
					onChange={onChange}
					placeholder={placeholder}
					required={required}
					value={value}
				>
					{children}
				</Select>
				<Icon as="ArrowDown" size="Medium" />
			</Wrapper>
		</Label>
	);
}

export default SelectGroup;
