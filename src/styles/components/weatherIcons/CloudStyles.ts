import styled, { css } from 'styled-components';
import { CloudPosition, TimeOfDayStyleType, CloudSVGType } from '../../../types/weatherIconsTypes';

export const CloudStyle = styled.div`
	${({ left }: CloudPosition) =>
		left &&
		css`
			position: absolute;
			transform: translateX(-235px) scale(0.68);
			opacity: 0.5;
			animation: cloud_left 20s ease infinite;
			top: 0;
			left: 0;

			@keyframes cloud_left {
				0% {
					transform: translateX(-100px) scale(0.68);
				}
				50% {
					transform: translateX(-200px) scale(0.68);
				}
				100% {
					transform: translateX(-100px) scale(0.68);
				}
			}
		`}

	${({ right }: CloudPosition) =>
		right &&
		css`
			position: absolute;
			transform: translateX(235px) scale(0.68) rotateY(180deg);
			opacity: 0.5;
			animation: cloud_right 20s ease infinite;
			top: 0;
			left: 0;

			@keyframes cloud_right {
				0% {
					transform: translateX(100px) scale(0.68) rotateY(180deg);
				}
				50% {
					transform: translateX(200px) scale(0.68) rotateY(180deg);
				}
				100% {
					transform: translateX(100px) scale(0.68) rotateY(180deg);
				}
			}
		`}
`;

export const TimeOfDayStyle = styled.div`
	position: absolute;
	${({ timeOfDay }: TimeOfDayStyleType) =>
		timeOfDay === 'day' &&
		css`
			top: -50px;
			right: -50px;
			transform: scale(0.7);
		`}
	${({ timeOfDay }: TimeOfDayStyleType) =>
		timeOfDay === 'night' &&
		css`
			top: -80px;
			right: -70px;
			transform: scale(0.5);
		`}
	z-index: 9;
`;

export const CloudSVGStyle = styled.svg`
	width: 300px;
	position: relative;
	z-index: 10;

	path {
		${({ getCloudColor }: CloudSVGType) =>
			getCloudColor === 1 &&
			css`
				fill: #fff;
			`}
		${({ getCloudColor }: CloudSVGType) =>
			getCloudColor === 2 &&
			css`
				fill: #d0dad9;
			`}
		${({ getCloudColor }: CloudSVGType) =>
			getCloudColor === 3 &&
			css`
				fill: #333333;
			`}
	}
`;
