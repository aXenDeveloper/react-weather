import { FC } from 'react';
import styled, { css } from 'styled-components';
import CloudSVG from './SVG/CloudSVG';
import Rain from './Rain';
import Storm from './Storm';
import MoonSVG from './SVG/MoonSVG';

type CloudType = {
	left?: boolean;
	right?: boolean;
	getRain?: boolean;
	getCloudColor?: 1 | 2 | 3;
	getStorm?: boolean;
	timeOfDay?: 'day' | 'night';
};

const CloudStyle = styled.div`
	${({ left }: CloudType) =>
		left &&
		css`
			position: absolute;
			transform: translateX(-235px) scale(0.68);
			opacity: 0.5;
			animation: cloud_left 20s ease infinite;
			top: 0;
			left: 0;
		`}

	${({ right }: CloudType) =>
		right &&
		css`
			position: absolute;
			transform: translateX(235px) scale(0.68) rotateY(180deg);
			opacity: 0.5;
			animation: cloud_right 20s ease infinite;
			top: 0;
			left: 0;
		`}
`;

const MoonStyle = styled.div`
	position: absolute;
	top: -140px;
	right: -65px;
	transform: scale(0.7);
	z-index: 10;
`;

const Cloud: FC<CloudType> = ({ left, right, getRain, getCloudColor, getStorm, timeOfDay }) => {
	return (
		<CloudStyle left={left} right={right} getCloudColor={getCloudColor}>
			{!left && !right && timeOfDay === 'night' && (
				<MoonStyle>
					<MoonSVG />
				</MoonStyle>
			)}
			<CloudSVG getCloudColor={getCloudColor} />
			{getRain && <Rain />}
			{!left && !right && getStorm && <Storm />}
		</CloudStyle>
	);
};

export default Cloud;
