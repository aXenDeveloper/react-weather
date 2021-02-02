import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const DropDownMenuStyle = styled.div`
	position: relative;
`;

const DropDownMenuButton = styled.button``;

const DropDownMenuContentStyle = styled.div`
	position: absolute;
	top: 25px;
	background: #fff;
	width: 500px;
	transform: translateX(-45%);
	padding: 1rem;
	visibility: hidden;
`;

const DropDownMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [menuWidth, setMenuWidth] = useState(0);

	const handleButton = () => {
		setIsOpen(!isOpen);
	};

	const dropDownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (dropDownRef.current) {
			setMenuWidth(dropDownRef.current?.clientWidth);
			const positionMenu = dropDownRef.current.getBoundingClientRect();

			if (positionMenu.right + 1 >= window.innerWidth) {
				dropDownRef.current.style.left = `-${positionMenu.width / 2}px`;
			}
			dropDownRef.current.style.visibility = 'visible';
		}
	}, [isOpen]);

	return (
		<DropDownMenuStyle>
			<DropDownMenuButton onClick={handleButton}>test</DropDownMenuButton>

			{isOpen && (
				<DropDownMenuContentStyle ref={dropDownRef}>
					<ul>
						<li>test</li>
						<li>test</li>
					</ul>
				</DropDownMenuContentStyle>
			)}
		</DropDownMenuStyle>
	);
};

export default DropDownMenu;
