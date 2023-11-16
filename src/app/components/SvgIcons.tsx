import styles from "../styles/SvgIcons.module.css";

export enum SVGIconName {
  SETTINGS = "Settings",
  LIBRARY = "Library",
  PLAN = "Plan",
  TOOLS = "Tools",
  SUPPORT = "Support",
  HOME = "Home",
  NOTIFICATION = "Notification",
  ARROW_RIGHT = "ArrowRight",
  BACK = "Back",
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
      icon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke={color}
            strokeLinecap="round"
            strokeWidth="1.5"
            d="M22 22H2M2 11l8.126-6.5a3 3 0 013.748 0L22 11"
          ></path>
          <path
            stroke={color}
            strokeLinecap="round"
            strokeWidth="1.5"
            d="M15.5 5.5v-2A.5.5 0 0116 3h2.5a.5.5 0 01.5.5v5"
            opacity="0.5"
          ></path>
          <path
            stroke={color}
            strokeLinecap="round"
            strokeWidth="1.5"
            d="M4 22V9.5M20 22V9.5"
          ></path>
          <path
            stroke={color}
            strokeWidth="1.5"
            d="M15 22v-5c0-1.414 0-2.121-.44-2.56C14.122 14 13.415 14 12 14c-1.414 0-2.121 0-2.56.44C9 14.878 9 15.585 9 17v5M14 9.5a2 2 0 11-4 0 2 2 0 014 0z"
            opacity="0.5"
          ></path>
        </svg>
      );
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
    case SVGIconName.PLAN:
      icon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M22 11.086v.92a10 10 0 11-5.93-9.14M22 4L12 14.01l-3-3"
          ></path>
        </svg>
      );
      break;
    case SVGIconName.LIBRARY:
      icon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            fill={color}
            stroke={color}
            fillRule="evenodd"
            d="M7.5 4.5A1.5 1.5 0 006 6v9.401A2.987 2.987 0 017.5 15H18V4.5H7.5zm10.5 12H7.5a1.5 1.5 0 000 3H18v-3zM4.5 18V6a3 3 0 013-3h11.25l.75.75V21h-12a3 3 0 01-3-3z"
            clipRule="evenodd"
          ></path>
        </svg>
      );
      break;
    case SVGIconName.TOOLS:
      icon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 32 32"
        >
          <path
            stroke={color}
            d="M31.449 6.748a.942.942 0 00-1.017.152l-5.041 4.528-4.551-4.669 4.506-5.204c.245-.283.305-.673.152-1.016s-.489-.553-.86-.553h-.271c-2.785 0-7.593.239-9.739 2.417l-.433.43c-2.29 2.337-2.697 6.168-1.49 9.081L1.165 23.692a4.08 4.08 0 000 5.713l1.409 1.428a3.948 3.948 0 005.635 0l11.71-11.804c1.107.599 2.625.989 3.899.989 2.043 0 3.98-.824 5.454-2.32l.427-.433c2.331-2.364 2.296-7.416 2.306-9.638a.964.964 0 00-.554-.878zm-3.147 9.158l-.371.433c-1.117 1.134-2.578 1.677-4.114 1.677-.76 0-1.784-.143-2.476-.431a5.944 5.944 0 01-1.725-1.107L6.798 29.403c-.376.382-.876.592-1.408.592s-1.032-.21-1.409-.592l-1.408-1.427a2.043 2.043 0 01-.001-2.857l12.524-12.777a6.009 6.009 0 01-.877-1.968h-.001c-.482-1.95-.201-4.644 1.313-6.189l.431-.435c1.298-1.317 4.67-1.707 6.537-1.822l-3.668 4.236a.971.971 0 00.038 1.309l5.798 5.948a.937.937 0 001.299.047l4.082-3.676c-.122 1.98-.506 4.856-1.748 6.115z"
          ></path>
        </svg>
      );
      break;
    case SVGIconName.ARROW_RIGHT:
      icon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 32 32"
        >
          <path
            stroke={color}
            d="M8.489 31.975a1.073 1.073 0 01-.757-1.831L21.99 15.88 7.94 1.83c-.417-.417-.417-1.098 0-1.515s1.098-.417 1.515 0l14.807 14.807a1.074 1.074 0 010 1.515L9.247 31.659a1.078 1.078 0 01-.757.316z"
          ></path>
        </svg>
      );
      break;
    case SVGIconName.BACK:
      icon = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke={color}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 20l-8-8 8-8"
          ></path>
        </svg>
      );

      break;
    default:
      break;
  }

  return icon;
};

export default SVGIcons;
