import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type ForecastItemType = {
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
    feels_like: number;
    temp_max: number;
    temp_min: number;
    pressure: number;
    humidity: number;
  };
  weather: {
    [key: number]: {
      id: number;
      icon: string;
      description: string;
    };
  };
  wind: {
    deg: number;
    speed: number;
  };
  clouds: {
    all: number;
  };
  pop: number;
  snow: {
    ['3h']: number;
  };
  rain: {
    ['3h']: number;
  };
};

export type ForecastListItemType = {
  data: ForecastItemType;
};

export type ForecastListType = {
  list: [];
};

export type ForecastItemMainType = {
  data: ForecastItemType;
  isOpen: boolean;
  setOpen(e: boolean): void;
};

export type ForecastDropDownItemType = {
  icon: IconDefinition;
  title: string;
  rotate?: number;
};
