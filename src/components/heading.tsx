interface HeadingProps {
  text: string;
}
export const Heading: React.FC<HeadingProps> = ({ text }) => {
  return (
    <span className="title">
      <svg viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g opacity="0.9">
          <path d="M0 6.53275L0 1.63929L5.65069 0.344345C5.698 0.333504 5.74716 0.352388 5.77504 0.392112L10.0853 6.53275H0Z" fill="#1968B7" />
          <path d="M0 6.53268L0 11.4261L5.65069 12.7211C5.698 12.7319 5.74716 12.713 5.77504 12.6733L10.0853 6.53268H0Z" fill="#28A2F7" />
        </g>
      </svg>
      {text}
    </span>
  );
};

export default Heading;
