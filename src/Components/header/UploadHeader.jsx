import BackBtn from "../button/BackBtn";
import Savebtn from "../button/SaveBtn";

function UploadHeader() {
  return (
    <header className="header-layout">
      <section className="top-bar">
        <BackBtn />
        <Savebtn text="업로드" />
      </section>
    </header>
  );
}

export default UploadHeader;
