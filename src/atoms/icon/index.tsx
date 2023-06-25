import { ColorType, IconsType, SizeType } from 'types';

import { Wrapper } from './index.styles';

import Add from './icons/add.svg';
import AngleDown from './icons/angle-down.svg';
import AngleLeft from './icons/angle-left.svg';
import AngleRight from './icons/angle-right.svg';
import AnglesUp from './icons/angles-up.svg';
import AngleUp from './icons/angle-up.svg';
import ApplePay from './icons/apple-pay.svg';
import ArrowDown from './icons/arrow-down.svg';
import ArrowLeft from './icons/arrow-left.svg';
import ArrowRight from './icons/arrow-right.svg';
import Bag from './icons/bag.svg';
import Bank from './icons/bank.svg';
import Bell from './icons/bell.svg';
import BellOutline from './icons/bell-outline.svg';
import Bill from './icons/bill.svg';
import Bin from './icons/bin.svg';
import Block from './icons/block.svg';
import Bookmark from './icons/bookmark.svg';
import Burger from './icons/burger.svg';
import Calendar from './icons/calendar.svg';
import Camera from './icons/camera.svg';
import Card from './icons/card.svg';
import Chat from './icons/chat.svg';
import ChatHistory from './icons/chat-history.svg';
import Clock from './icons/clock.svg';
import Cross from './icons/cross.svg';
import Dots from './icons/dots.svg';
import Dependent from './icons/dependent.svg';
import Download from './icons/download.svg';
import Edit from './icons/edit.svg';
import Envelope from './icons/envelope.svg';
import Error from './icons/error.svg';
import ErrorOutline from './icons/error-outline.svg';
import Eyes from './icons/eyes.svg';
import EyesClose from './icons/eyes-close.svg';
import Facebook from './icons/facebook.svg';
import File from './icons/file.svg';
import Filter from './icons/filter.svg';
import Folder from './icons/folder.svg';
import ForkLift from './icons/forklift.svg';
import Google from './icons/google.svg';
import GooglePay from './icons/google-pay.svg';
import Heart from './icons/heart.svg';
import Help from './icons/help.svg';
import Home from './icons/home.svg';
import Information from './icons/information.svg';
import Like from './icons/like.svg';
import ListView from './icons/list-view.svg';
import Lock from './icons/lock.svg';
import Map from './icons/map.svg';
import Minus from './icons/minus.svg';
import NotFound from './icons/not-found.svg';
import OnOff from './icons/on-off.svg';
import Paypal from './icons/paypal.svg';
import Pencil from './icons/pencil.svg';
import Phone from './icons/phone.svg';
import Question from './icons/question.svg';
import Search from './icons/search.svg';
import Secret from './icons/secret.svg';
import Settings from './icons/settings.svg';
import SignOut from './icons/signout.svg';
import Sortby from './icons/sortby.svg';
import Star from './icons/star.svg';
import StarOutline from './icons/star-outline.svg';
import Tick from './icons/tick.svg';
import TilesView from './icons/tiles-view.svg';
import Undo from './icons/undo.svg';
import User from './icons/user.svg';
import Users from './icons/users.svg';
import Repeat from './icons/repeat.svg';
import Timer from './icons/timer.svg';
import Tag from './icons/tag.svg';
import Today from './icons/today.svg';
import Warning from './icons/warning.svg';
import WarningOutline from './icons/warning-outline.svg';
import LShaped from './icons/l-shaped.svg';

import classnames from 'classnames';

export type Props = {
	as?: IconsType;
	size?: SizeType;
	color?: ColorType;
};

export const Icon = ({ as, size, color }: Props) => {
	const renderIcon = () => {
		switch (as) {
			case 'Add':
				return <Add />;
			case 'AngleDown':
				return <AngleDown />;
			case 'AngleLeft':
				return <AngleLeft />;
			case 'AngleRight':
				return <AngleRight />;
			case 'AnglesUp':
				return <AnglesUp />;
			case 'AngleUp':
				return <AngleUp />;
			case 'ApplePay':
				return <ApplePay />;
			case 'ArrowDown':
				return <ArrowDown />;
			case 'ArrowLeft':
				return <ArrowLeft />;
			case 'ArrowRight':
				return <ArrowRight />;
			case 'Bag':
				return <Bag />;
			case 'Bank':
				return <Bank />;
			case 'Bell':
				return <Bell />;
			case 'BellOutline':
				return <BellOutline />;
			case 'Bill':
				return <Bill />;
			case 'Bin':
				return <Bin />;
			case 'Block':
				return <Block />;
			case 'Bookmark':
				return <Bookmark />;
			case 'Burger':
				return <Burger />;
			case 'Calendar':
				return <Calendar />;
			case 'Camera':
				return <Camera />;
			case 'Card':
				return <Card />;
			case 'Chat':
				return <Chat />;
			case 'ChatHistory':
				return <ChatHistory />;
			case 'Clock':
				return <Clock />;
			case 'Cross':
				return <Cross />;
			case 'Download':
				return <Download />;
			case 'Dots':
				return <Dots />;
			case 'Dependent':
				return <Dependent />;
			case 'Edit':
				return <Edit />;
			case 'Envelope':
				return <Envelope />;
			case 'Error':
				return <Error />;
			case 'ErrorOutline':
				return <ErrorOutline />;
			case 'Eyes':
				return <Eyes />;
			case 'EyesClose':
				return <EyesClose />;
			case 'Facebook':
				return <Facebook />;
			case 'File':
				return <File />;
			case 'Filter':
				return <Filter />;
			case 'Folder':
				return <Folder />;
			case 'ForkLift':
				return <ForkLift />;
			case 'Google':
				return <Google />;
			case 'GooglePay':
				return <GooglePay />;
			case 'Heart':
				return <Heart />;
			case 'Help':
				return <Help />;
			case 'Home':
				return <Home />;
			case 'Information':
				return <Information />;
			case 'Like':
				return <Like />;
			case 'ListView':
				return <ListView />;
			case 'Lock':
				return <Lock />;
			case 'LShaped':
				return <LShaped />;
			case 'Map':
				return <Map />;
			case 'Minus':
				return <Minus />;
			case 'NotFound':
				return <NotFound />;
			case 'OnOff':
				return <OnOff />;
			case 'Paypal':
				return <Paypal />;
			case 'Pencil':
				return <Pencil />;
			case 'Phone':
				return <Phone />;
			case 'Question':
				return <Question />;
			case 'Search':
				return <Search />;
			case 'Secret':
				return <Secret />;
			case 'Settings':
				return <Settings />;
			case 'SignOut':
				return <SignOut />;
			case 'Sortby':
				return <Sortby />;
			case 'Star':
				return <Star />;
			case 'StarOutline':
				return <StarOutline />;
			case 'Tick':
				return <Tick />;
			case 'TilesView':
				return <TilesView />;
			case 'Undo':
				return <Undo />;
			case 'User':
				return <User />;
			case 'Users':
				return <Users />;
			case 'Repeat':
				return <Repeat />;
			case 'Timer':
				return <Timer />;
			case 'Tag':
				return <Tag />;
			case 'Today':
				return <Today />;
			case 'Warning':
				return <Warning />;
			case 'WarningOutline':
			default:
				return <WarningOutline />;
		}
	};

	const iconName = as?.toLowerCase() as string;
	const classNames = classnames({
		icon: true,
		[iconName]: iconName,
	});

	return (
		<Wrapper className={classNames} size={size} color={color}>
			{renderIcon()}
		</Wrapper>
	);
};

export default Icon;
