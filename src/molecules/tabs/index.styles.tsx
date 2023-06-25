import styled, { css } from 'styled-components';

export const Wrapper = styled.ul`
	&.unset {
		width: 100%;
		li {
			width: 50%;
			font-weight: bold;
			padding: 15px 15px;
			text-align: center;
			background: var(--neutral75);
			color: var(--neutral300);
			border-top-left-radius: 30px;
			border-top-right-radius: 30px;
			gap: 10px;
			display: flex;
			justify-content: center;
			cursor: pointer;
			@media (hover: hover) {
				&:hover {
					color: var(--black);
				}
			}
			&.active {
				background: var(--white);
				color: var(--black);
				pointer-events: none;
			}
			.text {
				margin: 0;
			}
			span {
				color: var(--neutral200);
			}
		}
	}
`;
