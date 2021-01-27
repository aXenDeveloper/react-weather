import { useEffect, useState } from 'react';

const useGeoLocation = () => {
	const [location, setLocation] = useState({
		code: 404,
		coord: {
			lat: 0,
			lon: 0
		}
	});

	const onSuccess = (location: { coords: { latitude: number; longitude: number } }) => {
		setLocation({
			code: 200,
			coord: {
				lat: location.coords.latitude,
				lon: location.coords.longitude
			}
		});
	};

	useEffect(() => {
		if (navigator.geolocation) navigator.geolocation.getCurrentPosition(onSuccess);
	}, []);

	return location;
};

export default useGeoLocation;
