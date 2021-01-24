export type CloudPosition = {
	left?: boolean;
	right?: boolean;
};

export type CloudType = {
	getRain?: boolean;
	getCloudColor?: 1 | 2 | 3;
	getStorm?: boolean;
	timeOfDay?: 'day' | 'night';
	getSnow?: boolean;
	getTornado?: boolean;
	getFog?: boolean;
};

export type CloudSVGType = {
	getCloudColor?: 1 | 2 | 3;
};

export type TimeOfDayStyleType = {
	timeOfDay?: 'day' | 'night';
};
