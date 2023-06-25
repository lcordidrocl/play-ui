import { InputType, OnAllChangeType } from 'types';
import { InputField } from './index.styles';

export function Textarea(props: InputType) {
	const {
		disabled,
		placeholder,
		onChange,
		onKeyDown,
		value,
		name,
		required,
		minLength,
		maxLength,
		autoComplete = 'off',
		onBlur,
	} = props;
	return (
		<InputField
			placeholder={placeholder}
			disabled={disabled}
			value={value}
			name={name}
			onKeyDown={onKeyDown}
			onChange={(e: OnAllChangeType) => onChange && onChange(e)}
			onBlur={onBlur}
			required={required}
			minLength={minLength}
			maxLength={maxLength}
			autoComplete={autoComplete}
			rows={2}
		/>
	);
}

export default Textarea;
