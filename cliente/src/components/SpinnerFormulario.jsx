import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

export default function SpinnerComponenteFormulario() {
  return (
    <Button variant="contained" color="success" type="submit" disabled>
      <Spinner
        as="span"
        animation="grow"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      <span className="ms-2">CARGANDO...</span>
    </Button>
  );
}
