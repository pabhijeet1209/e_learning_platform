export const CircleClip = () => (
  <div className="clip-art">
    <div style={{ position: "relative", zIndex: 1 }}>
      <svg
        width="200"
        height="300"
        viewBox="0 0 200 300"
        style={{
          position: "absolute",
          top: "0%",
          right: "0%",
          left: "0%",
          opacity: "0.1",
        }}
      >
        <circle class="circle one" cx="100" cy="10" r="70" fill="gray" />
      </svg>
    </div>
    <div style={{ position: "relative", zIndex: 0 }}>
      <svg
        width="200"
        height="300"
        viewBox="0 0 200 300"
        style={{
          position: "absolute",
          top: "0%",
          left: "0%",
          opacity: "0.11",
        }}
      >
        <circle class="circle one" cx="100" cy="10" r="100" fill="gray" />
      </svg>
    </div>
  </div>
);
