import React from 'react';

import { InputType, OnAllChangeType } from 'types';

import Icon from '../icon';
import Input from '../input';
import { Clear, Wrapper } from './index.styles';

interface Props extends InputType {
	onClear: () => void;
}
export function SearchInput(props: Props) {
	const { onChange, value, onClear } = props;
	return (
		<Wrapper className="search-input">
			<Icon as="Search" size="Small" color="neutral300" />
			<Input
				{...props}
				name="search-input"
				onChange={(e: OnAllChangeType) => onChange && onChange(e)}
				value={value}
			/>
			{!!value && (
				<Clear onClick={() => onClear()}>
					<Icon as="Cross" size="xSmall" color="neutral300" />
				</Clear>
			)}
		</Wrapper>
	);
}

export default SearchInput;
