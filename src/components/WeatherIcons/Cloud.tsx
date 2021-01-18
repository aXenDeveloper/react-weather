import { FC } from 'react';
import styled, { css } from 'styled-components';
import CloudSVG from './SVG/CloudSVG';
import Rain from './Rain';

type CloudType = {
	left?: boolean;
	right?: boolean;
	getRain?: boolean;
	getCloudColor: 1 | 2 | 3;
};

const Cloud: FC<CloudType> = ({ left, right, getRain, getCloudColor }) => {
	const CloudStyle = styled.div`
		${left &&
		css`
			position: absolute;
			transform: translateX(-235px) scale(0.68);
			opacity: 0.5;
			animation: cloud_left 20s ease infinite;
			top: 0;
			left: 0;
		`}

		${right &&
		css`
			position: absolute;
			transform: translateX(235px) scale(0.68) rotateY(180deg);
			opacity: 0.5;
			animation: cloud_right 20s ease infinite;
			top: 0;
			left: 0;
		`}

		svg {
			position: relative;
			z-index: 10;

			path {
				${getCloudColor === 1 &&
				css`
					fill: #fff;
				`}
				${getCloudColor === 2 &&
				css`
					fill: #9c9c9c;
				`}
				${getCloudColor === 3 &&
				css`
					fill: #333333;
				`}
			}
		}
	`;

	return (
		<CloudStyle>
			<CloudSVG />
			{getRain && <Rain />}
		</CloudStyle>
	);
};

export default Cloud;
