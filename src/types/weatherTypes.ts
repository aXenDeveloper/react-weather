import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type SelectCloudType = {
  rain: JSX.Element;
  storm: JSX.Element;
  rainAndStorm: JSX.Element;
  rainAndSnow: JSX.Element;
  snow: JSX.Element;
  fog: JSX.Element;
};

export type WeatherInfoBoxType = {
  title(t: string): string;
  icon: IconDefinition;
  rotate?: number;
};

export type WeatherUnitsType = {
  column?: boolean;
};
