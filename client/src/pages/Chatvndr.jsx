// import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { io } from "socket.io-client";
// import styled from "styled-components";
// import { allUsersRoute, host } from "../utils/APIRoutes";
// import ChatContainer from "../components/ChatContainers";
// import Contacts from "../components/Contact";
// import Welcome from "../components/Welcome";

// const Chatvndr = ({ currentId, setCurrentId }) => {

  
//   const navigate = useNavigate();
//   const socket = useRef();
//   const [contacts, setContacts] = useState([]);
//   const [currentChat, setCurrentChat] = useState(contacts);
//   console.log("current_chat",contacts)

//   const [user, setUser] = useState(JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)));
//   const [currentUser, setCurrentUser] = useState(user);

//   console.log("current_chat",contacts)

//   // useEffect(async () => {
//   //   if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
//   //     navigate("/authv");
//   //   } else {
//   //     setCurrentUser(
//   //       await JSON.parse(
//   //         localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
//   //       )
//   //     );
//   //   }
//   // }, []);
//     console.log("the new env username is : ",user)
//    console.log("the new env user is : ",user)
//    console.log("the new env user is : ",user.email)
//   console.log("thi is current user : ", currentUser)
//   console.log("current_chat", chat);
//     console.log("thi is contacts  : ", contacts)
  
  
//   useEffect(() => {
//     if (currentUser) {
//       socket.current = io(host);
//       socket.current.emit("add-user", currentUser._id);
//     }
//   }, [currentUser]);

//   // useEffect(async () => {
//   //   console.log("thi is CurrentChat  : ",CurrentChat)
//   //   console.log("thi is contacts  : ", contacts)
//   //   console.log("thi is currentUser._id  : ", currentUser._id)
//   //   console.log("current_chat",chat);
//   //   console.log("current_chat",chat);
//   //   if (currentUser) {

//   //     if (currentUser.isAvatarImageSet) {
//   //       const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
//   //       setContacts(data.data);
//   //     } else {
//   //    const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
//   //       setContacts(data.data);
//   //     }
//   //   }
//   // }, [currentUser]);
  
//   const handleChatChange = (chat) => {
//     setCurrentChat(chat);
//     console.log("thi is currentUser._id  : ",currentUser._id)
//     console.log("current_chat",chat);
//     console.log("current_chat",chat);

//     };
//   return (
//     <>
//       <Container>
//         <div className="container">
//           <Contacts contacts={contacts} changeChat={handleChatChange} />
//           {currentChat === undefined ? (
//             <Welcome />
        
//             ) : (
//             <ChatContainer currentChat={currentChat} socket={socket} />
//           )}
//         </div>
//       </Container>
//     </>
//   );
// }

// const Container = styled.div`
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   gap: 1rem;
//   align-items: center;
//   background-color: #131324;
//   .container {
//     height: 85vh;
//     width: 85vw;
//     background-color: #00000076;
//     display: grid;
//     grid-template-columns: 25% 75%;
//     @media screen and (min-width: 720px) and (max-width: 1080px) {
//       grid-template-columns: 35% 65%;
//     }
//   }
// `;
// export default Chatvndr

// import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { io } from "socket.io-client";
// import styled from "styled-components";
// import { allUsersRoute, host } from "../utils/APIRoutes";
// import ChatContainer from "../components/ChatContainers";
// import Contacts from "../components/Contact";
// import Welcome from "../components/Welcome";


// export default function Chatvndr() {
//   const navigate = useNavigate();
//   const socket = useRef();
//   const [contacts, setContacts] = useState([]);
//       const [user, setUser] = useState(JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)));
//   const [currentChat, setCurrentChat] = useState(axios.get(`${allUsersRoute}/${currentUser._id}`));
//   const [currentUser, setCurrentUser] = useState(user);
//    console.log("the new env user is : ",user)
//    console.log("the new env user is : ",user.email)
//    console.log("thi is current user : ",currentUser)
//   useEffect(async () => {
//     if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
//       navigate("/authv");
//     } else {
//       setCurrentUser(
//         await JSON.parse(
//           localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
//         )
//       );
//     }
//   }, []);
//   useEffect(() => {
//     if (currentUser) {
//       socket.current = io(host);
//       socket.current.emit("add-user", currentUser._id);
//     console.log("the currentuser",currentUser)
    
//     }
//     console.log(currentUser)
//     console.log("the currentuser",currentUser)


//   }, [currentUser]);

//   // useEffect(async () => {
//   //   if (currentUser) {
     
//   //       const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
//   //       console.log(currentUser._id)
//   //       console.log("this is data",data.data)
//   //       console.log("this is data",data.data)
//   //       setContacts(data.data);
   
//   //   }
//   // }, [currentUser]);
//   const handleChatChange = (chat) => {
//     setCurrentChat(chat);
//     console.log(chat)
//         console.log("thdata",Contacts)

//   };
//   return (
//     <>
//       <Container>
//         <div className="container">
//           <Contacts contacts={contacts} changeChat={handleChatChange} />
//           {currentChat === undefined ? (
//             <Welcome />
        
//             ) : (
//             <ChatContainer currentChat={currentChat} socket={socket} />
//           )}
//         </div>
//       </Container>
//     </>
//   );
// }

// const Container = styled.div`
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   gap: 1rem;
//   align-items: center;
//   background-color: #131324;
//   .container {
//     height: 85vh;
//     width: 85vw;
//     background-color: #00000076;
//     display: grid;
//     grid-template-columns: 25% 75%;
//     @media screen and (min-width: 720px) and (max-width: 1080px) {
//       grid-template-columns: 35% 65%;
//     }
//   }
// `;






// import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { io } from "socket.io-client";
// import styled from "styled-components";
// import { allUsersRoute, host } from "../utils/APIRoutes";
// import ChatContainer from "../components/ChatContainers";
// import Contacts from "../components/Contact";
// import Welcome from "../components/Welcome";

// export default function Chatvndr() {




//   const navigate = useNavigate();
//   const socket = useRef();
//   const [contacts, setContacts] = useState([]);
//   const [currentChat, setCurrentChat] = useState(undefined);
//   const [currentUser, setCurrentUser] = useState(undefined);
//   useEffect(async () => {
//     if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
//       navigate("/login");
//     } else {
//       setCurrentUser(
//         await JSON.parse(
//           localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
//         )
//       );
//     }
//   }, []);
//   useEffect(() => {
//     if (currentUser) {
//       socket.current = io(host);
//       socket.current.emit("add-user", currentUser._id);
//     }
//   }, [currentUser]);
// // console.log(currentUser.isAvatarImageSet)
//   useEffect(async () => {
//     if (currentUser) {
//       if (currentUser.isAvatarImageSet) {
//         const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
//         setContacts(data.data);
//       } else {
//         navigate("/setAvatar");
//       }
//     }
//   }, [currentUser]);
//   const handleChatChange = (chat) => {
//     setCurrentChat(chat);
//   };
//   return (
//     <>
//       <Container>
//         <div className="container">
//           <Contacts contacts={contacts} changeChat={handleChatChange} />
//           {currentChat === undefined ? (
//             <Welcome />

//           ) : (
//             <ChatContainer currentChat={currentChat} socket={socket} />
//           )}
//         </div>
//       </Container>
//     </>
//   );
// }

// const Container = styled.div`
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   gap: 1rem;
//   align-items: center;
//   background-color: #131324;
//   .container {
//     height: 85vh;
//     width: 85vw;
//     background-color: #00000076;
//     display: grid;
//     grid-template-columns: 25% 75%;
//     @media screen and (min-width: 720px) and (max-width: 1080px) {
//       grid-template-columns: 35% 65%;
//     }
//   }
// `;



import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import styled from "styled-components";
import { allUsersRoute, host } from "../utils/APIRoutes";
import ChatContainer from "../components/ChatContainers";
import Contacts from "../components/Contact";
import Welcome from "../components/Welcome";

export default function Chatvndr() {




  const navigate = useNavigate();
  const socket = useRef();
  const [contacts, setContacts] = useState([]);
  const [currentChat, setCurrentChat] = useState(undefined);
   const [user, setUser] = useState(JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)));
  
  const [currentUser, setCurrentUser] = useState(user);
  useEffect(async () => {
    if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/login");
    } else {
      setCurrentUser(
        await JSON.parse(
          localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
        )
      );
      console.log("wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww",currentUser._id)

    }
  }, []);
        const data =  axios.get(`https://qwerew.herokuapp.com/api/auth/allusers/${currentUser._id}`);

  useEffect(() => {
    if (currentUser) {
      socket.current = io(host);
      socket.current.emit("add-user", currentUser);
    }
  }, [currentUser]);
      console.log("QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ",currentUser)

  useEffect(async () => {

    
     
       let result = await fetch(`https://qwerew.herokuapp.com/api/auth/allusers/${currentUser._id}`)
      result = await result.json()
      setContacts(result)
        console.log("chchchchchhchchchchchchchchchch",result)
      
    
  },[]);


  

  const handleChatChange = (chat) => {
    console.log("the current chat",chat)
    setCurrentChat(chat);
    console.log("the current chat",currentChat)


  };
  return (
    <>
      <Container>
        <div className="container">
          <Contacts contacts={contacts} changeChat={handleChatChange} />
          {currentChat === undefined ? (
            <Welcome />

          ) : (
            <ChatContainer currentChat={currentChat} socket={socket} />
          )}
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .container {
    height: 85vh;
    width: 85vw;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;
