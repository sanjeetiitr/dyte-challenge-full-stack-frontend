import * as React from "react";

function LoaderIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{
        // margin: "auto",
        background: "transparent",
      }}
      width={16}
      height={16}
      viewBox="0 0 100 100"
      // preserveAspectRatio="xMidYMid"
      display="block"
      {...props}
    >
      <g>
        <path
          d="M50 31a19 19 0 1013.435 5.565"
          fill="none"
          stroke="#85a2b6"
          strokeWidth={16}
        />
        <path d="M49 21v20l10-10-10-10" fill="#85a2b6" />
        <animateTransform
          attributeName="transform"
          type="rotate"
          repeatCount="indefinite"
          dur="0.7042253521126761s"
          values="0 50 50;360 50 50"
          keyTimes="0;1"
        />
      </g>
    </svg>
  );
}

export default LoaderIcon;
