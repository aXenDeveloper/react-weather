import { FC, useState } from 'react';
import { GeoLocationContext } from '../context/useGeoLocation';
import { CenterBody } from '../styles/global';
import Footer from './Footer';
import Header from './Header';

const Layout: FC = ({ children }) => {
  const [geoLocation, setGeoLocation] = useState({
    status: false,
    lat: 0,
    lon: 0
  });

  return (
    <CenterBody>
      <GeoLocationContext.Provider value={{ geoLocation, setGeoLocation }}>
        <Header />
        <main>{children}</main>
      </GeoLocationContext.Provider>

      <Footer />
    </CenterBody>
  );
};

export default Layout;
