import styled from 'styled-components';

const SnowDropStyle = styled.div`
	position: absolute;
	display: flex;
	justify-content: space-around;
	bottom: 90px;
	left: 0;
	right: 0;
`;

const SnowStyle = styled.div`
	width: 16px;
	height: 16px;
	animation: drop 2s linear infinite;
	background-color: #fff;
	border-radius: 50%;

	&:nth-child(5) {
		animation-duration: 2s;
	}
	&:nth-child(4) {
		animation-duration: 1.95s;
	}
	&:nth-child(3) {
		animation-duration: 2.2s;
	}
	&:nth-child(2) {
		animation-duration: 2.4s;
	}
	&:nth-child(1) {
		animation-duration: 1.85s;
	}
`;

const Snow = () => {
	const drops = [];

	for (let i = 0; i <= 5; i++) {
		drops.push(<SnowStyle key={`drop:${i}`} />);
	}

	return <SnowDropStyle>{drops}</SnowDropStyle>;
};

export default Snow;
