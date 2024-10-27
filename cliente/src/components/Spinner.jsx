import { Spinner } from "react-bootstrap";

export default function SpinnerComponente() {
  return (
    <Spinner
      animation="border"
      role="status"
      style={{
        height: "60px",
        width: "60px",
        marginTop: 240,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
}