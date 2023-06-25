import { StatusType, SubmitEventType } from 'types';
import { Checkbox, Col, Icon, Input, Row } from 'atoms';
import { useState } from 'react';

import { Delete, Wrapper } from './index.styles';

type Props = {
	title: string;
	status: StatusType;
	onComplete: (status: StatusType) => void;
	onDelete: () => void;
	onTitle: (value: string) => void;
	loading?: boolean;
};

export function ViewSubTask({
	title,
	status,
	onComplete,
	onDelete,
	onTitle,
	loading,
}: Props) {
	const [value, setValue] = useState(title);
	const handleTitle = () => {
		if (title.toLowerCase() !== value.toLowerCase()) {
			onTitle(value);
		}
	};
	const handleSubmit = (e: SubmitEventType) => {
		e.preventDefault();
		handleTitle();
	};
	return (
		<Wrapper
			className="sub-task"
			onSubmit={handleSubmit}
			isChecked={status === 'Completed'}
			loading={loading ? 'true' : 'false'}
		>
			<Row justify="space-between" align="center">
				<Checkbox
					isChecked={status === 'Completed'}
					onChange={() =>
						onComplete(status === 'Incomplete' ? 'Completed' : 'Incomplete')
					}
					variant="round"
					size="Small"
				/>
				<Col size={2} align="left">
					<Input
						value={value}
						name="sub-task"
						onChange={(e) => setValue(e.target.value)}
						onBlur={handleTitle}
					/>
				</Col>
				<Delete onClick={() => onDelete()}>
					<Icon as="Bin" size="xSmall" />
				</Delete>
			</Row>
		</Wrapper>
	);
}

export default ViewSubTask;
