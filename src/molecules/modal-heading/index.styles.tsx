import { getSkelton } from 'helpers';
import styled from 'styled-components';

export const Wrapper = styled.form`
	padding: 10px 0 20px;

	.text {
		margin: 0;
	}
	.text.right {
		color: var(--primary);
	}
	input {
		font-size: 18px;
		font-weight: 600;
	}
	&.completed {
		text-decoration: line-through;
	}
	.checkbox,
	.col,
	.important {
		&:before {
			content: none;
		}
	}
	&.loading {
		.checkbox,
		.col,
		.important {
			${() => getSkelton()}
		}
	}
`;
