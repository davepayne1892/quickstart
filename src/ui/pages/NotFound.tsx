import { Button, Image } from "react-bootstrap";
import notFound from "../../assets/notFound.svg";

export const NotFound = () => {
  return (
    <>
      <Image src={notFound} style={{ width: "32rem" }} />
      <Button variant="primary" aria-label="home" href="/">
        Go to the Homepage
      </Button>
    </>
  );
};
