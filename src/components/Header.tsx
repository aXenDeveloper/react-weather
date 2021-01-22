import styles from '../styles/modules/header.module.scss';
import Form from './Form';
import ChangeLang from './ChangeLang';

const Header = () => (
	<header className={styles.header}>
		<div className="container flex flex-ai:center flex-jc:center">
			<Form />

			<div>
				<ChangeLang />
			</div>
		</div>
	</header>
);

export default Header;
