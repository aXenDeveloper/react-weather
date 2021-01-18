import Cloud from './icons/Cloud';

const WeatherIcon = () => (
	<div className="weather_icon">
		<div className="weather_svg_cloud">
			<Cloud left />
			<Cloud />
			<Cloud right />
		</div>
	</div>
);

export default WeatherIcon;
