import React from "react";

export const ArrowIcon = ({
  height = "9px",
  width = "12px",
  color = "#EE9430"
}: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 8.41602L0 2.41566L2.00094 0.416016L6 4.41672L9.99906 0.416016L12 2.41566L6 8.41602Z"
      fill={color}
    />
  </svg>
);
