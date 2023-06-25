import styled, { css } from 'styled-components';

type Props = {
	selected: boolean | undefined;
};

export const Wrapper = styled.div<Props>`
	cursor: pointer;
	min-width: 211px;
	max-width: 317px;
	counter-increment: step-counter;
	text-transform: uppercase;
	border: 1px solid var(--border);
	list-style-type: none;
	list-style-position: outside;
	position: relative;
	display: flex;
	align-items: center;
	overflow: hidden;
	> p {
		padding: 21.4px 16px;
		margin: 0 0 0 52px;
		border-left: 1px solid var(--border);
		width: 100%;
	}
	&:before {
		content: counter(step-counter) '.';
		background-color: var(--neutral50);
		text-align: center;
		width: 52px;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	${({ selected }) =>
		selected &&
		css`
			background-color: var(--blue50);
			border-top: 1px solid var(--primary) !important;
			border-left: 1px solid var(--primary) !important;
			border-right: 1px solid var(--primary) !important;
			border-bottom: 1px solid var(--primary) !important;

			&:before {
				background-color: var(--primary);
				color: var(--white);
			}
		`}
`;
