import React from 'react';
import { Checkbox, Text } from 'atoms';
import { StatusType, TaskType } from 'types';

import { Wrapper } from './index.styles';
import Important from 'atoms/important';
import classNames from 'classnames';

interface Props extends TaskType {
	onSelected: (id: string) => void;
	selectedId?: string;
	onImportant: ({ id, important }: { id: string; important: boolean }) => void;
	onCompleted: ({ id, status }: { id: string; status: StatusType }) => void;
	loading?: boolean;
}

export function TaskLR(props: Props) {
	const {
		id,
		title,
		status,
		onSelected,
		selectedId,
		important,
		onImportant,
		onCompleted,
		loading,
	} = props;

	const isCompleted = status === 'Completed';
	const classname = classNames({
		'task-lr': true,
		selected: id === selectedId,
		loading,
		completed: isCompleted,
	});
	return (
		<Wrapper className={classname}>
			<div>
				<Checkbox
					isChecked={isCompleted}
					onChange={() =>
						onCompleted({ id, status: isCompleted ? 'Incomplete' : 'Completed' })
					}
					variant="round"
				/>
				<Text size="Medium" onClick={() => onSelected(id)}>
					{title}
				</Text>
				<Important
					important={important}
					onClick={() => onImportant({ id, important: important ? false : true })}
				/>
			</div>
		</Wrapper>
	);
}

export default TaskLR;
