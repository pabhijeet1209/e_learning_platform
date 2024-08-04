import { Card, Col, Drawer } from "antd";
import "./StampCard.css";
import { CertificationSvg } from "../../Assets/CretificationSvg";
import { VideoPlaySvg } from "../../Assets/VideoPlaySvg";
import { CollectionSvg } from "../../Assets/CollectionSvg";
import { LevelUpSvg } from "../../Assets/LevelUpSvg";

export const StampCard = (props) => {
  const title = props?.data?.title;
  const type = props?.data?.type;

  const getSvg = (typ) => {
    switch (typ) {
      case "certification":
        return <CertificationSvg />;
      case "duration":
        return (
          <VideoPlaySvg
            data={{ height: "70px", width: "100px", showStyle: true }}
          />
        );
      case "lessions":
        return <CollectionSvg />;
      case "levelup":
        return <LevelUpSvg />;
      default:
        return <div>Unknown status.</div>; // Fallback for unknown types
    }
  };
  return (
    <center>
      <Card
        className="stap-card"
        style={{
          position: "relative",
          width: "130px",
          height: "130px",
          marginRight: "10px",
          // border: "10px solid white",
          // borderStyle: "none dotted",
          // background:
          //   "linear-gradient(357deg,  rgba(149,151,255,1) 24%, rgba(224,220,220,1) 86%)",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            height: "70px",
            width: "100px",
            background: "white",
            borderRadius: "8px",
          }}
        >
          <span
            style={{ fontSize: "12px", color: "GrayText", fontWeight: "500" }}
          >
            {title}
          </span>
        </div>
        <div className="stap-card-content">{getSvg(type)}</div>
      </Card>
    </center>
  );
};
