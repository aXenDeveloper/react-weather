import React, { FC } from 'react';
import Cloud from './WeatherIcons/Cloud';
import Moon from './WeatherIcons/Moon';
import Sun from './WeatherIcons/Sun';

type WeatherIconType = {
	weatherID: number;
	weatherIcon: string;
};

const WeatherIcon: FC<WeatherIconType> = ({ weatherID, weatherIcon }) => {
	const selectWeather = {
		// Group 2xx: Thunderstorm
		200: {
			d: (
				<>
					<Cloud left getCloudColor={1} getRain getStorm />
					<Cloud getCloudColor={1} getRain getStorm />
					<Cloud right getCloudColor={1} getRain getStorm />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={1} getRain getStorm />
					<Cloud getCloudColor={1} getRain getStorm />
					<Cloud right getCloudColor={1} getRain getStorm />
				</>
			)
		},
		201: {
			d: (
				<>
					<Cloud left getCloudColor={2} getRain getStorm />
					<Cloud getCloudColor={2} getRain getStorm />
					<Cloud right getCloudColor={2} getRain getStorm />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={2} getRain getStorm />
					<Cloud getCloudColor={2} getRain getStorm />
					<Cloud right getCloudColor={2} getRain getStorm />
				</>
			)
		},
		202: {
			d: (
				<>
					<Cloud left getCloudColor={3} getRain getStorm />
					<Cloud getCloudColor={3} getRain getStorm />
					<Cloud right getCloudColor={3} getRain getStorm />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={3} getRain getStorm />
					<Cloud getCloudColor={3} getRain getStorm />
					<Cloud right getCloudColor={3} getRain getStorm />
				</>
			)
		},
		210: {
			d: (
				<>
					<Cloud left getCloudColor={1} />
					<Cloud getCloudColor={1} timeOfDay="day" getStorm />
					<Cloud right getCloudColor={1} />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={1} />
					<Cloud getCloudColor={1} timeOfDay="night" getStorm />
					<Cloud right getCloudColor={1} />
				</>
			)
		},
		211: {
			d: (
				<>
					<Cloud left getCloudColor={1} getStorm />
					<Cloud getCloudColor={1} getStorm />
					<Cloud right getCloudColor={1} getStorm />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={1} getStorm />
					<Cloud getCloudColor={1} getStorm />
					<Cloud right getCloudColor={1} getStorm />
				</>
			)
		},
		212: {
			d: (
				<>
					<Cloud left getCloudColor={2} getStorm />
					<Cloud getCloudColor={2} getStorm />
					<Cloud right getCloudColor={2} getStorm />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={2} getStorm />
					<Cloud getCloudColor={2} getStorm />
					<Cloud right getCloudColor={2} getStorm />
				</>
			)
		},
		221: {
			d: (
				<>
					<Cloud left getCloudColor={3} getStorm />
					<Cloud getCloudColor={3} getStorm />
					<Cloud right getCloudColor={3} getStorm />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={3} getStorm />
					<Cloud getCloudColor={3} getStorm />
					<Cloud right getCloudColor={3} getStorm />
				</>
			)
		},
		230: {
			d: (
				<>
					<Cloud left getCloudColor={1} getRain getStorm />
					<Cloud getCloudColor={1} getRain getStorm />
					<Cloud right getCloudColor={1} getRain getStorm />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={1} getRain getStorm />
					<Cloud getCloudColor={1} getRain getStorm />
					<Cloud right getCloudColor={1} getRain getStorm />
				</>
			)
		},
		231: {
			d: (
				<>
					<Cloud left getCloudColor={2} getRain getStorm />
					<Cloud getCloudColor={2} getRain getStorm />
					<Cloud right getCloudColor={2} getRain getStorm />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={2} getRain getStorm />
					<Cloud getCloudColor={2} getRain getStorm />
					<Cloud right getCloudColor={2} getRain getStorm />
				</>
			)
		},
		232: {
			d: (
				<>
					<Cloud left getCloudColor={3} getRain getStorm />
					<Cloud getCloudColor={3} getRain getStorm />
					<Cloud right getCloudColor={3} getRain getStorm />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={3} getRain getStorm />
					<Cloud getCloudColor={3} getRain getStorm />
					<Cloud right getCloudColor={3} getRain getStorm />
				</>
			)
		},

		// Group 3xx: Drizzle
		300: {
			d: (
				<>
					<Cloud left getCloudColor={1} getRain />
					<Cloud getCloudColor={1} getRain />
					<Cloud right getCloudColor={1} getRain />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={1} getRain />
					<Cloud getCloudColor={1} getRain />
					<Cloud right getCloudColor={1} getRain />
				</>
			)
		},
		301: {
			d: (
				<>
					<Cloud left getCloudColor={2} getRain />
					<Cloud getCloudColor={2} getRain />
					<Cloud right getCloudColor={2} getRain />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={2} getRain />
					<Cloud getCloudColor={2} getRain />
					<Cloud right getCloudColor={2} getRain />
				</>
			)
		},
		302: {
			d: (
				<>
					<Cloud left getCloudColor={3} getRain />
					<Cloud getCloudColor={3} getRain />
					<Cloud right getCloudColor={3} getRain />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={3} getRain />
					<Cloud getCloudColor={3} getRain />
					<Cloud right getCloudColor={3} getRain />
				</>
			)
		},
		310: {
			d: (
				<>
					<Cloud left getCloudColor={1} getRain />
					<Cloud getCloudColor={1} getRain />
					<Cloud right getCloudColor={1} getRain />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={1} getRain />
					<Cloud getCloudColor={1} getRain />
					<Cloud right getCloudColor={1} getRain />
				</>
			)
		},
		311: {
			d: (
				<>
					<Cloud left getCloudColor={2} getRain />
					<Cloud getCloudColor={2} getRain />
					<Cloud right getCloudColor={2} getRain />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={2} getRain />
					<Cloud getCloudColor={2} getRain />
					<Cloud right getCloudColor={2} getRain />
				</>
			)
		},
		312: {
			d: (
				<>
					<Cloud left getCloudColor={3} getRain />
					<Cloud getCloudColor={3} getRain />
					<Cloud right getCloudColor={3} getRain />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={3} getRain />
					<Cloud getCloudColor={3} getRain />
					<Cloud right getCloudColor={3} getRain />
				</>
			)
		},
		313: {
			d: (
				<>
					<Cloud left getCloudColor={3} getRain />
					<Cloud getCloudColor={3} getRain />
					<Cloud right getCloudColor={3} getRain />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={3} getRain />
					<Cloud getCloudColor={3} getRain />
					<Cloud right getCloudColor={3} getRain />
				</>
			)
		},
		314: {
			d: (
				<>
					<Cloud left getCloudColor={3} getRain />
					<Cloud getCloudColor={3} getRain />
					<Cloud right getCloudColor={3} getRain />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={3} getRain />
					<Cloud getCloudColor={3} getRain />
					<Cloud right getCloudColor={3} getRain />
				</>
			)
		},
		321: {
			d: (
				<>
					<Cloud left getCloudColor={3} getRain />
					<Cloud getCloudColor={3} getRain />
					<Cloud right getCloudColor={3} getRain />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={3} getRain />
					<Cloud getCloudColor={3} getRain />
					<Cloud right getCloudColor={3} getRain />
				</>
			)
		},

		// Group 5xx: Rain
		500: {
			d: (
				<>
					<Cloud left getCloudColor={1} getRain />
					<Cloud getCloudColor={1} timeOfDay="day" getRain />
					<Cloud right getCloudColor={1} getRain />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={1} getRain />
					<Cloud getCloudColor={1} timeOfDay="night" getRain />
					<Cloud right getCloudColor={1} getRain />
				</>
			)
		},
		501: {
			d: (
				<>
					<Cloud left getCloudColor={1} getRain />
					<Cloud getCloudColor={1} timeOfDay="day" getRain />
					<Cloud right getCloudColor={1} getRain />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={1} getRain />
					<Cloud getCloudColor={1} timeOfDay="night" getRain />
					<Cloud right getCloudColor={1} getRain />
				</>
			)
		},
		502: {
			d: (
				<>
					<Cloud left getCloudColor={2} getRain />
					<Cloud getCloudColor={2} timeOfDay="day" getRain />
					<Cloud right getCloudColor={2} getRain />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={2} getRain />
					<Cloud getCloudColor={2} timeOfDay="night" getRain />
					<Cloud right getCloudColor={2} getRain />
				</>
			)
		},
		503: {
			d: (
				<>
					<Cloud left getCloudColor={3} getRain />
					<Cloud getCloudColor={3} timeOfDay="day" getRain />
					<Cloud right getCloudColor={3} getRain />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={3} getRain />
					<Cloud getCloudColor={3} timeOfDay="night" getRain />
					<Cloud right getCloudColor={3} getRain />
				</>
			)
		},
		504: {
			d: (
				<>
					<Cloud left getCloudColor={3} getRain />
					<Cloud getCloudColor={3} timeOfDay="day" getRain />
					<Cloud right getCloudColor={3} getRain />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={3} getRain />
					<Cloud getCloudColor={3} timeOfDay="night" getRain />
					<Cloud right getCloudColor={3} getRain />
				</>
			)
		},
		511: {
			d: (
				<>
					<Cloud left getCloudColor={2} getRain getSnow />
					<Cloud getCloudColor={2} getRain getSnow />
					<Cloud right getCloudColor={2} getRain getSnow />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={2} getRain getSnow />
					<Cloud getCloudColor={2} getRain getSnow />
					<Cloud right getCloudColor={2} getRain getSnow />
				</>
			)
		},
		520: {
			d: (
				<>
					<Cloud left getCloudColor={1} getRain />
					<Cloud getCloudColor={1} getRain />
					<Cloud right getCloudColor={1} getRain />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={1} getRain />
					<Cloud getCloudColor={1} getRain />
					<Cloud right getCloudColor={1} getRain />
				</>
			)
		},
		521: {
			d: (
				<>
					<Cloud left getCloudColor={2} getRain />
					<Cloud getCloudColor={2} getRain />
					<Cloud right getCloudColor={2} getRain />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={2} getRain />
					<Cloud getCloudColor={2} getRain />
					<Cloud right getCloudColor={2} getRain />
				</>
			)
		},
		522: {
			d: (
				<>
					<Cloud left getCloudColor={3} getRain />
					<Cloud getCloudColor={3} getRain />
					<Cloud right getCloudColor={3} getRain />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={3} getRain />
					<Cloud getCloudColor={3} getRain />
					<Cloud right getCloudColor={3} getRain />
				</>
			)
		},
		531: {
			d: (
				<>
					<Cloud left getCloudColor={3} getRain />
					<Cloud getCloudColor={3} getRain />
					<Cloud right getCloudColor={3} getRain />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={3} getRain />
					<Cloud getCloudColor={3} getRain />
					<Cloud right getCloudColor={3} getRain />
				</>
			)
		},

		// Group 6xx: Snow
		600: {
			d: (
				<>
					<Cloud left getCloudColor={1} getSnow />
					<Cloud getCloudColor={1} getSnow />
					<Cloud right getCloudColor={1} getSnow />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={1} getSnow />
					<Cloud getCloudColor={1} getSnow />
					<Cloud right getCloudColor={1} getSnow />
				</>
			)
		},
		601: {
			d: (
				<>
					<Cloud left getCloudColor={2} getSnow />
					<Cloud getCloudColor={2} getSnow />
					<Cloud right getCloudColor={2} getSnow />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={2} getSnow />
					<Cloud getCloudColor={2} getSnow />
					<Cloud right getCloudColor={2} getSnow />
				</>
			)
		},
		602: {
			d: (
				<>
					<Cloud left getCloudColor={3} getSnow />
					<Cloud getCloudColor={3} getSnow />
					<Cloud right getCloudColor={3} getSnow />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={3} getSnow />
					<Cloud getCloudColor={3} getSnow />
					<Cloud right getCloudColor={3} getSnow />
				</>
			)
		},
		611: {
			d: (
				<>
					<Cloud left getCloudColor={1} getSnow />
					<Cloud getCloudColor={1} timeOfDay="day" getSnow />
					<Cloud right getCloudColor={1} getSnow />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={1} getSnow />
					<Cloud getCloudColor={1} timeOfDay="night" getSnow />
					<Cloud right getCloudColor={1} getSnow />
				</>
			)
		},
		612: {
			d: (
				<>
					<Cloud left getCloudColor={1} getSnow />
					<Cloud getCloudColor={1} getSnow />
					<Cloud right getCloudColor={1} getSnow />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={1} getSnow />
					<Cloud getCloudColor={1} getSnow />
					<Cloud right getCloudColor={1} getSnow />
				</>
			)
		},
		613: {
			d: (
				<>
					<Cloud left getCloudColor={2} getSnow />
					<Cloud getCloudColor={2} getSnow />
					<Cloud right getCloudColor={2} getSnow />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={1} getSnow />
					<Cloud getCloudColor={1} getSnow />
					<Cloud right getCloudColor={1} getSnow />
				</>
			)
		},
		615: {
			d: (
				<>
					<Cloud left getCloudColor={1} getSnow getRain />
					<Cloud getCloudColor={1} getSnow getRain />
					<Cloud right getCloudColor={1} getSnow getRain />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={1} getSnow getRain />
					<Cloud getCloudColor={1} getSnow getRain />
					<Cloud right getCloudColor={1} getSnow getRain />
				</>
			)
		},
		616: {
			d: (
				<>
					<Cloud left getCloudColor={2} getSnow getRain />
					<Cloud getCloudColor={2} getSnow getRain />
					<Cloud right getCloudColor={2} getSnow getRain />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={2} getSnow getRain />
					<Cloud getCloudColor={2} getSnow getRain />
					<Cloud right getCloudColor={2} getSnow getRain />
				</>
			)
		},
		620: {
			d: (
				<>
					<Cloud left getCloudColor={1} getSnow />
					<Cloud getCloudColor={1} getSnow />
					<Cloud right getCloudColor={1} getSnow />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={1} getSnow />
					<Cloud getCloudColor={1} getSnow />
					<Cloud right getCloudColor={1} getSnow />
				</>
			)
		},
		621: {
			d: (
				<>
					<Cloud left getCloudColor={2} getSnow />
					<Cloud getCloudColor={2} getSnow />
					<Cloud right getCloudColor={2} getSnow />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={2} getSnow />
					<Cloud getCloudColor={2} getSnow />
					<Cloud right getCloudColor={2} getSnow />
				</>
			)
		},
		622: {
			d: (
				<>
					<Cloud left getCloudColor={3} getSnow />
					<Cloud getCloudColor={3} getSnow />
					<Cloud right getCloudColor={3} getSnow />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={3} getSnow />
					<Cloud getCloudColor={3} getSnow />
					<Cloud right getCloudColor={3} getSnow />
				</>
			)
		},

		// Group 7xx: Atmosphere
		701: {
			d: (
				<>
					<Cloud left getCloudColor={1} />
					<Cloud getCloudColor={1} getFog />
					<Cloud right getCloudColor={1} />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={1} />
					<Cloud getCloudColor={1} getFog />
					<Cloud right getCloudColor={1} />
				</>
			)
		},
		711: {
			d: (
				<>
					<Cloud left getCloudColor={1} />
					<Cloud getCloudColor={1} getFog />
					<Cloud right getCloudColor={1} />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={1} />
					<Cloud getCloudColor={1} getFog />
					<Cloud right getCloudColor={1} />
				</>
			)
		},
		721: {
			d: (
				<>
					<Cloud left getCloudColor={1} />
					<Cloud getCloudColor={1} getFog />
					<Cloud right getCloudColor={1} />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={1} />
					<Cloud getCloudColor={1} getFog />
					<Cloud right getCloudColor={1} />
				</>
			)
		},
		731: {
			d: (
				<>
					<Cloud left getCloudColor={1} />
					<Cloud getCloudColor={1} getFog />
					<Cloud right getCloudColor={1} />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={1} />
					<Cloud getCloudColor={1} getFog />
					<Cloud right getCloudColor={1} />
				</>
			)
		},
		741: {
			d: (
				<>
					<Cloud left getCloudColor={1} />
					<Cloud getCloudColor={1} getFog />
					<Cloud right getCloudColor={1} />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={1} />
					<Cloud getCloudColor={1} getFog />
					<Cloud right getCloudColor={1} />
				</>
			)
		},
		751: {
			d: (
				<>
					<Cloud left getCloudColor={1} />
					<Cloud getCloudColor={1} getFog />
					<Cloud right getCloudColor={1} />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={1} />
					<Cloud getCloudColor={1} getFog />
					<Cloud right getCloudColor={1} />
				</>
			)
		},
		761: {
			d: (
				<>
					<Cloud left getCloudColor={1} />
					<Cloud getCloudColor={1} getFog />
					<Cloud right getCloudColor={1} />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={1} />
					<Cloud getCloudColor={1} getFog />
					<Cloud right getCloudColor={1} />
				</>
			)
		},
		762: {
			d: (
				<>
					<Cloud left getCloudColor={1} />
					<Cloud getCloudColor={1} getFog />
					<Cloud right getCloudColor={1} />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={1} />
					<Cloud getCloudColor={1} getFog />
					<Cloud right getCloudColor={1} />
				</>
			)
		},
		771: {
			d: (
				<>
					<Cloud left getCloudColor={1} />
					<Cloud getCloudColor={1} getFog />
					<Cloud right getCloudColor={1} />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={1} />
					<Cloud getCloudColor={1} getFog />
					<Cloud right getCloudColor={1} />
				</>
			)
		},
		781: {
			d: (
				<>
					<Cloud left getCloudColor={3} />
					<Cloud getCloudColor={3} getTornado />
					<Cloud right getCloudColor={3} />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={3} />
					<Cloud getCloudColor={3} getTornado />
					<Cloud right getCloudColor={3} />
				</>
			)
		},

		// Group 800: Clear
		800: {
			d: <Sun />,
			n: <Moon />
		},

		// Group 80x: Clouds
		801: {
			d: <Cloud getCloudColor={1} timeOfDay="day" />,
			n: <Cloud getCloudColor={1} timeOfDay="night" />
		},
		802: {
			d: (
				<>
					<Cloud left getCloudColor={1} />
					<Cloud getCloudColor={1} timeOfDay="day" />
					<Cloud right getCloudColor={1} />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={1} />
					<Cloud getCloudColor={1} timeOfDay="night" />
					<Cloud right getCloudColor={1} />
				</>
			)
		},
		803: {
			d: (
				<>
					<Cloud left getCloudColor={2} />
					<Cloud getCloudColor={2} />
					<Cloud right getCloudColor={2} />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={2} />
					<Cloud getCloudColor={2} />
					<Cloud right getCloudColor={2} />
				</>
			)
		},
		804: {
			d: (
				<>
					<Cloud left getCloudColor={3} />
					<Cloud getCloudColor={3} />
					<Cloud right getCloudColor={3} />
				</>
			),
			n: (
				<>
					<Cloud left getCloudColor={3} />
					<Cloud getCloudColor={3} />
					<Cloud right getCloudColor={3} />
				</>
			)
		}
	};

	return (
		<div className="weather_icon">
			<div className="weather_svg">{selectWeather[701]['d']}</div>
		</div>
	);
};

export default WeatherIcon;
