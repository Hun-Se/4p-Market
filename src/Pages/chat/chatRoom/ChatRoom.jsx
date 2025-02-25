import ChatRoomHeader from "../../../Components/header/ChatRoomHeader";
import ChatroomFooter from "../../../Components/footer/ChatroomFooter";
import Chatting from "./Chatting";
import "./ChatRoom.scss";

/* 유저네임 데이터 가져와야 함 */

function ChatRoom() {
  return (
    <>
      <ChatRoomHeader userName="수삐뽀삐" />
      <main className="chatting-room-main">
        <h2 className="a11y-hidden">채팅창</h2>
        <Chatting />
      </main>
      <ChatroomFooter />
    </>
  );
}

export default ChatRoom;
