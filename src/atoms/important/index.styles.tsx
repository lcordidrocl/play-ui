import styled from 'styled-components';

export const Wrapper = styled.div`
	cursor: pointer;
	&.active {
		color: var(--primary);
	}
	@media (hover: hover) {
		&:hover {
			svg {
				color: var(--primary);
			}
		}
	}
`;
