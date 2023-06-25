import { useState } from 'react';

import { Input, Label } from 'atoms';
import { Error } from 'molecules';

import { InputType } from 'types';

import { getIcon } from './helper';
import { Wrapper } from './index.styles';

export function InputGroup(props: InputType) {
	const { type, title, placeholder, value, className, error } = props;
	const isValue = !!value;
	const [show, setShow] = useState(false);

	return (
		<Label
			size="Medium"
			type={title || placeholder}
			isValue={isValue}
			className={`${type} ${className}`}
		>
			<Wrapper isValue={isValue} isError={!!error}>
				{show ? <Input {...props} type="text" /> : <Input {...props} />}
				{type && getIcon({ type, onShow: () => setShow(!show), show })}
			</Wrapper>
			{error && <Error value={error} />}
		</Label>
	);
}

export default InputGroup;
