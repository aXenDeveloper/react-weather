import { RainStyle } from '../../../styles/components/weatherIcons/RainStyle';

const Rain = () => {
  const drops = [];

  for (let i = 0; i <= Math.floor(Math.random() * (10 - 5)) + 5; i++) {
    drops.push(<div key={`drop:${i}`} className="drop" />);
  }

  return <RainStyle>{drops}</RainStyle>;
};

export default Rain;
