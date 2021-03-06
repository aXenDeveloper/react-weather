import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { SelectCloudType, WeatherIconType } from '../../types/weatherTypes';
import {
  WeatherIconStyle,
  WeatherSVGStyle
} from '../../styles/components/weather/WeatherIconStyle';
import Cloud from './icons/Cloud';
import Moon from './icons/Moon';
import Sun from './icons/Sun';
import Error from '../Error';

const WeatherIcon: FC<WeatherIconType> = ({ id, timeOfDay }) => {
  const { t } = useTranslation();

  const selectCloud = {
    cloud1: {
      rain: <Cloud getCloudColor={1} getRain />,
      rainAndStorm: <Cloud getCloudColor={1} getRain getStorm />,
      rainAndSnow: <Cloud getCloudColor={1} getRain getSnow />,
      storm: <Cloud getCloudColor={1} getStorm />,
      snow: <Cloud getCloudColor={1} getSnow />,
      fog: <Cloud getCloudColor={1} getFog />
    } as SelectCloudType,
    cloud2: {
      rain: <Cloud getCloudColor={2} getRain />,
      rainAndStorm: <Cloud getCloudColor={2} getRain getStorm />,
      rainAndSnow: <Cloud getCloudColor={2} getRain getSnow />,
      storm: <Cloud getCloudColor={2} getStorm />,
      snow: <Cloud getCloudColor={2} getSnow />,
      fog: <Cloud getCloudColor={2} getFog />
    } as SelectCloudType,
    cloud3: {
      rain: <Cloud getCloudColor={3} getRain />,
      rainAndStorm: <Cloud getCloudColor={3} getRain getStorm />,
      rainAndSnow: <Cloud getCloudColor={3} getRain getSnow />,
      storm: <Cloud getCloudColor={3} getStorm />,
      snow: <Cloud getCloudColor={3} getSnow />,
      fog: <Cloud getCloudColor={3} getFog />
    } as SelectCloudType
  };

  type selectWeatherInterface = {
    [key: number]: {
      [key: string]: JSX.Element;
    };
  };

  const selectWeather: selectWeatherInterface = {
    // Group 2xx: Thunderstorm
    200: {
      d: selectCloud.cloud1.rainAndStorm,
      n: selectCloud.cloud1.rainAndStorm
    },
    201: {
      d: selectCloud.cloud2.rainAndStorm,
      n: selectCloud.cloud2.rainAndStorm
    },
    202: {
      d: selectCloud.cloud3.rainAndStorm,
      n: selectCloud.cloud3.rainAndStorm
    },

    210: {
      d: <Cloud getCloudColor={1} timeOfDay="day" getStorm />,
      n: <Cloud getCloudColor={1} timeOfDay="night" getStorm />
    },

    211: {
      d: selectCloud.cloud1.storm,
      n: selectCloud.cloud1.storm
    },
    212: {
      d: selectCloud.cloud2.storm,
      n: selectCloud.cloud2.storm
    },
    221: {
      d: selectCloud.cloud3.storm,
      n: selectCloud.cloud3.storm
    },
    230: {
      d: selectCloud.cloud1.rainAndStorm,
      n: selectCloud.cloud1.rainAndStorm
    },
    231: {
      d: selectCloud.cloud2.rainAndStorm,
      n: selectCloud.cloud2.rainAndStorm
    },
    232: {
      d: selectCloud.cloud3.rainAndStorm,
      n: selectCloud.cloud3.rainAndStorm
    },

    // Group 3xx: Drizzle
    300: {
      d: selectCloud.cloud1.rain,
      n: selectCloud.cloud1.rain
    },
    301: {
      d: selectCloud.cloud2.rain,
      n: selectCloud.cloud2.rain
    },
    302: {
      d: selectCloud.cloud3.rain,
      n: selectCloud.cloud3.rain
    },
    310: {
      d: selectCloud.cloud1.rain,
      n: selectCloud.cloud1.rain
    },
    311: {
      d: selectCloud.cloud2.rain,
      n: selectCloud.cloud2.rain
    },
    312: {
      d: selectCloud.cloud1.rain,
      n: selectCloud.cloud1.rain
    },
    313: {
      d: selectCloud.cloud1.rain,
      n: selectCloud.cloud1.rain
    },
    314: {
      d: selectCloud.cloud2.rain,
      n: selectCloud.cloud2.rain
    },
    321: {
      d: selectCloud.cloud3.rain,
      n: selectCloud.cloud3.rain
    },

    // Group 5xx: Rain
    500: {
      d: <Cloud getCloudColor={1} timeOfDay="day" getRain />,
      n: <Cloud getCloudColor={1} timeOfDay="night" getRain />
    },
    501: {
      d: <Cloud getCloudColor={1} timeOfDay="day" getRain />,
      n: <Cloud getCloudColor={1} timeOfDay="night" getRain />
    },
    502: {
      d: <Cloud getCloudColor={2} timeOfDay="day" getRain />,
      n: <Cloud getCloudColor={2} timeOfDay="night" getRain />
    },
    503: {
      d: <Cloud getCloudColor={3} timeOfDay="day" getRain />,
      n: <Cloud getCloudColor={3} timeOfDay="night" getRain />
    },
    504: {
      d: <Cloud getCloudColor={3} timeOfDay="day" getRain />,
      n: <Cloud getCloudColor={3} timeOfDay="night" getRain />
    },

    511: {
      d: selectCloud.cloud2.rainAndSnow,
      n: selectCloud.cloud2.rainAndSnow
    },
    520: {
      d: selectCloud.cloud1.rain,
      n: selectCloud.cloud1.rain
    },
    521: {
      d: selectCloud.cloud2.rain,
      n: selectCloud.cloud2.rain
    },
    522: {
      d: selectCloud.cloud3.rain,
      n: selectCloud.cloud3.rain
    },
    531: {
      d: selectCloud.cloud3.rain,
      n: selectCloud.cloud3.rain
    },

    // Group 6xx: Snow
    600: {
      d: selectCloud.cloud1.snow,
      n: selectCloud.cloud1.snow
    },
    601: {
      d: selectCloud.cloud2.snow,
      n: selectCloud.cloud2.snow
    },
    602: {
      d: selectCloud.cloud3.snow,
      n: selectCloud.cloud3.snow
    },
    611: {
      d: <Cloud getCloudColor={1} timeOfDay="day" getSnow />,
      n: <Cloud getCloudColor={1} timeOfDay="night" getSnow />
    },
    612: {
      d: selectCloud.cloud1.snow,
      n: selectCloud.cloud1.snow
    },
    613: {
      d: selectCloud.cloud2.snow,
      n: selectCloud.cloud2.snow
    },
    615: {
      d: selectCloud.cloud1.rainAndSnow,
      n: selectCloud.cloud1.rainAndSnow
    },
    616: {
      d: selectCloud.cloud2.rainAndSnow,
      n: selectCloud.cloud2.rainAndSnow
    },
    620: {
      d: selectCloud.cloud1.snow,
      n: selectCloud.cloud1.snow
    },
    621: {
      d: selectCloud.cloud2.snow,
      n: selectCloud.cloud2.snow
    },
    622: {
      d: selectCloud.cloud3.snow,
      n: selectCloud.cloud3.snow
    },

    // Group 7xx: Atmosphere
    701: {
      d: selectCloud.cloud1.fog,
      n: selectCloud.cloud1.fog
    },
    711: {
      d: selectCloud.cloud2.fog,
      n: selectCloud.cloud2.fog
    },
    721: {
      d: selectCloud.cloud2.fog,
      n: selectCloud.cloud2.fog
    },
    731: {
      d: selectCloud.cloud2.fog,
      n: selectCloud.cloud2.fog
    },
    741: {
      d: selectCloud.cloud1.fog,
      n: selectCloud.cloud1.fog
    },
    751: {
      d: selectCloud.cloud2.fog,
      n: selectCloud.cloud2.fog
    },
    761: {
      d: selectCloud.cloud2.fog,
      n: selectCloud.cloud2.fog
    },
    762: {
      d: selectCloud.cloud3.fog,
      n: selectCloud.cloud3.fog
    },
    771: {
      d: selectCloud.cloud3.fog,
      n: selectCloud.cloud3.fog
    },
    781: {
      d: <Cloud getCloudColor={3} getTornado />,
      n: <Cloud getCloudColor={3} getTornado />
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
      d: <Cloud getCloudColor={1} timeOfDay="day" />,
      n: <Cloud getCloudColor={1} timeOfDay="night" />
    },
    803: {
      d: <Cloud getCloudColor={2} />,
      n: <Cloud getCloudColor={2} />
    },
    804: {
      d: <Cloud getCloudColor={3} />,
      n: <Cloud getCloudColor={3} />
    }
  };

  if (selectWeather[id][timeOfDay])
    return (
      <WeatherIconStyle>
        <WeatherSVGStyle>{selectWeather[id][timeOfDay]}</WeatherSVGStyle>
      </WeatherIconStyle>
    );

  return <Error code={404}>{t('error_404_weatherIcon')}</Error>;
};

export default WeatherIcon;
