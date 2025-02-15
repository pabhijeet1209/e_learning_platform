export const VideoPlaySvg = (props) => {
  const height = props.data?.height;
  const width = props.data?.width;
  const showStyle = props.data?.showStyle;
  return (
    <svg
      height={height}
      width={width}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={
        showStyle
          ? {
              border: "0.1px solid grey",
              borderBottom: "4px solid grey",
              background: "white",
              borderRadius: "10%",
            }
          : {}
      }
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM10.7828 7.99043L16.4265 11.1258C17.1123 11.5068 17.1123 12.4932 16.4265 12.8742L10.7828 16.0096C9.98293 16.4539 9 15.8756 9 14.9606V9.03942C9 8.12444 9.98293 7.54607 10.7828 7.99043Z"
        fill="#265AA5"
      />
    </svg>
  );
};
