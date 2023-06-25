import { format } from 'date-fns';

import Input from 'atoms/input';
import { Wrapper } from './index.styles';

type Props = {
	date: Date;
	onChange: (time: string) => void;
};

export function TimePicker({ date, onChange }: Props) {
	return (
		<Wrapper className="time-picker">
			<Input
				name="timer"
				type="time"
				value={format(date, 'HH:mm')}
				onChange={(e) => onChange(e.target.value)}
				autoComplete="off"
			/>
		</Wrapper>
	);
}

export default TimePicker;
