import { FC } from 'react';
import Header from './Header';

const Layout: FC = ({ children }) => (
	<>
		<Header />
		{children}
	</>
);

export default Layout;
