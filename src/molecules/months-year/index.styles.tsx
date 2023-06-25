import styled from 'styled-components';

export const Wrapper = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	visibility: hidden;
	pointer-events: none;
	display: flex;
	flex-direction: column;
	background-color: var(--white);
	z-index: 2;
	&.show {
		visibility: visible;
		pointer-events: visible;
	}
`;

export const MonthList = styled.div`
	background-color: var(--primary);
	color: var(--white);
	padding: 20px;
	grid-template-columns: repeat(3, auto);
	gap: 5px;
	display: grid;
	height: 100%;

	> div {
		display: grid;
		place-items: center;
		width: 100%;
		padding: 5px 20px;
		border-radius: 4px;
		text-align: center;
		cursor: pointer;
		@media (hover: hover) {
			&:hover {
				background-color: var(--blue200);
			}
		}
		&.active {
			background-color: var(--blue200);
		}
	}
`;

export const MonthPicker = styled.span`
	padding: 5px 10px;
	border-radius: 4px;
	cursor: pointer;
	@media (hover: hover) {
		&:hover {
			background-color: var(--border);
		}
	}
`;

export const YearPicker = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 10px;
`;

export const DateMonth = styled.div`
	color: var(--neutral200);
`;

export const YearPickerHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
	width: 100%;
`;
