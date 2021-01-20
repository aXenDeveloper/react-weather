import Cloud from './WeatherIcons/Cloud';

const WeatherIcon = () => (
	<div className="weather_icon">
		<div className="weather_svg_cloud">
			<Cloud left getCloudColor={1} getRain getSnow />
			<Cloud getCloudColor={1} getRain timeOfDay="night" getStorm getSnow />
			<Cloud right getCloudColor={1} getRain getSnow />
		</div>
	</div>
);

export default WeatherIcon;
