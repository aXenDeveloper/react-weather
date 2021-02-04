import { SnowDropStyle, SnowStyle } from '../../../styles/components/weatherIcons/SnowStyles';

const Snow = () => {
  const drops = [];

  for (let i = 0; i <= 5; i++) {
    drops.push(<SnowStyle key={`drop:${i}`} />);
  }

  return <SnowDropStyle>{drops}</SnowDropStyle>;
};

export default Snow;
