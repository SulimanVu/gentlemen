// import io from 'socket.io-client';
// import styles from './chatform.module.scss';
// // import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from 'react-router-dom';
// import { useUserServiceGetUserById } from '@/shared/api/openApi/queries';
// import { parseJwt } from '@/shared/hooks/parseJWT';
// // import { deleteRoom } from "../../features/roomSlice";

// export const socket = io.connect('http://localhost:3001');

// const ChatForm = ({ name, _id }: { name: string; _id: string }) => {
//   // const username = useSelector((state) => state.application.login);
//   // const dispath = useDispatch();
//   const userId = parseJwt(localStorage.getItem('token') as string);
//   const { data } = useUserServiceGetUserById({ id: userId });

//   const navigate = useNavigate();

//   const joinRoom = () => {
//     if (data?.name !== '' && _id !== '') {
//       socket.emit('join_room', _id);
//       navigate(`/room/${_id}`);
//     }
//   };

//   const handleDelete = (e: any) => {
//     e.stopPropagation();
//     // dispath(deleteRoom({ id: _id }));
//   };

//   return (
//     <div className={styles.window} onClick={joinRoom}>
//       <h1>
//         Комната: <span>{name}</span>
//       </h1>
//       <button onClick={(e) => handleDelete(e)}>Удалить комнату</button>
//     </div>
//   );
// };

// export default ChatForm;
