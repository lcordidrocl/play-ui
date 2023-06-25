import { Wrapper } from './index.styles';

type Props = {
	src: string;
	width?: number;
	height?: number;
	alt: string;
};

export function Img({ src, width, height, alt }: Props) {
	return <Wrapper src={src} width={width} height={height} alt={alt} />;
}

export default Img;
