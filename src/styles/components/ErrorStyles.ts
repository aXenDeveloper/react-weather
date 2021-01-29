import styled from 'styled-components';

export const ErrorStyle = styled.div`
	background-color: var(--theme-block);
	padding: var(--padding);
	border-radius: var(--border-radius);
	margin: 5rem 0;
	text-align: center;
`;

export const ErrorIcon = styled.div`
	margin-bottom: 2rem;

	svg {
		font-size: 6rem;
		color: var(--theme-background);
	}
`;

export const ErrorContent = styled.span`
	display: inline-block;
	font-size: 2.4rem;
	font-weight: bold;
	max-width: 80rem;
`;

export const ErrorTitle = styled.p`
	font-size: 1.6rem;
	color: var(--theme-color-light);
	margin: 0;
`;

export const ErrorCode = styled.p`
	font-style: italic;

	span {
		font-weight: bold;
	}
`;
