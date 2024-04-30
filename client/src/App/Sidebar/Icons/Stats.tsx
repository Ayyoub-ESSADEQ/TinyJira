export function Stats(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20px"
      height="20px"
      viewBox="0 0 24 24"
      {...props}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      >
        <path strokeMiterlimit="5.759" d="M3 3v16a2 2 0 0 0 2 2h16"></path>
        <path strokeMiterlimit="5.759" d="m7 14l4-4l4 4l6-6"></path>
        <path d="M18 8h3v3"></path>
      </g>
    </svg>
  );
}
