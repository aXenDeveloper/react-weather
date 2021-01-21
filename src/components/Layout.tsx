import { FC } from 'react';
import Header from './Header';

const Layout: FC = ({ children }) => (
	<>
		<Header />
		<main>{children}</main>
	</>
);

export default Layout;
