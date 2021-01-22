import { FC } from 'react';
import styled, { css } from 'styled-components';
import CloudSVG from './CloudSVG';
import Rain from './Rain';
import Storm from './Storm';
import Sun from './Sun';
import Moon from './Moon';
import Snow from './Snow';
import Tornado from './Tornado';
import Fog from './Fog';

type CloudType = {
	getRain?: boolean;
	getCloudColor?: 1 | 2 | 3;
	getStorm?: boolean;
	timeOfDay?: 'day' | 'night';
	getSnow?: boolean;
	getTornado?: boolean;
	getFog?: boolean;
};

type cloudPosition = {
	left?: boolean;
	right?: boolean;
};

const CloudStyle = styled.div`
	${({ left }: cloudPosition) =>
		left &&
		css`
			position: absolute;
			transform: translateX(-235px) scale(0.68);
			opacity: 0.5;
			animation: cloud_left 20s ease infinite;
			top: 0;
			left: 0;
		`}

	${({ right }: cloudPosition) =>
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
			top: -50px;
			right: -50px;
			transform: scale(0.7);
		`}
	${({ timeOfDay }: CloudType) =>
		timeOfDay === 'night' &&
		css`
			top: -80px;
			right: -70px;
			transform: scale(0.5);
		`}
	z-index: 9;
`;

const Cloud: FC<CloudType> = ({ getRain, getCloudColor, getStorm, timeOfDay, getSnow, getTornado, getFog }) => (
	<>
		<CloudStyle left>
			<CloudSVG getCloudColor={getCloudColor} />

			{getRain && <Rain />}
			{getSnow && <Snow />}
		</CloudStyle>

		<CloudStyle>
			<CloudSVG getCloudColor={getCloudColor} />

			{timeOfDay === 'night' && (
				<TimeOfDayStyle timeOfDay={timeOfDay}>
					<Moon />
				</TimeOfDayStyle>
			)}
			{timeOfDay === 'day' && (
				<TimeOfDayStyle timeOfDay={timeOfDay}>
					<Sun />
				</TimeOfDayStyle>
			)}

			{getRain && <Rain />}
			{getSnow && <Snow />}

			{getStorm && <Storm />}
			{getTornado && <Tornado />}
			{getFog && <Fog />}
		</CloudStyle>

		<CloudStyle right>
			<CloudSVG getCloudColor={getCloudColor} />

			{getRain && <Rain />}
			{getSnow && <Snow />}
		</CloudStyle>
	</>
);

export default Cloud;
