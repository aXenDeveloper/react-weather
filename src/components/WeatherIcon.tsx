import Cloud from './WeatherIcons/Cloud';

const WeatherIcon = () => (
	<div className="weather_icon">
		<div className="weather_svg_cloud">
			<Cloud left getCloudColor={1} getRain />
			<Cloud getCloudColor={1} getRain timeOfDay="night" />
			<Cloud right getCloudColor={1} getRain />
		</div>
	</div>
);

export default WeatherIcon;
