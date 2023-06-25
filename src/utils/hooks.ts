import { useState, useEffect } from 'react';

export const useViewHeight = () => {
	const [viewHeight, setViewHeight] = useState<number>();

	useEffect(() => {
		const updateWindowDimensions = () => {
			if (typeof window !== 'undefined') {
				const visualHeight = window.visualViewport?.height;
				setViewHeight(visualHeight);
			}
		};
		updateWindowDimensions();
		window?.addEventListener('resize', updateWindowDimensions);

		return () => window.removeEventListener('resize', updateWindowDimensions);
	}, []);

	return [viewHeight];
};
