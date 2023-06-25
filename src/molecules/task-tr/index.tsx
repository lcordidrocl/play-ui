import React from 'react';
import { Checkbox, Icon } from 'atoms';
import { TaskType } from 'types';

import { TR, TD } from './index.styles';

interface Props extends TaskType {
	onSelected: (id: string) => void;
	selectedId?: string;
}

export function TaskTR(props: Props) {
	const { id, title, status, onSelected, selectedId } = props;

	return (
		<TR selected={id === selectedId}>
			<TD>
				<Checkbox isChecked={id === selectedId} onChange={() => onSelected(id)} />
			</TD>
			<TD colSpan={4}>{title}</TD>
		</TR>
	);
}

export default TaskTR;
