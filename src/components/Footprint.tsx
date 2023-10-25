import { ReactElement, useMemo } from 'react';
import { formatNumber } from '../utils/utils';
import { EmissionsDisplay } from './EmissionsDisplay';
import { FootprintType } from '../types/types';
import purpleCloud from '../assets/purple_cloud.png';
import whiteCloud from '../assets/white_cloud.png';
import butterfly from '../assets/butterfly.svg';
import '../App.css';
import { Button } from './Button';

export function Footprint({ unit, emissions }: FootprintType): ReactElement {
  const emissionString = useMemo(() => formatNumber(emissions), [emissions]);
  return (
    <div className="footprint">
      <img className="purple-cloud" src={purpleCloud} alt="Purple cloud" />
      <img className="white-cloud" src={whiteCloud} alt="White cloud" />
      <img className="butterfly" src={butterfly} alt="butterfly" />
      <EmissionsDisplay unit={unit} emissions={emissionString} title="Your footprint" size="lg" />
      <Button />
    </div>
  );
}
