import LoadingScreen from "react-loading-screen";
import { Spinner } from "react-bootstrap";
import avatar from "../media/logo.png";
const Loader = () => {
  return (
    <div>
      <LoadingScreen
        loading={true}
        bgColor="#7c74e9"
        spinnerColor="#fff"
        textColor="#676767"
        // logoSrc={avatar}
      ></LoadingScreen>
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loader;
