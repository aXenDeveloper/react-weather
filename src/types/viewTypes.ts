export type WeatherViewType = {
  geoLocation?: {
    lat: number;
    lon: number;
  };
};

export type WeatherViewParamsTypes = {
  city: string;
};

export type DemoViewParamsType = {
  code: string;
  timeOfDay: string;
};
