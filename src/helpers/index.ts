import { css } from 'styled-components';
import { formatDistance, isToday } from 'date-fns';

import { MobileSize, Sizes, TabletSize } from 'utils/constants';
import {
	CategoryType,
	ColorType,
	DeviceType,
	DurationType,
	IconsType,
	ModalVariantType,
	PageType,
	RouteType,
	SizeType,
	StatusType,
	TaskType,
	VariantType,
	ZoneType,
} from 'types';

const { XL, L, M, S, XS, D, XXS } = Sizes;

export const fontSize = {
	[XL]: 24,
	[L]: 20,
	[M]: 16,
	[S]: 14,
	[XS]: 12,
	[XXS]: 10,
};

export const getFontSize = (size: SizeType | undefined) => {
	switch (size) {
		case XL:
			return css`
				font-size: ${fontSize[size]}px;
				line-height: 28.8px;
			`;
		case L:
			return css`
				font-size: ${fontSize[size]}px;
				line-height: 30px;
			`;

		case S:
			return css`
				font-size: ${fontSize[size]}px;
				line-height: 21px;
				letter-spacing: 0.2px;
			`;
		case XS:
			return css`
				font-size: ${fontSize[size]}px;
				line-height: 15px;
				letter-spacing: 0.4px;
			`;
		case XXS:
			return css`
				font-size: ${fontSize[size]}px;
				line-height: 8px;
				letter-spacing: 0.4px;
			`;
		case M:
		default:
			return css`
				font-size: ${fontSize['Medium']}px;
				line-height: 19.2px;
				letter-spacing: 0.2px;
			`;
	}
};

export const getSpace = (size: SizeType | undefined) => {
	switch (size) {
		case S:
			return css`
				padding: 8.5px 20px;
			`;
		case XS:
			return css`
				padding: 4px 15px;
			`;
		case XXS:
			return css`
				padding: 10px;
			`;
		case M: // TODO
		case D:
		default:
			return css`
				padding: 16px 32px;
			`;
	}
};

export const getRoundSpace = (size: SizeType | undefined) => {
	switch (size) {
		case M: // TODO
			return css`
				padding: 16px 32px;
			`;
		case S: // TODO
		case XS:
			return css`
				padding: 5px;
			`;
		case D:
		default:
			return css`
				padding: 15px;
			`;
	}
};

export const getTheme = ({
	variant,
	theme = 'primary',
}: {
	variant: VariantType;
	theme?: ColorType;
}) => {
	const color = getColor(theme);
	const borderTheme = getBorderTheme(theme);
	const borderColor = getColor(borderTheme);
	switch (variant) {
		case 'outline':
			return css`
				background-color: transparent;
				border-color: ${borderColor};
				color: ${color};
			`;

		case 'transparent':
			return css`
				background-color: transparent;
				border-color: none;
				color: ${color};
			`;
		default:
			return css`
				background-color: ${color};
				border-color: ${borderColor};
				color: var(--white);
			`;
	}
};

export const getIconSize = (size: SizeType | undefined) => {
	switch (size) {
		case Sizes.XXL:
			return css`
				width: 164px;
			`;
		case Sizes.XL:
			return css`
				width: 80px;
			`;
		case Sizes.L: //TODO
			return css`
				width: 50px;
			`;
		default:
		case Sizes.M:
			return css`
				width: 21px;
			`;
		case Sizes.S:
			return css`
				width: 15px;
			`;
		case Sizes.XS:
			return css`
				width: 10px;
			`;
		case Sizes.XXS:
			return css`
				width: 7.5px;
			`;
	}
};

export const getRoundSize = (size: SizeType | undefined) => {
	switch (size) {
		case Sizes.XL:
			return css`
				width: 30px;
				height: 30px;
			`;
		case Sizes.L:
			return css`
				width: 22px;
				height: 22px;
			`;
		default:
		case Sizes.M:
			return css`
				width: 20px;
				height: 20px;
				padding: 4px;
			`;
		case Sizes.S:
			return css`
				width: 15px;
				height: 15px;
			`;
		case Sizes.XS:
			return css`
				width: 10px;
				height: 10px;
				padding: 2px;
			`;
	}
};

type variantProps = {
	variant: VariantType | undefined;
	size: SizeType | undefined;
};

export const getVariant = ({ variant, size }: variantProps) => {
	switch (variant) {
		case 'round':
			return css`
				border: none;
				border-radius: 50%;
				${() => getRoundSize(size)};
				${() => getFontSize(size)};
			`;
		case 'primary':
		default:
			return css`
				border-width: 1px;
				border-radius: 4px;
				${() => getSpace(size)};
				${() => getFontSize(size)};
			`;
		case 'secondary':
		case 'transparent':
			return css`
				border-width: 0;
				border-radius: 0;
				${() => getSpace(size)};
				${() => getFontSize(size)};
			`;
	}
};

export const getColor = (color?: string) => `var(--${color})`;

export const getBorderTheme = (theme: ColorType): ColorType => {
	switch (theme) {
		case 'secondary':
			return 'border';
		default:
			return theme;
	}
};

export function getPriorityIcon({
	status,
	value,
}: {
	status: StatusType;
	value: number;
}): IconsType {
	switch (status) {
		case 'Cancelled':
			return 'Error';
		default:
			switch (value) {
				case 1:
					return 'AnglesUp';
				case 2:
					return 'AngleUp';
				case 3:
				default:
					return 'AngleDown';
			}
	}
}

export function getPriorityColor({
	status,
	value,
}: {
	status: StatusType;
	value: number;
}): ColorType {
	switch (status) {
		case 'Completed':
			return 'success';
		case 'Cancelled':
			return 'error';
		default:
			switch (value) {
				case 1:
					return 'error';
				case 2:
					return 'warning';
				case 3:
				default:
					return 'primary';
			}
	}
}

export function getSplitMoveType(moveType: string): string[] | string {
	const splitted = moveType?.toLowerCase().split('to');
	return splitted?.length > 1 ? splitted : moveType;
}

export function Capitalize(str: string): string {
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

export const getCheckboxVariant = ({
	variant,
}: {
	variant: VariantType | undefined;
}) => {
	switch (variant) {
		case 'round':
			return css`
				> div {
					border-radius: 50%;
				}
			`;
		case 'primary':
		default:
			return css`
				> div {
					border-radius: 2px;
				}
			`;
	}
};

export function getTime(date: string): string {
	const timeStr = new Date(date);
	return timeStr.toLocaleTimeString([], {
		hour: '2-digit',
		minute: '2-digit',
	});
}

export const getModalStyle = (variant: ModalVariantType) => {
	switch (variant) {
		case 'left':
			return css`
				max-width: 250px;
				margin-right: auto;
				height: 100%;
				box-shadow: 5px 0px 10px 2px rgba(0, 0, 0, 0.2);
				-webkit-box-shadow: 5px 0px 10px 2px rgba(0, 0, 0, 0.2);
				-moz-box-shadow: 5px 0px 10px 2px rgba(0, 0, 0, 0.2);
			`;
		case 'center':
		default:
			return css`
				max-width: 500px;
				box-shadow: 0px 0px 16px -5px rgba(0, 0, 0, 0.2);
				-webkit-box-shadow: 0px 0px 16px -5px rgba(0, 0, 0, 0.2);
				-moz-box-shadow: 0px 0px 16px -5px rgba(0, 0, 0, 0.2);
			`;
	}
};

export const getInitials = (nameString: string) => {
	if (!nameString) {
		return '-';
	}
	const fullName: string[] = nameString.split(' ');
	const firstName = fullName[0] || '';
	const lastName = fullName[fullName.length - 1];
	const initials = firstName?.charAt(0) + lastName?.charAt(0) || '';
	const result = initials.toUpperCase();

	return result;
};

export const getInitial = (nameString?: string) => {
	if (!nameString) {
		return '-';
	}
	const fullName: string[] = nameString.split(' ');
	const firstName = fullName[0];

	const initial = firstName?.charAt(0);
	const result = initial?.toUpperCase();

	return result;
};

interface PropsFilterByRoutes extends RouteType {
	list: TaskType[];
}
export const filterByRoutes = ({
	list,
	today,
	important,
	categoryId,
	zoneId,
}: PropsFilterByRoutes) => {
	switch (true) {
		case !!today:
			return getTodayList(list);
		case !!important:
			return getImpList(list);
		case !!categoryId:
			return !!categoryId && getTaskByCategory(list, categoryId);
		case !!zoneId:
			return !!zoneId && getTaskByZone(list, zoneId);
		default:
			return list;
	}
};

interface PropsGetPageTitle extends RouteType {
	zone?: ZoneType;
	category?: CategoryType;
}
export const getPageTitle = ({
	zone,
	category,
	today,
	important,
	categoryId,
	zoneId,
}: PropsGetPageTitle) => {
	switch (true) {
		case !!today:
			return {
				name: 'Today',
				icon: 'Today',
			};
		case !!important:
			return {
				name: 'Important',
				icon: 'Star',
			};
		case !!categoryId:
			return {
				name: category?.title,
				icon: 'Folder',
			};
		case !!zoneId:
			return {
				name: zone?.title,
				icon: 'Tag',
			};
		default:
			return {
				name: 'Tasks',
				icon: 'Home',
			};
	}
};

export const filterByStatus = (list: TaskType[], status: StatusType) => {
	if (!status) return list;
	return list?.filter((item) => item.status === status);
};

export const getCompletedTasks = (list: TaskType[]) =>
	list?.filter((item) => item.status === 'Completed');
export const getInCompleteTasks = (list: TaskType[]) =>
	list?.filter((item) => item.status === 'Incomplete');

export const countTasks = (list: TaskType[]) => {
	const Completed = getCompletedTasks(list)?.length;
	const Incomplete = getInCompleteTasks(list)?.length;
	return {
		Completed: Completed,
		Incomplete: Incomplete,
	};
};

type ListProps = { id: string; title: string }[];

export const searchByTitle = (list: ListProps, value: string) => {
	if (!list?.length) {
		return [];
	}
	if (!value) {
		return list;
	}
	return list?.filter((item) =>
		item.title.toLowerCase().includes(value.toLowerCase())
	);
};

export const searchListByTitle = (
	list: TaskType[],
	value: string
): TaskType[] => {
	if (!list?.length) {
		return [];
	}
	if (!value) {
		return list;
	}
	return list?.filter((item) =>
		item.title.toLowerCase().includes(value.toLowerCase())
	);
};

export const GQLString = (value: string | null | undefined) => {
	const isValue = Boolean(value);
	if (isValue) {
		const cleaned = value?.toString().replace(/^\s+|\s+$/gm, '');
		const result = `"${cleaned}"`;

		return result;
	}

	return null;
};

export const NotSameValues = (old: string, next: string) => {
	return old?.toLowerCase() !== next?.toLowerCase();
};

export const getDeviceSize = (device: DeviceType | undefined) => {
	switch (device) {
		case 'mobile':
			return MobileSize;
		case 'tablet':
		default:
			return TabletSize;
	}
};

export const formatTime = (duration: string): DurationType => {
	const splitted: string[] = duration.split(':');
	return {
		hours: splitted[0] || '',
		mins: splitted[1] || '',
	};
};

export const convertTime = (duration: DurationType): string => {
	const converted: string = duration.hours + ':' + duration.mins;
	return converted;
};

export const getSkelton = () => css`
	position: relative;
	border-color: transparent !important;
	cursor: wait;
	pointer-events: none;
	overflow: hidden;
	&:before {
		content: '';
		position: absolute;
		height: 100%;
		width: 100%;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		z-index: 3;
		border-radius: 4px;
		background: linear-gradient(0.25turn, transparent, #fff, transparent),
			linear-gradient(#eee, #eee),
			radial-gradient(38px circle at 19px 19px, #eee 50%, transparent 51%),
			linear-gradient(#eee, #eee);
		background-repeat: no-repeat;
		/* background-size: 315px 250px, 315px 180px, 100px 100px, 225px 30px; */
		background-position: -315px 0, 0 0, 0px 190px, 50px 195px;
		@media (prefers-reduced-motion: no-preference) {
			animation: gradientBG 2s ease infinite;
			animation: loading 1.5s infinite;
		}
	}

	@keyframes loading {
		to {
			background-position: 315px 0, 0 0, 0 190px, 50px 195px;
		}
	}
`;

export const Stringify = (param: any) => {
	const jsString = JSON.stringify(param);
	const convertToSingle = jsString.replace(/"/g, "'");
	return convertToSingle;
};

export const Parse = (param: string) => {
	const convertToDouble = param.replace(/'/g, '"');
	const jsParse = JSON.parse(convertToDouble);
	return jsParse;
};

export const getTodayList = (list: TaskType[]) => {
	return list.filter((item) => {
		const date = item.due && new Date(item.due);
		return date ? isToday(date) : false;
	});
};

export const getImpList = (list: TaskType[]) =>
	list.filter((item) => !!item.important);

export const getTaskByCategory = (list: TaskType[], categoryId: string) =>
	list.filter((task) => task.categoryId === categoryId);

export const getTaskByZone = (list: TaskType[], zoneId: string) =>
	list.filter((task) => task.zoneId === zoneId);

export const getCreatedTime = (date: Date) => {
	return date && formatDistance(new Date(), new Date(date));
};
