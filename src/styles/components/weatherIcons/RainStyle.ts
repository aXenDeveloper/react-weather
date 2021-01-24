import styled from 'styled-components';

export const RainStyle = styled.div`
	position: absolute;
	display: flex;
	justify-content: space-around;
	bottom: 90px;
	left: 0;
	right: 0;

	.drop {
		background-color: #7bcaff;
		height: 25px;
		width: 4px;
		border-radius: 25px;
		animation: drop 2s linear infinite;
		z-index: -10;

		&:nth-child(1),
		&:nth-child(6) {
			animation-duration: 1s;
		}
		&:nth-child(2),
		&:nth-child(7) {
			animation-duration: 0.95s;
		}
		&:nth-child(3),
		&:nth-child(8) {
			animation-duration: 1.2s;
		}
		&:nth-child(4),
		&:nth-child(9) {
			animation-duration: 1.4s;
		}
		&:nth-child(5),
		&:nth-child(10) {
			animation-duration: 0.85s;
		}
	}
`;
