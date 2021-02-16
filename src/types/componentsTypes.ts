export type ButtonType = {
  href: string;
  target?: '_blank';
  rel?: string;
};

export type ConvertTempType = {
  temp: number;
  degrees?: boolean;
};

export type ConvertSpeedType = {
  speed: number;
};

export type ConvertDateType = {
  dt: number;
  flex?: boolean;
};

export type FlagsType = {
  country: string;
};
