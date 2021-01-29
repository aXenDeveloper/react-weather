import styled from 'styled-components';

export const ChangeLangStyle = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 1rem;
	padding: 0;
	list-style: none;

	li {
		line-height: 0;

		button {
			background-color: transparent;
			border: 0;
			padding: 0;
			margin: 0;
			line-height: 0;
			cursor: pointer;
			border-radius: 5rem;

			img {
				width: 40px;
				max-height: 25px;
				border-radius: 5rem;
			}
		}

		&:not(:last-child) {
			margin-right: 1rem;
		}
	}
`;
