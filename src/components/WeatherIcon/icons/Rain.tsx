import styled from 'styled-components';

const Rain = () => {
	const Rain = styled.div`
		position: absolute;
		display: flex;
		justify-content: space-around;
		bottom: 0;
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

			@keyframes drop {
				from {
					transform: translateY(-35px);
					opacity: 1;
				}
				to {
					transform: translateY(120px);
					opacity: 0;
				}
			}
		}
	`;

	const drops = [];

	for (let i = 0; i <= Math.floor(Math.random() * (10 - 5)) + 5; i++) {
		drops.push(<div key={`drop:${i}`} className="drop" />);
	}

	return <Rain>{drops}</Rain>;
};

export default Rain;
