import { FC } from 'react';
import styled, { css } from 'styled-components';

type CloudSVGType = {
	getCloudColor?: 1 | 2 | 3;
};

const CloudSVGStyle = styled.svg`
	width: 465px;
	height: 289px;
	position: relative;
	z-index: 10;

	path {
		${({ getCloudColor }: CloudSVGType) =>
			getCloudColor === 1 &&
			css`
				fill: #fff;
			`}
		${({ getCloudColor }: CloudSVGType) =>
			getCloudColor === 2 &&
			css`
				fill: #9c9c9c;
			`}
		${({ getCloudColor }: CloudSVGType) =>
			getCloudColor === 3 &&
			css`
				fill: #333333;
			`}
	}
`;

const CloudSVG: FC<CloudSVGType> = ({ getCloudColor }) => (
	<CloudSVGStyle getCloudColor={getCloudColor} xmlns="http://www.w3.org/2000/svg">
		<path d="m375.835938 112.957031c-5.851563 0-11.691407.582031-17.425782 1.742188-4.324218-21.582031-18.304687-39.992188-37.933594-49.957031-19.625-9.964844-42.738281-10.382813-62.714843-1.136719-18.078125-49.796875-73.101563-75.507813-122.898438-57.429688s-75.507812 73.105469-57.429687 122.898438c-43.621094 1.378906-78.078125 37.484375-77.4257815 81.121093.6562495 43.640626 36.1835935 78.691407 79.8281255 78.761719h296c48.597656 0 88-39.398437 88-88 0-48.601562-39.402344-88-88-88zm0 0" />
	</CloudSVGStyle>
);

export default CloudSVG;
