import { FC } from 'react';
import { CloudType } from '../../../types/weatherIconsTypes';
import { CloudStyle, TimeOfDayStyle } from '../../../styles/components/weatherIcons/CloudStyles';
import CloudSVG from './CloudSVG';
import Rain from './Rain';
import Storm from './Storm';
import Sun from './Sun';
import Moon from './Moon';
import Snow from './Snow';
import Tornado from './Tornado';
import Fog from './Fog';

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
