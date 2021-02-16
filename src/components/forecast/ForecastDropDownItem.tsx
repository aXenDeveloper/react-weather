import {
  ForecastDropDownItemStyle,
  ForecastDropDownItemSVGStyle
} from '../../styles/components/forecast/ForecastDropDownStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';
import { ForecastDropDownItemType } from '../../types/forecastTypes';

const ForecastDropDownItem: FC<ForecastDropDownItemType> = ({ icon, title, rotate, children }) => {
  return (
    <ForecastDropDownItemStyle>
      <ForecastDropDownItemSVGStyle direction={rotate}>
        <FontAwesomeIcon icon={icon} />
      </ForecastDropDownItemSVGStyle>

      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>
    </ForecastDropDownItemStyle>
  );
};

export default ForecastDropDownItem;
