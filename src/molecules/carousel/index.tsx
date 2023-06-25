import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import classNames from 'classnames';

import { Button, Icon } from 'atoms';

import { Inner, Item, Pagination, Wrapper } from './index.styles';
import { ChildrenType, RefType } from 'types';

type ItemProps = {
	children: ChildrenType;
};

export const CarouselItem = ({ children }: ItemProps) => {
	return <Item>{children}</Item>;
};

type Props = {
	children: ChildrenType;
	next?: ((val: boolean) => void) | undefined;
	onMove?: boolean;
};

const Carousel = ({ children, next, onMove = true }: Props) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const totalChildren = React.Children.count(children);
	const updateIndex = (newIndex: number) => {
		let updatedIndex = newIndex;
		if (newIndex < 0) {
			updatedIndex = totalChildren - 1;
		} else if (updatedIndex >= totalChildren) {
			updatedIndex = 0;
		}

		if (next) {
			next(updatedIndex === totalChildren - 1);
		}
		setActiveIndex(updatedIndex);
	};

	const handlers = useSwipeable({
		onSwipedLeft: () => updateIndex(activeIndex + 1),
		onSwipedRight: () => updateIndex(activeIndex - 1),
	});

	const ref = onMove ? handlers.ref : {};
	return (
		<Wrapper ref={ref as RefType} className="carousel">
			<Inner
				className="inner"
				style={{ transform: `translateX(-${activeIndex * 100}%)` }}
			>
				{React.Children.map(children, (child, index) => {
					return (
						<Item className={classNames({ active: index === activeIndex })}>
							{child}
						</Item>
					);
				})}
			</Inner>
			<Pagination className="unset">
				<li className="arrow">
					<Button
						onClick={() => {
							updateIndex(activeIndex - 1);
						}}
						disabled={activeIndex === 0}
						size="Medium"
						variant="round"
					>
						<Icon size="Medium" as="ArrowLeft" />
					</Button>
				</li>
				{React.Children.map(children, (child, index) => {
					return (
						<li
							className={`${index === activeIndex ? 'active dot' : 'dot'}`}
							onClick={() => {
								updateIndex(index);
							}}
							aria-hidden
						/>
					);
				})}

				<li className="arrow">
					<Button
						size="Medium"
						variant="round"
						onClick={() => {
							updateIndex(activeIndex + 1);
						}}
						disabled={activeIndex === totalChildren - 1}
					>
						<Icon size="Medium" as="ArrowRight" />
					</Button>
				</li>
			</Pagination>
		</Wrapper>
	);
};

export default Carousel;
