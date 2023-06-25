import { MenuType } from 'types';

import { Icon, Button } from 'atoms';

import { Wrapper, ReadField } from './index.styles';

export function DropMenu({ onLogout, user }: MenuType) {
	return (
		<Wrapper className="drop-menu">
			<ReadField>{user?.email}</ReadField>
			<Button onClick={onLogout} theme="neutral400" variant="outline">
				Sign Out
				<Icon as="SignOut" size="Small" />
			</Button>
		</Wrapper>
	);
}

export default DropMenu;
