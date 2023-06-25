import React from 'react';
import { ChildrenType } from 'types';
import { useViewHeight } from 'utils';

import { Wrapper } from './index.styles';

type Props = {
	children: ChildrenType;
	othersHeight?: number;
};

export function FixedHeight({ children, othersHeight }: Props) {
	const [viewHeight] = useViewHeight();
	return (
		<Wrapper
			className="fixed-height"
			othersHeight={othersHeight}
			height={viewHeight}
		>
			<div className="inner">{children}</div>
		</Wrapper>
	);
}

export default FixedHeight;
