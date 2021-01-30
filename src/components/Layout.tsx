import { FC, useState } from 'react';
import { GeoLocationContext } from '../context/useGeoLocation';
import Footer from './Footer';
import Header from './Header';

const Layout: FC = ({ children }) => {
	const [geoLocation, setGeoLocation] = useState({
		status: false,
		lat: 0,
		lon: 0
	});

	return (
		<>
			<GeoLocationContext.Provider value={{ geoLocation, setGeoLocation }}>
				<Header />
				<main>{children}</main>
			</GeoLocationContext.Provider>

			<Footer />
		</>
	);
};

export default Layout;
