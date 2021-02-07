export type ForecastItemType = {
  dt: number;
  dt_txt: string;
};

export type ForecastListItemType = {
  data: ForecastItemType;
};

export type ForecastListType = {
  list: [];
};
