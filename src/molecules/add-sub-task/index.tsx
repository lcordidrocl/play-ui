import { Col, Icon, Input } from 'atoms';
import { useState } from 'react';
import { SubmitEventType } from 'types';
import { Clear, Wrapper } from './index.styles';

type Props = {
	placeholder: string;
	onSubmit: (value: string) => void;
	loading?: boolean;
};

export function AddSubTask({ loading, onSubmit, placeholder }: Props) {
	const [value, setValue] = useState('');

	const handleChange = () => {
		if (value?.trim()) {
			onSubmit(value);
		}
		setValue('');
	};

	const handleSubmit = (e: SubmitEventType) => {
		e.preventDefault();
		handleChange();
	};

	return (
		<Wrapper
			className="view-add-sub-task"
			onSubmit={(e) => handleSubmit(e)}
			loading={loading ? 'true' : 'false'}
		>
			<Col>
				<Icon as="LShaped" size="Small" />
			</Col>
			<Col size={2}>
				<Input
					name="title"
					placeholder={placeholder}
					value={value}
					onChange={(e) => setValue(e.target.value)}
					onBlur={() => handleChange()}
				/>
			</Col>
			{!!value && (
				<Col>
					<Clear onClick={() => setValue('')}>
						<Icon as="Cross" size="xSmall" color="border" />
					</Clear>
				</Col>
			)}
		</Wrapper>
	);
}

export default AddSubTask;
