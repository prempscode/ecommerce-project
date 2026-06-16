import Header from "../../components/Header";
import "./NotFound.css";
const NotFound = () => {
  return (
    <>
      <link
        rel="icon"
        type="image/png"
        href="/images/title-silkroadmaster-logo.png"
      />
      <Header></Header>
      <div className="not-found-container">
        <img src="/images/not-found.png"></img>
      </div>
    </>
  );
};

export default NotFound;
