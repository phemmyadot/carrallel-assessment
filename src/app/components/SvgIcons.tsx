import styles from "../styles/SvgIcons.module.css";

export enum SVGIconName {
  SETTINGS,
  LIBRARY,
  PLAN,
  TOOLS,
  SUPPORT,
  HOME,
  NOTIFICATION,
}

interface SVGIconProps {
  name: SVGIconName;
  color?: string;
}

const SVGIcons: React.FC<SVGIconProps> = ({ name, color = "#808080" }) => {
  let icon = <></>;
  switch (name) {
    case SVGIconName.SETTINGS:
      icon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            cx="12"
            cy="12"
            r="3"
            stroke={color}
            strokeWidth="1.5"
          ></circle>
          <path
            stroke={color}
            strokeLinecap="round"
            strokeWidth="1.5"
            d="M3.661 10.64c.473.296.777.802.777 1.36s-.304 1.064-.777 1.36c-.321.203-.529.364-.676.556a2 2 0 00-.396 1.479c.052.394.285.798.75 1.605.467.807.7 1.21 1.015 1.453a2 2 0 001.479.396c.24-.032.483-.13.819-.308a1.617 1.617 0 011.567.008c.483.28.77.795.79 1.353.014.38.05.64.143.863a2 2 0 001.083 1.083C10.602 22 11.068 22 12 22c.932 0 1.398 0 1.765-.152a2 2 0 001.083-1.083c.092-.223.129-.483.143-.863.02-.558.307-1.074.79-1.353a1.617 1.617 0 011.567-.008c.336.178.58.276.82.308a2 2 0 001.478-.396c.315-.242.548-.646 1.014-1.453.208-.36.369-.639.489-.873m-.81-2.766a1.617 1.617 0 01-.777-1.36c0-.559.304-1.065.777-1.362.321-.202.528-.363.676-.555a2 2 0 00.396-1.479c-.052-.394-.285-.798-.75-1.605-.467-.807-.7-1.21-1.015-1.453a2 2 0 00-1.479-.396c-.24.032-.483.13-.82.308a1.617 1.617 0 01-1.566-.008 1.617 1.617 0 01-.79-1.353c-.014-.38-.05-.64-.143-.863a2 2 0 00-1.083-1.083C13.398 2 12.932 2 12 2c-.932 0-1.398 0-1.765.152a2 2 0 00-1.083 1.083c-.092.223-.129.483-.143.863a1.617 1.617 0 01-.79 1.353 1.617 1.617 0 01-1.567.008c-.336-.178-.58-.276-.82-.308a2 2 0 00-1.478.396C4.04 5.79 3.806 6.193 3.34 7c-.208.36-.369.639-.489.873"
          ></path>
        </svg>
      );
      break;
    case SVGIconName.HOME:
      icon = <> </>;
      break;
    case SVGIconName.NOTIFICATION:
      icon = (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_15_159)">
            <rect width="24" height="24" />
            <path
              d="M9.5 19C8.89555 19 7.01237 19 5.61714 19C4.87375 19 4.39116 18.2177 4.72361 17.5528L5.57771 15.8446C5.85542 15.2892 6 14.6774 6 14.0564C6 13.2867 6 12.1434 6 11C6 9 7 5 12 5C17 5 18 9 18 11C18 12.1434 18 13.2867 18 14.0564C18 14.6774 18.1446 15.2892 18.4223 15.8446L19.2764 17.5528C19.6088 18.2177 19.1253 19 18.382 19H14.5M9.5 19C9.5 21 10.5 22 12 22C13.5 22 14.5 21 14.5 19M9.5 19C11.0621 19 14.5 19 14.5 19"
              stroke={color}
              strokeLinejoin="round"
            />
            <path
              d="M12 5V3"
              stroke={color}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_15_159">
              <rect width="24" height="24" />
            </clipPath>
          </defs>
        </svg>
      );
      break;
    case SVGIconName.LIBRARY:
      icon = <></>;
      break;
    case SVGIconName.PLAN:
      icon = <></>;
      break;
    case SVGIconName.TOOLS:
      icon = <></>;
      break;
    case SVGIconName.SUPPORT:
      icon = <></>;
      break;
    default:
      break;
  }

  return icon;
};

export default SVGIcons;
