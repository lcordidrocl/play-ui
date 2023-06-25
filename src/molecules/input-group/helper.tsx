import { Icon, Toggle } from 'atoms';
import { IconsType } from 'types';

export const inputIcons = {
	second: [{ type: 'password', icon: 'EyesClose' }, ,],
};

type InputObjType = {
	type: string;
	icon: IconsType;
};

export function findIconName(data: any[], type: string) {
	const findObj = data?.find((item: InputObjType) => item?.type === type);

	return findObj?.icon || undefined;
}

type GetIconProps = {
	type: string;
	onShow?: () => void;
	show?: boolean;
};

export function getIcon({ type, onShow, show }: GetIconProps) {
	const iconsSecond = inputIcons.second;
	const icon = findIconName(iconsSecond, type);
	if (icon) {
		switch (type) {
			case 'password':
				return (
					<Toggle onClick={() => onShow && onShow()}>
						<Icon as={show ? 'Eyes' : icon} size="Medium" color="neutral400" />
					</Toggle>
				);
			default:
				return <Icon as={icon} size="Medium" color="neutral400" />;
		}
	}
}
