import styled from 'styled-components';

export const HomeViewStyle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	color: #fff;
	min-height: calc(100vh - 85px - 186px);
	text-align: center;

	@media screen and (max-width: 768px) {
		min-height: calc(100vh - 85px - 117px);
	}

	h1 {
		font-size: 4rem;
		margin: 0 0 1rem 0;
	}

	p {
		max-width: 45rem;
		font-size: 1.6rem;
	}
`;

export const HomeViewButtonsStyle = styled.div`
	margin-top: 1rem;
`;