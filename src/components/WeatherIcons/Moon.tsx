import styled from 'styled-components';
import MoonSVG from './SVG/MoonSVG';

const MoonStyle = styled.div`
	width: 335px;
`;

const Moon = () => {
	return (
		<MoonStyle>
			<MoonSVG />
		</MoonStyle>
	);
};

export default Moon;
