import './TextWithHrLine.css'

export const TextWithHrLine = (props) => {
    const text = props?.data?.text;
    const color = props?.data?.color;
  return (
    <div class="container">
      <div class="line"></div>
      <div class="text" style={{background: `${color}`}}>
        <span style={{background:`${color}`}}>{text}</span>
      </div>
      <div class="line"></div>
    </div>
  );
};
