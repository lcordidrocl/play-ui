import React, { useCallback, useEffect, useRef, useState } from 'react';

import { Profile } from './index.styles';

import DropMenu from '../drop-menu';
import { Avatar } from 'atoms';
import { MenuType, UserType } from 'types';
import { getInitial } from 'helpers';

export function MenuBar({ onLogout, user }: MenuType) {
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLInputElement>(null);
	const escFunction = useCallback((event: { keyCode: number }) => {
		if (event.keyCode === 27) {
			setOpen(false);
		}
	}, []);
	const checkIfClickedOutside = useCallback(
		(e: any) => {
			if (open && ref.current && !ref.current.contains(e.target)) {
				setOpen(false);
			}
		},
		[open]
	);

	useEffect(() => {
		document.addEventListener('keydown', escFunction);
		document.addEventListener('mousedown', checkIfClickedOutside);

		return () => {
			document.removeEventListener('keydown', escFunction);
			document.removeEventListener('mousedown', checkIfClickedOutside);
		};
	}, [checkIfClickedOutside, escFunction, open]);

	const initial = getInitial(user?.email);

	return (
		<Profile className="menu-bar" ref={ref}>
			<Avatar name={initial} size="xSmall" onClick={() => setOpen(!open)} />
			{open && <DropMenu user={user} onLogout={onLogout} />}
		</Profile>
	);
}
export default MenuBar;
