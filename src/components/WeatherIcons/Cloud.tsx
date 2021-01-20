import { FC } from 'react';
import styled, { css } from 'styled-components';
import CloudSVG from './SVG/CloudSVG';
import Rain from './Rain';
import Storm from './Storm';
import Sun from './Sun';
import Moon from './Moon';
import Snow from './Snow';
import Tornado from './Tornado';

type CloudType = {
	left?: boolean;
	right?: boolean;
	getRain?: boolean;
	getCloudColor?: 1 | 2 | 3;
	getStorm?: boolean;
	timeOfDay?: 'day' | 'night';
	getSnow?: boolean;
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

const TimeOfDayStyle = styled.div`
	position: absolute;
	${({ timeOfDay }: CloudType) =>
		timeOfDay === 'day' &&
		css`
			top: -110px;
			right: -30px;
			transform: scale(0.8);
		`}
	${({ timeOfDay }: CloudType) =>
		timeOfDay === 'night' &&
		css`
			top: -150px;
			right: -40px;
			transform: scale(0.6);
		`}
	z-index: 10;
`;

const Cloud: FC<CloudType> = ({ left, right, getRain, getCloudColor, getStorm, timeOfDay, getSnow }) => (
	<CloudStyle left={left} right={right} getCloudColor={getCloudColor}>
		{!left && !right && timeOfDay === 'night' && (
			<TimeOfDayStyle timeOfDay={timeOfDay}>
				<Moon />
			</TimeOfDayStyle>
		)}

		{!left && !right && timeOfDay === 'day' && (
			<TimeOfDayStyle timeOfDay={timeOfDay}>
				<Sun />
			</TimeOfDayStyle>
		)}

		<CloudSVG getCloudColor={getCloudColor} />

		{getRain && <Rain />}
		{getStorm && <Storm />}
		{getSnow && <Snow />}
		{!left && !right && <Tornado />}
	</CloudStyle>
);

export default Cloud;
