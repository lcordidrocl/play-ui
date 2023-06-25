import { useEffect, useState } from 'react';
import { OnAllChangeType, StatusType, SubmitEventType } from 'types';
import { Checkbox, Col, Container, Important, Input, Row } from 'atoms';

import { Wrapper } from './index.styles';
import classNames from 'classnames';

type Props = {
	title: string;
	status: StatusType;
	important: boolean;
	onImportant: () => void;
	onCompleted: () => void;
	onTitle: (value: string) => void;
	loading?: boolean;
};

export function ModalHeading({
	title,
	status,
	important,
	onImportant,
	onCompleted,
	onTitle,
	loading,
}: Props) {
	const isCompleted = status === 'Completed';

	const [value, setValue] = useState(title);

	const handleChange = (e: OnAllChangeType) => {
		setValue(e.target.value);
	};
	const handleTitle = () => {
		if (title.toLowerCase() !== value.toLowerCase()) {
			onTitle(value);
		}
	};

	const handleSubmit = (e: SubmitEventType) => {
		e.preventDefault();
		handleTitle();
	};

	useEffect(() => {
		setValue(title);
	}, [title]);

	const classname = classNames({
		'modal-heading': true,
		loading,
		completed: isCompleted,
	});
	return (
		<Wrapper className={classname} onSubmit={handleSubmit}>
			<Container>
				<Row justify="space-between" align="center">
					<Checkbox isChecked={isCompleted} onChange={onCompleted} variant="round" />
					<Col size={2} align="left">
						<Input
							name="title"
							value={value}
							placeholder="Enter title"
							onChange={handleChange}
							onBlur={handleTitle}
						/>
					</Col>
					<Important important={important} onClick={onImportant} />
				</Row>
			</Container>
		</Wrapper>
	);
}

export default ModalHeading;
