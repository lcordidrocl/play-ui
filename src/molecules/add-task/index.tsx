import { SubmitEventType } from 'types';
import { Col, Icon, Input } from 'atoms';
import { useState } from 'react';

import { Clear, Wrapper } from './index.styles';

type Props = {
	onSubmit: (formData: { title: string }) => void;
};

const initialState = {
	add_task: '',
};

export function AddTask({ onSubmit }: Props) {
	const [formData, setFormData] = useState(initialState);
	const handleSubmit = (e: SubmitEventType) => {
		e.preventDefault();
		if (formData.add_task) {
			onSubmit({ title: formData.add_task });
			setFormData(initialState);
		}
	};
	return (
		<Wrapper className="add-task" onSubmit={(e) => handleSubmit(e)}>
			<div>
				<Col>
					<Icon as="Add" size="Small" />
				</Col>
				<Col size={1}>
					<Input
						name="add_task"
						placeholder="Add a Task"
						onChange={(e) => setFormData({ add_task: e.target.value })}
						value={formData.add_task}
					/>
				</Col>
				{formData.add_task && (
					<Col>
						<Clear onClick={() => setFormData(initialState)}>
							<Icon as="Cross" size="xSmall" color="border" />
						</Clear>
					</Col>
				)}
			</div>
		</Wrapper>
	);
}

export default AddTask;
