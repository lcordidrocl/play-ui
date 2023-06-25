import styled from 'styled-components';

export const Wrapper = styled.div`
	display: inline-block;
	position: relative;

	> div {
		background-image: linear-gradient(
			to right,
			#fff,
			#fff,
			var(--blue50),
			var(--blue50),
			var(--blue100),
			var(--blue100),
			var(--blue200),
			var(--blue200),
			var(--blue300),
			var(--blue300),
			var(--primary),
			var(--primary)
		);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		animation: rainbow-animation 550s linear infinite;
	}
	@keyframes rainbow-animation {
		to {
			background-position: 4500vh;
		}
	}
`;
