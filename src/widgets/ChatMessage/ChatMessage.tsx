import { useRef, useEffect, useState } from 'react';
// import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
// import { addComment, fetchRoom } from "../../features/roomSlice";
import styles from './chatmessage.module.scss';
// import { socket } from '../ChatForm/ChatForm';
import {
  useUniversityServiceGetUniversity,
  useUniversityServiceGetUniversityById,
  useUniversityServiceGetUniversityKey,
  useUniversityServicePostUniversityAddCommentById,
  useUniversityServicePostUniversityById,
  useUserServiceGetUsers,
} from '@/shared/api/openApi/queries';
import { parseJwt } from '@/shared/hooks/parseJWT';
// import Disk from "../Disk/Disk";
// import Web from "../../pages/Web/Web";
import { connect } from 'socket.io-client';
export const socket = connect('http://localhost:3010');

export const ChatMessage = ({ universityId }: { universityId: string }) => {
  const token = localStorage.getItem('token');

  const navigate = useNavigate();
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const { id: userID } = parseJwt(token as string);
  const { data: university } = useUniversityServiceGetUniversityById({
    id: universityId as string,
  });
  const { data: allUniversity } = useUniversityServiceGetUniversity();
  const { data: allUsers } = useUserServiceGetUsers();

  const addComment = useUniversityServicePostUniversityAddCommentById();

  const [currentMessage, setCurrentMessage] = useState('');
  const [messageList, setMessageList] = useState<
    Array<{ time: string; admin: string; message: string }>
  >([]);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollTop = messagesEndRef.current?.scrollHeight;
  };

  const messages = allUniversity?.find((message) => {
    return message._id === universityId;
  });

  const minutes =
    new Date(Date.now()).getMinutes() < 10
      ? '0' + new Date(Date.now()).getMinutes()
      : new Date(Date.now()).getMinutes();

  const hours = new Date(Date.now()).getHours();

  const sendMessage = async () => {
    await addComment.mutateAsync({
      requestBody: {
        user: userID,
        comment: currentMessage,
        time: hours + ':' + minutes,
      },
      id: universityId,
    });

    if (currentMessage !== '') {
      const messageData = {
        room: universityId,
        admin: userID,
        message: currentMessage,
        time: hours + ':' + minutes,
      };

      socket.emit('send_message', messageData);
      setMessageList((list) => [...list, messageData]);
      setCurrentMessage('');
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messageList, messages]);

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageList((list) => [...list, data]);
    });
  }, []);

  return (
    <div className={styles.bg}>
      <div className={styles.chatWindow}>
        <div className={styles.main}>
          <div className={styles.header}>
            {/* <img src={require('../../images/logo2.png')} alt="logo" onClick={handleRouteRoom} /> */}
          </div>
          <div ref={messagesEndRef} className={styles.chatForm}>
            <div className={styles.body}>
              {university?.users.map((item) => {
                return (
                  <div
                    className={userID === item.user._id ? styles.you : styles.outher}
                    key={item._id}
                  >
                    <div>
                      <div className={styles.message}>
                        <span>{item.comment}</span>
                      </div>
                      <div className={styles.comment_footer}>
                        <span className={styles.time}>{item.time}</span>
                        {/* <span className={styles.admin}>
                          {allUsers?.find((item) => item._id === userID)?.name}
                        </span> */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles.body}>
              {messageList.map((messageContent, index) => {
                return (
                  <div
                    className={userID === messageContent.admin ? styles.you : styles.outher}
                    key={index}
                  >
                    <div>
                      <div className={styles.message}>
                        <span>{messageContent.message}</span>
                      </div>
                      <div className={styles.comment_footer}>
                        <span className={styles.time}>{messageContent.time}</span>
                        {/* <span className={styles.admin}>
                          {allUsers?.find((item) => item._id === userID)?.name}
                        </span> */}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className={styles.footer}>
            <input
              type="text"
              value={currentMessage}
              placeholder="Hey..."
              onChange={(e) => setCurrentMessage(e.target.value)}
              onKeyDown={(e) => {
                e.key === 'Enter' && sendMessage();
              }}
            />
          </div>
        </div>
        {/* <div className={styles.rightBlock}>
          <Disk />
          <Web />
        </div> */}
      </div>
    </div>
  );
};
