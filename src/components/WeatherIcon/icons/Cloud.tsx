import { FC } from 'react';
import styled, { css } from 'styled-components';
import CloudSVG from './CloudSVG';
import Rain from './Rain';

type CloudType = {
	left?: boolean;
	right?: boolean;
};

const Cloud: FC<CloudType> = ({ left, right }) => {
	const CloudStyle = styled.div`
		@keyframes cloud_left {
			0% {
				transform: translateX(-130px) scale(0.68);
			}
			50% {
				transform: translateX(-250px) scale(0.68);
			}
			100% {
				transform: translateX(-130px) scale(0.68);
			}
		}

		@keyframes cloud_right {
			0% {
				transform: translateX(130px) scale(0.68) rotateY(180deg);
			}
			50% {
				transform: translateX(250px) scale(0.68) rotateY(180deg);
			}
			100% {
				transform: translateX(130px) scale(0.68) rotateY(180deg);
			}
		}

		${left &&
		css`
			position: absolute;
			transform: translateX(-235px) scale(0.68);
			opacity: 0.5;
			animation: cloud_left 20s ease infinite;
			top: 0;
			left: 0;
		`}

		${right &&
		css`
			position: absolute;
			transform: translateX(235px) scale(0.68) rotateY(180deg);
			opacity: 0.5;
			animation: cloud_right 20s ease infinite;
			top: 0;
			left: 0;
		`}

		svg {
			position: relative;
			z-index: 10;

			path {
				fill: #fff;
			}
		}
	`;

	return (
		<CloudStyle>
			<CloudSVG />
			<Rain />
		</CloudStyle>
	);
};

export default Cloud;
