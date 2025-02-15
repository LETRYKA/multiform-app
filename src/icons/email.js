import * as React from "react"
const Email = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m4 7 6.2 4.65a3 3 0 0 0 3.6 0L20 7"
    />
    <rect
      width={18}
      height={14}
      x={3}
      y={5}
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={2}
      rx={2}
    />
  </svg>
)
export default Email