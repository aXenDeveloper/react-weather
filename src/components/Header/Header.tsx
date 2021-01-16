import { FC } from 'react';
import styles from './header.module.scss';
import Form from '../Form/Form';

const Header: FC = () => (
	<header className={styles.header}>
		<div className="container flex flex-ai:center flex-jc:space-between">
			<div>logo</div>

			<Form />

			<div>menu</div>
		</div>
	</header>
);

export default Header;
