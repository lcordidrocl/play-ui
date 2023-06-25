import { InputType } from 'types';
import { InputField } from './index.styles';

export function Input(props: InputType) {
	const {
		disabled,
		type = 'text',
		placeholder,
		onChange,
		onKeyDown,
		onBlur,
		value,
		name,
		required,
		minLength,
		maxLength,
		autoComplete = 'off',
	} = props;
	return (
		<InputField
			placeholder={placeholder}
			type={type}
			disabled={disabled}
			value={value}
			name={name}
			onKeyDown={onKeyDown}
			onChange={onChange}
			required={required}
			minLength={minLength}
			maxLength={maxLength}
			autoComplete={autoComplete}
			onBlur={onBlur}
		/>
	);
}

export default Input;
