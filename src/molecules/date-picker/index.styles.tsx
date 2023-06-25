import styled from 'styled-components';

export const CalendarBody = styled.div``;

export const CalendarDays = styled.div`
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	gap: 5px;
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 5px;
		position: relative;
		border-radius: 4px;
		cursor: pointer;

		@media (hover: hover) {
			&:hover {
				background-color: var(--blue200);
				color: var(--white);
			}
		}

		&.active {
			background-color: var(--blue);
			color: var(--white);
			pointer-events: none;
		}
	}
`;
export const CalendarHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 5px 10px;
	background-color: var(--white);
	border-radius: 4px;
`;

export const MonthYearPicker = styled.div`
	color: var(--secondary);
	cursor: pointer;
	line-height: 1.8;
	@media (hover: hover) {
		&:hover {
			text-decoration: underline;
		}
	}
`;

export const CalendarWeekDay = styled.div`
	height: 50px;
	display: grid;
	grid-template-columns: repeat(7, 1fr);
	font-weight: 600;
	div {
		display: grid;
		place-items: center;
		color: var(--neutral400);
	}
`;

export const PickedDay = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const ChooseTime = styled.div`
	display: flex;
	justify-content: space-between;
	background-color: var(--white);
	padding: 5px 15px;
	position: relative;
	z-index: 2;
	color: var(--neutral200);
	border-radius: 4px;
`;

export const Time = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;
