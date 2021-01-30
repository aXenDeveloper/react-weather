import styled from 'styled-components';

export const LoadingStyle = styled.div`
	position: relative;
	padding: 5rem 0;

	&::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 5rem;
		border-radius: 50%;
		width: 5rem;
		height: 5rem;
		margin-top: -2.5rem;
		margin-left: -2.5rem;
		border: 0.4rem solid var(--loading-border);
		border-top-color: var(--loading-border-top);
		animation: spinner 0.65s infinite linear;
	}

	@keyframes spinner {
		0% {
			transform: rotate(0);
		}
		100% {
			transform: rotate(360deg);
		}
	}
`;
