import { MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine';

const ChatPage = () => {
    const chatProps = useMultiChatLogic( '80933605-d5e6-4bf3-9655-b69478660f03', props.user.username,props.user.secret);
    return <div style={{height :'100vh'}}>
          <MultiChatSocket {...chatProps}/>
          <MultiChatWindow {...chatProps} style= {{height:'100%'}}/>
    </div>
}
 
export default ChatPage;