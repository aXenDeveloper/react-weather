import styled from 'styled-components';

export const GeoLocationButtonStyle = styled.button`
	background-color: transparent;
	color: #fff;
	border: 0;
	font-size: 2rem;
	width: 48px;
	height: 42px;
	margin-left: 1rem;
	border-radius: var(--border-radius);
	cursor: pointer;

	@media screen and (max-width: 768px) {
		margin-left: 0;
	}

	&:hover {
		background-color: var(--button-hover);
	}
`;
