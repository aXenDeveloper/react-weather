export type ForecastItemType = {
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
  };
  weather: {
    [key: number]: {
      id: number;
      icon: string;
      description: string;
    };
  };
};

export type ForecastListItemType = {
  data: ForecastItemType;
};

export type ForecastListType = {
  list: [];
};

export type ForecastItemMainType = {
  dt: number;
  temp: number;
  icon: string;
  description: string;
  isOpen: boolean;
  setOpen(e: boolean): void;
};
