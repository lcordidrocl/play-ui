import { ChildrenType, OnSelectChangeEventType } from 'types/index';

import { SelectElement } from './index.styles';

type Props = {
	children: ChildrenType;
	disabled?: boolean;
	name: string;
	onChange: (e: OnSelectChangeEventType) => void;
	placeholder?: string;
	required?: boolean;
	value: string | number;
};

export function Select({
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
		<SelectElement
			selected={isValue}
			onChange={(e: OnSelectChangeEventType) => onChange(e)}
			value={value}
			disabled={disabled}
			name={name}
			required={required}
		>
			{placeholder && <option value="">{placeholder}</option>}
			{children}
		</SelectElement>
	);
}

export default Select;
