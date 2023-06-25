import classNames from 'classnames';
import { format } from 'date-fns';

import Icon from 'atoms/icon';
import Button from 'atoms/button';

import {
	DateMonth,
	MonthList,
	Wrapper,
	YearPicker,
	YearPickerHeader,
} from './index.styles';

const months = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
];

type Props = {
	currentDate: Date;
	onMonth: (index: number) => void;
	onPrevYear: () => void;
	onNextYear: () => void;
	onClose: () => void;
	show: boolean;
};

export function MonthsYear({
	currentDate = new Date(),
	onMonth,
	onPrevYear,
	onNextYear,
	onClose,
	show,
}: Props) {
	return (
		<Wrapper
			className={classNames({
				'months-year': true,
				show,
			})}
		>
			<YearPickerHeader>
				<DateMonth>{format(currentDate, 'dd MMM')}</DateMonth>

				<YearPicker>
					<Button variant="round" theme="primary" size="xLarge" onClick={onPrevYear}>
						<Icon as="ArrowLeft" />
					</Button>
					<strong>{format(currentDate, 'yyyy')}</strong>
					<Button onClick={onNextYear} variant="round" theme="primary" size="xLarge">
						<Icon as="ArrowRight" />
					</Button>
				</YearPicker>
				<Button
					variant="round"
					theme="primary"
					onClick={() => onClose()}
					size="Large"
				>
					<Icon as="Cross" />
				</Button>
			</YearPickerHeader>
			<MonthList>
				{months.map((month, index) => {
					const isCurrentMonth = index === currentDate.getMonth();

					return (
						<div
							key={index}
							onClick={() => onMonth(index)}
							className={classNames({ active: isCurrentMonth })}
						>
							{month}
						</div>
					);
				})}
			</MonthList>
		</Wrapper>
	);
}

export default MonthsYear;
