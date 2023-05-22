import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  

  return (
    <div style={{ height: "100vh" }}>
      <PrettyChatWindow 
      projectId='7c4d462b-dc4a-4830-a98e-c1b250b19a80'
      username={props.user.username}
      secret={props.user.secret}
      style={{height:'100%'}}
      />
    </div>
  );
};
export default ChatsPage;
