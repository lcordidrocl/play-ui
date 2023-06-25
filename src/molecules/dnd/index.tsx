import { useRef, useState } from 'react';
import { difference } from 'underscore';
import { DragType } from 'types';

type Props = {
	list: { id: string; title: string; position: number }[];
};

const initialState = [
	{ id: '1', title: 'Title: 10', position: 10 },
	{ id: '2', title: 'Title: 11', position: 11 },
	{ id: '3', title: 'Title: 12', position: 12 },
	{ id: '4', title: 'Title: 13', position: 13 },
	{ id: '5', title: 'Title: 14', position: 14 },
	{ id: '6', title: 'Title: 15', position: 15 },
	{ id: '7', title: 'Title: 16', position: 16 },
	{ id: '8', title: 'Title: 17', position: 17 },
	{ id: '9', title: 'Title: 18', position: 18 },
	{ id: '10', title: 'Title: 19', position: 19 },
];

export function DND({ list = initialState }: Props) {
	const draggingItem = useRef<number>(0);
	const dragOverItem = useRef<number>(0);
	const [data, setData] = useState(list);

	const handleDragStart = (e: DragType, position: number) => {
		draggingItem.current = position;
	};
	const handleDragEnter = (e: DragType, position: number) => {
		dragOverItem.current = position;

		const listCopy = data.map((item) => {
			if (item.position === draggingItem.current) {
				return { ...item, position: dragOverItem.current };
			}
			if (item.position === dragOverItem.current) {
				return { ...item, position: draggingItem.current };
			}
			return item;
		});

		draggingItem.current = dragOverItem.current;

		dragOverItem.current = 0;

		setData(listCopy);
	};

	const handleEnd = (e: DragType) => {
		const findDiff = difference(data, list);
	};

	const sorted = data.sort((a, b) => a.position - b.position);
	return (
		<div>
			{!!sorted.length &&
				sorted.map((item, index) => (
					<div
						key={index}
						draggable
						onDragOver={(e) => e.preventDefault()}
						onDragStart={(e) => handleDragStart(e, item.position)}
						onDragEnter={(e) => handleDragEnter(e, item.position)}
						onDragEnd={(e) => handleEnd(e)}
					>
						{item?.title} - {item?.position}
					</div>
				))}
		</div>
	);
}

export default DND;
