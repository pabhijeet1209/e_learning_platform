export const CourseNavigation = () => {
  const spaceBetween = (text, text2) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Col>
            <div style={{ color: "#4e34ed" }}>{text}</div>
            <div style={{ color: "GrayText", fontSize: "12px" }}>3:23 sec</div>
          </Col>
        </div>
        <div>
          <div>
            <VideoPlaySvg />
            <a className="course-type">{text2}</a>
          </div>
        </div>
      </div>
    );
  };
  const items = (data, idx) => {
    return {
      key: idx,
      label: (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div className="label"> {data?.title}</div>{" "}
        </div>
      ),
      children: [
        <div>
          <ul className="custom-list">
            {data?.content.map((item) => (
              <li>{spaceBetween(item?.title, "play")}</li>
            ))}
          </ul>
        </div>,
      ],
    };
  };
  return (
    <div
      className="course-navigation"
      style={{
        width: "23%",
        height: "100%",
        overflowY: "auto",
      }}
    >
      <span
        className="title"
        style={{ paddingInline: "10px", fontSize: "30px" }}
      >
        Course Content
      </span>
      <Collapse
        expandIcon={({ isActive }) => <DownArrowSvg />}
        expandIconPosition="end"
        defaultActiveKey={[0]}
        onChange={handleChange}
        items={CourseContent.map((data, idx) => items(data, idx))}
        className="collapse"
      />
    </div>
  );
};
