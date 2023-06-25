declare module '*.svg' {
	import { ReactElement, SVGProps } from 'react';
	const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
	const content: (props: SVGProps<SVGElement>) => ReactElement;

	export { ReactComponent };
	export default content;
}
