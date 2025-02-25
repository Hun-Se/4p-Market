import { useRef, useCallback } from "react";
import UploadHeader from "../../Components/header/UploadHeader";
import UploadIconBtn from "../../Components/button/UploadIconBtn";
import profileimg from "../../assets/icon-profile-small.svg";
import "./UploadPost.scss";

function Upload() {
  const textRef = useRef();
  const handleResizeHeight = useCallback(async () => {
    textRef.current.style.height = textRef.current.scrollHeight + "px";
  });

  return (
    <>
      <UploadHeader />
      <div className="container-uploadpost">
        <form method="post" className="wraper-form-uploadpost">
          <img
            src={profileimg}
            alt="프로필 사진입니다."
            className="img-profile-uploadpost"
          />
          <textarea
            name="textarea-uploadpost"
            ref={textRef}
            className="textarea-uploadpost"
            placeholder="게시글 입력하기"
            onInput={handleResizeHeight}
            maxLength="2000"
          />
          <UploadIconBtn img="upload-file.svg" name="upload-post" />
        </form>
      </div>
    </>
  );
}

export default Upload;
