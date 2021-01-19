import { FC } from 'react';
import styled, { css } from 'styled-components';
import CloudSVG from './SVG/CloudSVG';
import Rain from './Rain';
import Storm from './Storm';

type CloudType = {
	left?: boolean;
	right?: boolean;
	getRain?: boolean;
	getCloudColor: 1 | 2 | 3;
	getStorm?: boolean;
};

const Cloud: FC<CloudType> = ({ left, right, getRain, getCloudColor, getStorm }) => {
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
	`;

	return (
		<CloudStyle>
			<CloudSVG getCloudColor={getCloudColor} />
			{getRain && <Rain />}
			{!left && !right && <Storm />}
		</CloudStyle>
	);
};

export default Cloud;
