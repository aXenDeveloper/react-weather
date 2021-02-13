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
