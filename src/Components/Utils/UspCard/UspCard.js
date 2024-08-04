import { Card } from "antd";
import "./UspCard.css";

export const UspCard = (props) => {
  const usp = props?.data[0];
  const idx = props?.data[1] + 1;

  const cardStyle = {
    height: usp?.height,
    width: usp?.width,
    backgroundColor: usp?.backgroundColor,
  };

  return (
    <Card className="usp-card" style={cardStyle}>
      <div style={{ height: "120px" }}>
        <div className="title" style={{ color: usp?.color }}>
          {usp?.title}
        </div>
        <span className="description">{usp?.description}</span>
      </div>
      {usp?.image !== undefined && (
        <div className="usp-cover">
          <img className="usp-cover-image" src={usp?.image} alt="img" />
        </div>
      )}
      <div
        className="card-idx"
        style={{
          fontFamily: "fantasy",
          position: "absolute",
          fontSize: "6rem",
          top: -20,
          left: 2,
          opacity: 0.3,
        }}
      >
        {idx}
      </div>
    </Card>
  );
};
