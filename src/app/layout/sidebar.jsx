// import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useState } from "react";
// import { useHistory, useRouteMatch } from "react-router-dom";
// import styled from "styled-components";
// import { colorBase, colorBlack, colorPrimary, colorWhite } from './../../core/consts/colors';
// import { deleteToken } from './../../feature/login/data/local/auth_helpers';
// import PowerOff from "./../assets/power-off-solid.svg";



// const Container = styled.div`
//   position: fixed;

//   .active {
//     border-right: 4px solid var(--white);

//     img {
//       filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
//         brightness(103%) contrast(103%);
//     }
//   }
// `;

// const Button = styled.button`
//   background-color: ${colorPrimary};
//   color: ${colorWhite};
//   border: none;
//   width: 2.5rem;
//   height: 2.5rem;
//   border-radius: 50%;
//   margin: 0.5rem 0 0 0.5rem;
//   cursor: pointer;

//   display: flex;
//   justify-content: center;
//   align-items: center;

//   position: relative;

//   &::before,
//   &::after {
//     content: "";
//     background-color: ${colorBase};
//     height: 2px;
//     width: 1rem;
//     position: absolute;
//     transition: all 0.3s ease;
//   }

//   &::before {
//     top: ${(props) => (props.clicked ? "1.5" : "1rem")};
//     transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
//   }

//   &::after {
//     top: ${(props) => (props.clicked ? "1.2" : "1.5rem")};
//     transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
//   }
// `;

// const SidebarContainer = styled.div`
//   background-color: ${colorPrimary};
//   width: 3.5rem;
//   height: 80vh;
//   margin-top: 1rem;
//   border-radius: 0 30px 30px 0;
//   padding: 1rem 0;

//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;

//   position: relative;
// `;

// const SlickBar = styled.ul`
//   color: ${ colorBlack };
//   list-style: none;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background-color: ${colorPrimary};
//   padding: 2rem 0.5rem;
//   position: absolute;
//   top: 6rem;
//   left: 0;
//   width: ${(props) => (props.clicked ? "12rem" : "2.5rem")};
//   transition: all 0.5s ease;
//   border-radius: 0 30px 30px 0;
// `;

// const Item = styled.div`
//   text-decoration: none;
//   color: ${ colorWhite };
//   width: 100%;
//   padding: 1rem 0;
//   cursor: pointer;

//   display: flex;
//   padding-left: 1rem;

//   &:hover {
//     border-right: 4px solid ${ colorBlack };

//     div {
//       filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
//         brightness(103%) contrast(103%);
//     }
//   }
// `;

// const Text = styled.span`
//   width: ${(props) => (props.clicked ? "100%" : "0")};
//   overflow: hidden;
//   margin-left: ${(props) => (props.clicked ? "1.5rem" : "1.5rem")};
//   transition: all 0.3s ease;
//   color: ${colorWhite};
// `;

// const Profile = styled.div`
//   width: ${(props) => (props.clicked ? "260px" : "25px")};
//   height: 3rem;
//   padding: 0.5rem 0;
//   border-radius: 20px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-left: ${(props) => (props.clicked ? "13rem" : "0")};

//   background-color: ${colorPrimary};
//   color: ${ colorBlack };

//   transition: all 0.3s ease;

//   img {
//     width: 2.5rem;
//     height: 2.5rem;
//     border-radius: 50%;
//     cursor: pointer;

//     &:hover {
//       border: 2px solid ${colorWhite};
//       padding: 2px;
//     }
//   }
// `;

// const Details = styled.div`
//   display: ${(props) => (props.clicked ? "flex" : "none")};
//   justify-content: space-between;
//   align-items: center;
// `;

// const Name = styled.div`
//   padding: 0 1.5rem;

//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   h4 {
//     display: inline-block;
//   }

//   a {
//     font-size: 0.8rem;
//     text-decoration: none;
//     color: ${ colorBlack };

//     &:hover {
//       text-decoration: underline;
//     }
//   }
// `;

// const Logout = styled.button`
//   border: none;
//   width: 2rem;
//   height: 2rem;
//   background-color: transparent;

//   img {
//     width: 100%;
//     height: auto;
//     filter: invert(15%) sepia(70%) saturate(6573%) hue-rotate(2deg)
//       brightness(100%) contrast(126%);
//     transition: all 0.3s ease;
//     &:hover {
//       border: none;
//       padding: 0;
//       opacity: 0.5;
//     }
//   }
// `;

// const Sidebar = () => {

//   const { url } = useRouteMatch();
//   const [click, setClick] = useState(false);
//   const handleClick = () => setClick(!click);

//   const [profileClick, setprofileClick] = useState(false);

//   const handleProfileClick = () => setprofileClick(!profileClick);
//   let history = useHistory();

//   function PushRouter(nameRuta) {
//     setClick(false)
// 		history.push(`${url}/${nameRuta}`);
// 	}

//   function xPushRouter() {
//     deleteToken()
// 		history.push('/');
// 	}


//   return (
//     <Container>
//       <Button clicked={click} onClick={() => handleClick()}>
//       </Button>
//       <SidebarContainer >
//           {/* <h4 style={{paddingTop:'20px', color: colorWhite }}>C S J</h4> */}
//         <SlickBar clicked={click}>
//           <Item   onClick={() => PushRouter('home')} >
//             <div>
//                 <FontAwesomeIcon icon={faLayerGroup}/>
//             </div>
//             <Text clicked={click}>anexos</Text>
//           </Item>
//         </SlickBar>
//         <Profile clicked={profileClick}>
//           <img onClick={() => handleProfileClick()} src="https://picsum.photos/200" alt="Profile"/>
//           <Details clicked={profileClick}>
//             <Name style={{color:colorWhite }}>
//               <h4>Julio porlles pardo</h4>
//               <h4>Admin</h4>
//             </Name>
//             <Logout onClick={()=> xPushRouter()}>
//               <img src={PowerOff} alt="logout" />
//             </Logout>
//           </Details>
//         </Profile>
//       </SidebarContainer>
//     </Container>
//   );
// };

// export default Sidebar;
