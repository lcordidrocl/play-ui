import { OnAllChangeType } from 'types/index';
import { useState } from 'react';
import { SelectWrapper, Wrapper } from './index.styles';
import { convertTime, formatTime } from 'helpers/index';
import Button from 'atoms/button';
import Icon from 'atoms/icon';
import Select from 'atoms/select';

const hours = [
	'00',
	'01',
	'02',
	'03',
	'04',
	'05',
	'06',
	'07',
	'08',
	'09',
	'10',
	'11',
	'12',
];
const minutes = ['00', '05', '10', '15', '30', '45'];

type Props = {
	duration: string;
	onSave: (value: string) => void;
	loading?: boolean;
	onClose: () => void;
};

export function Timer({ duration, onSave, onClose, loading }: Props) {
	const [value, setValue] = useState(formatTime(duration));
	const handleChange = (e: OnAllChangeType) => {
		setValue({ ...value, [e.target.name]: e.target.value });
	};
	const converted = convertTime(value);
	const handleSave = () => {
		onSave(converted);
	};

	const isDisabled = converted === duration || loading;
	return (
		<Wrapper className="timer">
			<div>
				<SelectWrapper selected={value.hours !== '00'}>
					<Select name="hours" value={value.hours} onChange={handleChange}>
						{hours.map((hour, index) => (
							<option key={index} value={hour}>
								{hour}
							</option>
						))}
					</Select>
					<span>
						<b>H</b>
					</span>
				</SelectWrapper>
			</div>
			<div>
				<SelectWrapper selected={value.mins !== '00'}>
					<Select name="mins" value={value.mins} onChange={handleChange}>
						{minutes.map((min, index) => (
							<option key={index} value={min}>
								{min}
							</option>
						))}
					</Select>
					<span>
						<b>Min</b>
					</span>
				</SelectWrapper>
			</div>
			<div>
				<Button
					onClick={() => handleSave()}
					size="Medium"
					variant="round"
					disabled={isDisabled}
				>
					<Icon as="Tick" color="white" />
				</Button>
			</div>
		</Wrapper>
	);
}

export default Timer;
