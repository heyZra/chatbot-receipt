const Image = (props) => {
  const { src, position = "", height = "", width = "w-48", delay } = props;
  return (
    <img
      src={src}
      className={`${width} absolute ${position} ${height} opacity-0 animate-slideinbouncing ${delay}`}
      alt="image"
    />
  );
};

export default Image;
