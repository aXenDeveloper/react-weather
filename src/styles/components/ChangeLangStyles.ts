import styled from 'styled-components';

export const ChangeLangStyle = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0;
	padding: 0;
	list-style: none;

	li {
		line-height: 0;
		margin-left: 1rem;

		button {
			background-color: transparent;
			border: 0;
			padding: 0;
			margin: 0;
			line-height: 0;
			cursor: pointer;
			border-radius: 5rem;
			width: 40px;
			height: 25px;

			img {
				width: 100%;
				height: 100%;
				border-radius: inherit;
				object-fit: cover;
			}

			&:hover {
				opacity: 0.6;
			}
		}
	}
`;
