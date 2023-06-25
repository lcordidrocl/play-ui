import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 100%;
	height: 100%;
	margin-left: auto;
	margin-right: auto;
	position: relative;
	list-style: none;
	padding: 0;
	z-index: 1;
	touch-action: pan-y;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow: hidden;
`;

export const Inner = styled.div`
	position: relative;
	width: 90%;
	height: 100%;
	z-index: 1;
	display: flex;
	transition: transform 0.3s;
	transition-property: transform;
	box-sizing: content-box;
	max-width: 648px;
`;

export const Item = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;
	width: 100%;
	position: relative;
	transition-property: transform;
	padding: 4px;
	opacity: 0.5;
	&.active {
		opacity: 1;
	}
`;

export const Pagination = styled.ul`
	&.unset {
		margin-top: 20px;
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
		li {
			span {
				text-indent: -9999px;
			}
			&:not(.arrow) {
				background-color: var(--border);
				border-radius: 50%;
				width: 12px;
				height: 12px;
				cursor: pointer;
				&.active,
				&:active {
					background-color: var(--primary);
				}
			}
			&.dot {
				margin: 0 5px;
			}
			&.arrow {
				margin: 0 19px;
				button {
					transition: all 0.3s;
					&:disabled {
						cursor: unset;
						opacity: 0;
					}
					@media (hover: hover) {
						&:not(:disabled):hover {
							transform: scale(1.2);
						}
					}
				}
				&:active {
					svg {
						fill: var(--border);
					}
				}
			}
		}
	}
`;
