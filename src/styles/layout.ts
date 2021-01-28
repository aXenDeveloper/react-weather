import styled, { css } from 'styled-components';

export const Container = styled.div`
	${({ small }: { small?: boolean }) =>
		small
			? css`
					max-width: var(--container-small-width);
			  `
			: css`
					max-width: var(--container-width);
			  `}

	padding: 0 1.5rem;
	margin: 0 auto;
`;
