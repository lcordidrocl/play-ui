import { useState } from 'react';
import classNames from 'classnames';
import {
	add,
	differenceInDays,
	endOfMonth,
	format,
	setDate,
	startOfMonth,
	sub,
	setMonth,
	isToday,
	isEqual,
} from 'date-fns';

import { Button, Row } from 'atoms';

import {
	CalendarBody,
	CalendarDays,
	CalendarHeader,
	CalendarWeekDay,
	ChooseTime,
	Time,
	MonthYearPicker,
} from './index.styles';
import MonthsYear from 'molecules/months-year';
import TimePicker from 'molecules/time-picker';
import ViewTaskItem from 'molecules/view-task-item';

const weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

type Props = {
	value: Date;
	onCancel: () => void;
	onSave: (date: Date) => void;
	loading?: boolean;
};

export function DatePicker({ value, onCancel, onSave, loading }: Props) {
	const defaultDate = value ? new Date(value) : new Date();

	const [currentDate, setCurrentDate] = useState(defaultDate);

	const [canPickMonth, setCanPickMonth] = useState(false);
	const handleSetToday = () => setCurrentDate(new Date());
	const startDate = startOfMonth(currentDate);
	const endDate = endOfMonth(currentDate);
	const numDays = differenceInDays(endDate, startDate) + 1;

	const prefixDays = startDate.getDay();
	const suffixDays = 6 - endDate.getDay();

	const prevYear = () => setCurrentDate(sub(currentDate, { years: 1 }));
	const nextYear = () => setCurrentDate(add(currentDate, { years: 1 }));

	const handleClickDate = (index: number) => {
		const date = setDate(currentDate, index);
		setCurrentDate(date);
	};

	const handleMonth = (month: number) => {
		setCurrentDate(setMonth(currentDate, month));
		setCanPickMonth(false);
	};

	const handleTimePicker = (param: string) => {
		const newTime: string[] = param.split(':');
		const newHour = Number(newTime[0]);
		const newMin = Number(newTime[1]);

		const newDate = new Date(currentDate);

		newDate.setHours(newHour);
		newDate.setMinutes(newMin);

		setCurrentDate(newDate);
	};

	const isDisabled = () => {
		if (!value) {
			return false;
		} else {
			if (isEqual(defaultDate, currentDate) || loading) {
				return true;
			}
		}
		return false;
	};

	const handleSave = (date: Date) => {
		onCancel();
		onSave(date);
	};
	return (
		<ViewTaskItem
			title="Due"
			onCancel={onCancel}
			onSave={() => handleSave(currentDate)}
			disable={isDisabled()}
		>
			<CalendarHeader className="row">
				<MonthYearPicker onClick={() => setCanPickMonth(true)}>
					<b>{format(currentDate, 'LLL yyyy')}</b>
				</MonthYearPicker>
				{!isToday(currentDate) && (
					<Button size="xSmall" onClick={() => handleSetToday()} theme="primary">
						Today
					</Button>
				)}
			</CalendarHeader>

			<CalendarBody className="row">
				<CalendarWeekDay>
					{weeks.map((week, index) => (
						<div key={index}>{week}</div>
					))}
				</CalendarWeekDay>

				<CalendarDays>
					{Array.from({ length: prefixDays }).map((_, index) => (
						<span key={index} />
					))}
					{Array.from({ length: numDays }).map((_, index) => {
						const date = index + 1;
						const isCurrentDate = date === currentDate.getDate();

						return (
							<div
								key={date}
								className={classNames({
									active: isCurrentDate,
								})}
								onClick={() => handleClickDate(date)}
							>
								{date}
							</div>
						);
					})}
					{Array.from({ length: suffixDays }).map((_, index) => (
						<span key={index} />
					))}
				</CalendarDays>
			</CalendarBody>
			<ChooseTime className="row">
				<span>Set time</span>
				<Time>
					<TimePicker
						date={currentDate}
						onChange={(param) => handleTimePicker(param)}
					/>
				</Time>
			</ChooseTime>
			<MonthsYear
				currentDate={currentDate}
				onMonth={handleMonth}
				show={canPickMonth}
				onPrevYear={prevYear}
				onNextYear={nextYear}
				onClose={() => setCanPickMonth(false)}
			/>
		</ViewTaskItem>
	);
}

export default DatePicker;
