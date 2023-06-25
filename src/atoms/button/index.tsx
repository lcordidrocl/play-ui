import React from 'react';
import classNames from 'classnames';

import { ButtonTypes } from 'types';
import { Wrapper } from './index.styles';

export function Button({
	children,
	disabled = false,
	onClick,
	type = 'button',
	variant,
	name,
	size,
	theme,
	active,
}: ButtonTypes) {
	const classname = classNames({ button: true, active: active });
	return (
		<Wrapper
			className={classname}
			type={type}
			disabled={disabled}
			onClick={onClick}
			variant={variant}
			name={name}
			size={size}
			themeType={theme}
		>
			{children}
		</Wrapper>
	);
}

export default Button;
