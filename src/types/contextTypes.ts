export type DataWeatherContextType = {
  weatherDataCurrent: {
    name: string;

    weather: {
      [key: number]: {
        id: number;
        icon: string;
        description: string;
      };
    };

    sys: {
      country: string;
    };

    main: {
      temp: number;
      feels_like: number;
      temp_min: number;
      temp_max: number;
      pressure: number;
      humidity: number;
    };

    wind: {
      deg: number;
      speed: number;
    };

    clouds: {
      all: number;
    };

    dt: number;
  };
};

export type GlobalContextType = {
  lang: string;
  setLang(e: string): void;
  getUnits: string;
  setUnits(e: string): void;
};

export type GeoLocationContextType = {
  geoLocation: {
    status: boolean;
    lat: number;
    lon: number;
  };
  setGeoLocation(e: { status: boolean; lat: number; lon: number }): void;
};
