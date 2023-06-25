import styled from 'styled-components';

export const Wrapper = styled.div<{ height?: number }>`
	position: relative;
	&:before {
		top: 0;
		background: rgb(255, 255, 255);
		background: -moz-linear-gradient(
			0deg,
			rgba(255, 255, 255, 0.7805555555555556) 0%,
			rgba(255, 255, 255, 0.9361111111111111) 82%
		);
		background: -webkit-linear-gradient(
			0deg,
			rgba(255, 255, 255, 0.7805555555555556) 0%,
			rgba(255, 255, 255, 0.9361111111111111) 82%
		);
		background: linear-gradient(
			0deg,
			rgba(255, 255, 255, 0.7805555555555556) 0%,
			rgba(255, 255, 255, 0.9361111111111111) 82%
		);
		filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#ffffff",GradientType=1);
	}
	&:after {
		bottom: 0;
		background: rgb(255, 255, 255);
		background: -moz-linear-gradient(
			0deg,
			rgba(255, 255, 255, 0.9361111111111111) 0%,
			rgba(255, 255, 255, 0.7805555555555556) 82%
		);
		background: -webkit-linear-gradient(
			0deg,
			rgba(255, 255, 255, 0.9361111111111111) 0%,
			rgba(255, 255, 255, 0.7805555555555556) 82%
		);
		background: linear-gradient(
			0deg,
			rgba(255, 255, 255, 0.9361111111111111) 0%,
			rgba(255, 255, 255, 0.7805555555555556) 82%
		);
		filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff",endColorstr="#ffffff",GradientType=1);
	}
	&::before,
	&:after {
		z-index: 2;
		position: absolute;
		right: 0;
		left: 0;
		height: ${({ height }) => (height ? height + 'px' : '10px')};
		content: '';
	}
`;
