export type TaskType = {
	id: string;
	title: string;
	position: number;
	status: StatusType;
	important: boolean;
	dependsOn: string;
	categoryId: string;
	zoneId: string;
	description: string;
	subtasks?: { id: string }[];
	duration: string;
	due?: Date;
	updatedAt: Date;
	createdAt: Date;
};

export type CategoryType = {
	id: string;
	title: string;
	position: number;
	userId?: string;
	updatedAt?: Date;
	createdAt?: Date;
};

export type ZoneType = {
	id: string;
	title: string;
	position: number;
	userId?: string;
	updatedAt?: Date;
	createdAt?: Date;
};

export type SubTaskType = {
	id: string;
	title: string;
	position: number;
	status: StatusType;
	taskId: string;
	userId?: string;
	updatedAt?: Date;
	createdAt?: Date;
};

export type UserType = {
	id: string;
	email: string;
};

export type AuthResponseType = {
	accessToken: string;
	refreshToken: string;
	user: UserType;
};

export type StatusType =
	| 'Cancelled'
	| 'Completed'
	| 'Incomplete'
	| 'Inprogress'
	| 'Waiting';

export type SizeType =
	| 'xxSmall'
	| 'xSmall'
	| 'Small'
	| 'Medium'
	| 'Large'
	| 'xLarge'
	| 'xxLarge'
	| 'Default';

export type IconsType =
	| 'Add'
	| 'AngleDown'
	| 'AngleLeft'
	| 'AngleRight'
	| 'AnglesUp'
	| 'AngleUp'
	| 'ApplePay'
	| 'ArrowDown'
	| 'ArrowLeft'
	| 'ArrowRight'
	| 'Bag'
	| 'Bank'
	| 'Bell'
	| 'BellOutline'
	| 'Bill'
	| 'Bin'
	| 'Block'
	| 'Bookmark'
	| 'Burger'
	| 'Calendar'
	| 'Camera'
	| 'Card'
	| 'Chat'
	| 'ChatHistory'
	| 'Clock'
	| 'Cross'
	| 'Dependent'
	| 'Dots'
	| 'Download'
	| 'Edit'
	| 'Envelope'
	| 'Error'
	| 'ErrorOutline'
	| 'Eyes'
	| 'EyesClose'
	| 'Facebook'
	| 'File'
	| 'Filter'
	| 'Folder'
	| 'ForkLift'
	| 'Google'
	| 'GooglePay'
	| 'Heart'
	| 'Help'
	| 'Home'
	| 'Information'
	| 'Kmart'
	| 'Like'
	| 'ListView'
	| 'Lock'
	| 'LShaped'
	| 'Map'
	| 'Minus'
	| 'NotFound'
	| 'OnOff'
	| 'Paypal'
	| 'Pencil'
	| 'Phone'
	| 'Question'
	| 'Search'
	| 'Secret'
	| 'Settings'
	| 'SignOut'
	| 'Sortby'
	| 'Star'
	| 'StarOutline'
	| 'Tick'
	| 'TilesView'
	| 'Undo'
	| 'User'
	| 'Users'
	| 'Warning'
	| 'Repeat'
	| 'Timer'
	| 'Tag'
	| 'Today'
	| 'WarningOutline';

export type ColorType =
	| 'charcoal'
	| 'neutral50'
	| 'neutral75'
	| 'neutral100'
	| 'neutral200'
	| 'neutral300'
	| 'neutral400'
	| 'neutral500'
	| 'blue'
	| 'blue20'
	| 'blue50'
	| 'blue100'
	| 'blue200'
	| 'blue300'
	| 'black'
	| 'overlay'
	| 'white'
	| 'red'
	| 'red50'
	| 'orange300'
	| 'green'
	| 'green100'
	| 'primary'
	| 'secondary'
	| 'paragraph'
	| 'border'
	| 'primaryBg'
	| 'secondaryBg'
	| 'error'
	| 'warning'
	| 'success';

export type VariantType =
	| 'primary'
	| 'secondary'
	| 'tertiary'
	| 'outline'
	| 'transparent'
	| 'underline'
	| 'round'
	| 'dashed';

export type ModalVariantType = 'left' | 'center' | 'right';

export type ThemeType =
	| 'success'
	| 'error'
	| 'warning'
	| 'primary'
	| 'secondary'
	| 'white'
	| 'grey';

export type ButtonType = 'button' | 'submit' | 'reset';

export type ChildrenType = React.ReactNode;

export type OnClickType = (e?: any) => void;

export type OnChangeEventType = React.ChangeEvent<HTMLInputElement>;

export type OnChangeTextareaType = React.ChangeEvent<HTMLTextAreaElement>;

export type OnSelectChangeEventType = React.ChangeEvent<HTMLSelectElement>;

export type OnAllChangeType =
	| OnChangeEventType
	| OnChangeTextareaType
	| OnSelectChangeEventType;

export type OnChangeType = (e: OnAllChangeType) => void;

export type OnSelectChangeType = (e: OnSelectChangeEventType) => void;

export type DragType = React.DragEvent<HTMLDivElement>;

export type ButtonTypes = {
	children: ChildrenType;
	disabled?: boolean;
	onClick?: OnClickType;
	type?: ButtonType;
	variant?: VariantType;
	name?: string;
	size?: SizeType;
	theme?: ColorType;
	active?: boolean;
};

export type HeadingType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type RefType = React.RefObject<HTMLDivElement>;

export type SubmitEventType = React.FormEvent<HTMLFormElement>;

export type OnSubmitType = (e: SubmitEventType) => void;

export type ObjType = {
	[key: string]: string;
};

export type MenuType = {
	onLogout?: any;
	user?: {
		id: string;
		email: string;
	};
};

export type InputType = {
	id?: string;
	type?: string;
	title?: string;
	name: string;
	placeholder?: string;
	onChange?: (e: OnAllChangeType) => void;
	onKeyDown?: () => void;
	onBlur?: () => void;
	required?: boolean;
	value?: string | number | undefined;
	disabled?: boolean;
	minLength?: number;
	maxLength?: number;
	autoComplete?: 'on' | 'off';
	className?: string;
	options?: {
		id: string;
		value: string;
		name: string;
	}[];
	error?: string;
};

export type TextareaType = {
	title?: string;
	name: string;
	placeholder?: string;
	onChange?: (e: OnChangeTextareaType) => void;
	required?: boolean;
	value?: string | number | undefined;
	disabled?: boolean;
	minLength?: number;
	maxLength?: number;
	className?: string;
};

export type AlertType = {
	type: ThemeType;
	message: string;
};

export type ColType = {
	align?: FlexAlignType | undefined;
	justify?: FlexAlignType;
	size?: number | 'auto';
	space?: number;
	onClick?: () => void;
};

export type FlexAlignType =
	| 'flex-start'
	| 'flex-end'
	| 'center'
	| 'baseline'
	| 'stretch'
	| 'left'
	| 'right'
	| 'space-between';

export type FilterType = { id: number; value: string };

export type DrawerType = {
	id?: string;
	title: string;
	icon: IconsType;
	type?: string;
};

export type UnknownErrorType = {
	icon: IconsType;
	text: string;
	buttonTitle: string;
	onClick: () => void;
};

export type PageType = 'auth';

export type FormType = {
	email: string;
	password: string;
};

export type DeviceType = 'mobile' | 'tablet';

export type ComponentType = 'drawer' | 'task';

export type AuthButton = {
	id: string;
	type: AuthType;
	title: string;
};
export type AuthContentType = {
	title: string;
	inputs: InputType[];
	buttons: AuthButton[];
};

export type AuthType = 'signin' | 'signup' | 'forgot' | 'reset';

export type TabType = {
	id: string;
	title: string;
	status: StatusType;
	count?: number;
};

export type DurationType = { hours: string; mins: string };

export type BooleanType = 'true' | 'false';

export type RouteType = {
	taskId?: string;
	zoneId?: string;
	categoryId?: string;
	today?: boolean;
	important?: boolean;
};
