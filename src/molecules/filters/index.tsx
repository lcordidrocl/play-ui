import { ColorType } from 'types';
import { Wrapper } from './index.styles';

import { Button, Icon } from 'atoms';
import { useRouter } from 'next/router';

export function Filters() {
	const router = useRouter();
	const handleFilter = (value: string) => {
		router.replace({
			query: { ...router.query, filter: value },
		});
	};
	const isCalendar = router.query.filter === 'calendar';
	const calendarTheme = isCalendar ? 'primary' : 'neutral200';
	const listTheme = isCalendar ? 'neutral200' : 'primary';
	return (
		<Wrapper className="filters">
			<Button
				size="xxSmall"
				theme={listTheme}
				active={!isCalendar}
				variant="outline"
				onClick={() => handleFilter('list')}
			>
				<Icon as="ListView" />
			</Button>
			<Button
				size="xxSmall"
				theme={calendarTheme}
				active={isCalendar}
				variant="outline"
				onClick={() => handleFilter('calendar')}
			>
				<Icon as="Calendar" />
			</Button>
		</Wrapper>
	);
}

export default Filters;
