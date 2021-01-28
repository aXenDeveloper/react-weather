import styled from 'styled-components';

export const ChangeLangStyle = styled.ul`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0 1rem;
	padding: 0;
	list-style: none;

	@media screen and (max-width: 767px) {
		margin: 2rem 0 0 0;
	}

	li {
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
				height: 25px;
			}
		}

		&:not(:last-child) {
			margin-right: 1rem;
		}
	}
`;
