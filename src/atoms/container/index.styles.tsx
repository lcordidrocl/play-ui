import styled from 'styled-components';

import { MobileSize } from 'utils/constants';

export const Wrapper = styled.div`
	width: 100%;
	margin: 0 auto;
	padding: 0 15px;
	height: 100%;
	@media screen and (max-width: ${MobileSize}) {
		padding: 0 10px;
	}
`;
