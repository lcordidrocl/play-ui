import { useEffect, useRef, useState } from 'react';
import { Editor } from 'draft-js';

import {
	EditorState,
	RichUtils,
	convertFromRaw,
	convertToRaw,
	ContentState,
} from 'draft-js';

import { Parse, Stringify } from 'helpers/index';
import { EditorContent } from './index.styles';
import Button from '../button';
import Row from '../row';

type Props = {
	value: string;
	onSave?: (param: string) => void;
	onCancel?: () => void;
	loading?: boolean;
	readOnly?: boolean;
	ref?: any;
};

const TextEditor = ({
	value,
	onSave,
	onCancel,
	loading,
	readOnly = false,
}: Props) => {
	const ref = useRef<Editor>(null);
	const [editorState, setEditorState] = useState(() => {
		if (value) {
			const parsed = Parse(value);
			const converted = convertFromRaw(parsed);
			return EditorState.createWithContent(converted);
		} else {
			return EditorState.createEmpty();
		}
	});

	useEffect(() => {
		if (value) {
			const parsed = Parse(value);
			const converted = convertFromRaw(parsed);
			const result = EditorState.createWithContent(converted);
			setEditorState(result);
		} else {
			const emptyContentState = ContentState.createFromText('');

			const clearedEditorState = EditorState.push(
				editorState,
				emptyContentState,
				'remove-range'
			);
			setEditorState(clearedEditorState);
		}
	}, [value]);

	const handleKeyCommand = (command: string, newState: EditorState) => {
		const newEditorState = RichUtils.handleKeyCommand(newState, command);

		if (newEditorState) {
			setEditorState(newEditorState);
			return 'handled';
		}
		return 'not-handled';
	};

	const handleSave = () => {
		const getContent = editorState.getCurrentContent();
		const rawContent = convertToRaw(getContent);

		const result = Stringify(rawContent);

		onSave && onSave(result);
	};

	const disabled = !editorState.getCurrentContent().hasText();

	const setFocus = () => {
		ref?.current?.focus();
	};

	return (
		<>
			<div onClick={() => setFocus()}>
				<EditorContent
					editorState={editorState}
					onChange={setEditorState}
					handleKeyCommand={handleKeyCommand}
					readOnly={readOnly}
					ref={ref}
				/>
			</div>
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
						onClick={handleSave}
						theme="primary"
						disabled={loading || disabled}
					>
						Save
					</Button>
				)}
			</Row>
		</>
	);
};

export default TextEditor;
