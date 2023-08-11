import bg from "../assets/bg.jpg";

export default function CallBanner() {
  return (
    <div
      style={{
        position: "relative",
        height: "30vh",
        background: `url(${bg}) center/cover no-repeat`,
      }}
      className="flex justify-center items-center"
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          zIndex: 1,
        }}
      ></div>
      <h1
        style={{ position: "relative", zIndex: 2, color: "white" }}
        className="font-rob font-bold text-3xl"
      >
        Book a car by getting in touch with us{" "}
        <span className="text-red-600">(+91) 9876543210</span>
      </h1>
    </div>
  );
}
