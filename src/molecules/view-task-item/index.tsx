import classNames from 'classnames';
import { ChildrenType } from 'types';

import { Button, Heading, Row } from 'atoms';
import { Wrapper } from './index.styles';

interface Props {
	children: ChildrenType;
	title: string;
	loading?: boolean;
	onCancel?: () => void;
	onSave?: () => void;
	disable?: boolean;
}

export function ViewTaskItem(props: Props) {
	const { children, title, loading, onCancel, onSave, disable } = props;

	const classname = classNames({
		'view-task-item': true,
		loading,
	});

	const isButtonWrapper = !!onCancel || !!onSave;
	return (
		<Wrapper className={classname}>
			{title && <Heading as="h3">{title}</Heading>}
			{children}
			{isButtonWrapper && (
				<Row justify="space-between">
					{onCancel && (
						<Button
							size="xSmall"
							onClick={() => onCancel()}
							theme="neutral400"
							variant="outline"
						>
							Cancel
						</Button>
					)}
					{onSave && (
						<Button
							size="xSmall"
							onClick={() => onSave()}
							theme="primary"
							disabled={disable}
						>
							Save
						</Button>
					)}
				</Row>
			)}
		</Wrapper>
	);
}

export default ViewTaskItem;
