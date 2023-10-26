import { ReactElement } from 'react';
import { EmissionsDisplay } from './EmissionsDisplay';
import { Coords, FootprintType } from '../types/types';
import purpleCloud from '../assets/purple_cloud.png';
import whiteCloud from '../assets/white_cloud.png';
import '../App.css';
import { Button } from './Button';

/**
 * Butterfly positioning by CSS
 */
function Butterfly() {
  return (
    <svg
      x={0}
      y={0}
      height={55}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 68 55"
      fill="none"
      role="img"
      className="r-height-1pi2tsx r-width-13qz1uu r-pointerEvents-633pao butterfly"
    >
      <path
        d="M23.9374 24.8703C30.4213 29.1929 45.01 33.5155 51.4939 35.1365C48.9724 38.7386 43.6052 46.1588 42.3084 47.0234C40.6874 48.104 19.6149 51.8863 10.4294 50.8056C1.24384 49.725 -1.45772 49.1847 0.703568 41.0798C2.4326 34.5959 10.0691 32.975 13.6713 32.975C8.48419 29.5169 9.34871 25.4106 10.4294 23.7897C13.5168 20.7021 17.3394 21.1063 20.125 22.2458C19.8967 22.0541 20.1953 22.2039 20.7306 22.512C21.5835 22.9135 22.3126 23.3711 22.8568 23.7897C22.1104 23.3304 21.2909 22.8345 20.7306 22.512C20.535 22.4199 20.3329 22.3308 20.125 22.2458C20.4073 22.4828 21.4952 23.2422 23.9374 24.8703Z"
        fill="#5F2B68"
      ></path>
      <path
        d="M41.9499 11.7582C41.7344 7.04586 42.2462 -0.380607 45.8084 0.0151957C50.6714 0.555518 53.373 6.49896 52.8326 12.9829C52.4004 18.1701 53.373 25.5906 53.9133 28.6524L49.0504 35.6766C44.3676 31.354 34.4617 21.4121 32.3004 16.225C30.1391 11.0379 32.1203 8.30025 33.381 7.57982C36.0681 6.74006 41.2606 6.52662 41.9499 11.7582Z"
        fill="#5F2B68"
      ></path>
      <path
        d="M63.9213 22.7089C60.8955 20.9798 57.6175 23.4293 56.3568 24.8702L53.9253 28.1121L53.9235 28.1146C50.951 32.0779 44.7937 40.3236 43.9294 41.6201C42.8487 43.2411 41.2278 44.8621 42.3084 51.346C43.1729 56.533 47.3514 54.2277 49.3326 52.4266C51.674 49.0046 57.3294 40.7556 61.2197 35.1363C66.0826 28.1121 67.7036 24.8702 63.9213 22.7089Z"
        fill="#E9A431"
      ></path>
      <path
        d="M63.2178 17.8306C63.2178 19.6317 62.8936 23.45 61.5968 24.3145M67.0001 20.5323C66.6398 21.9731 65.4872 25.071 63.7581 25.9355M58.3549 28.6371L57.8146 29.1774M60.5162 29.7177L59.9759 30.2581"
        stroke="black"
        strokeWidth="0.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
    // </svg>
  );
}

/**
 * @param x x positioning coordinate
 * @param y y positioning coordinate
 * @param a is the angle of rotation, optional
 */
function Leaves({ x, y, a = 0 }: Coords) {
  return (
    <svg width="100" height="100" x={x} y={y}>
      <g transform={`rotate(${a}, 50, 50)`}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x={-19}
          y={27}
          height={48}
          viewBox="0 0 55 48"
          fill="none"
          role="img"
          className="r-height-1pi2tsx r-width-13qz1uu r-pointerEvents-633pao"
        >
          <path
            d="M4.15098 47.1479C7.21505 35.5614 20.9088 10.0579 51.1715 0.735964C45.8426 13.4962 28.9781 40.6429 4.15098 47.1479Z"
            fill="#4E812D"
          ></path>
          <path
            d="M16.2224 35.5858C19.6365 30.6266 27.923 19.9376 33.7554 16.855M29.1546 14.8974C28.7435 16.7149 28.5742 20.9102 31.1851 23.1513M23.0662 21.5443C22.817 23.322 23.0684 27.4137 26.0678 29.5593"
            stroke="#E9A431"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
        <svg
          y={60}
          height={30}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 86 30"
          fill="none"
          role="img"
          className="r-height-1pi2tsx r-width-13qz1uu r-pointerEvents-633pao"
        >
          <path
            d="M45.5631 0.766936C30.3631 -1.23306 9.22981 10.2669 0.563141 16.2669C0.563141 18.7671 29.5631 28.7668 48.0631 29.2668C62.8631 29.6668 79.2298 23.1001 85.5631 19.7668L70.5631 8.26678C68.5631 6.60017 60.7631 2.76694 45.5631 0.766936Z"
            fill="#4E812D"
          ></path>
          <path
            d="M23.6076 15.8595C33.164 14.3198 55.2113 12.3301 66.95 16.6894M38.8671 8.16893C37.0586 10.0416 34.2213 15.4123 37.3408 21.9138M48.5814 9.62966C47.0862 11.3007 44.7332 15.8812 47.2824 20.8351M58.9005 12.0305C57.2217 13.5538 54.039 17.2857 54.7387 20.0262"
            stroke="#E9A431"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </g>
    </svg>
  );
}

export function Footprint({ emissions }: FootprintType): ReactElement {
  return (
    <section className="footprint">
      <img className="purple-cloud" src={purpleCloud} alt="Purple cloud"></img>
      <img className="white-cloud" src={whiteCloud} alt="White cloud" />
      <Butterfly />
      <svg className="svg-container" width="368" height="250">
        <Leaves x={270} y={-20} />
        <Leaves x={10} y={180} a={180} />
      </svg>
      <div className="content-container">
        <EmissionsDisplay emissions={emissions} title="Your footprint" size="lg" />
        <Button />
      </div>
    </section>
  );
}
