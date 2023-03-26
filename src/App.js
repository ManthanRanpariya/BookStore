import React from 'react'
  // import PostDetails from './components/PostDetails'
  // import Consumer2 from "./components/Consumer2";
  // import Consumer1 from './components/Consumer1';
// import HooksMouse from './components/HooksMouse'
// import Post from './components/Post'
// import Consumer3 from "./components/Consumer3";
// import CounterHook from './components/CounterHook'
// import { UserProvider } from "./components/UserContex";
import Users from './components/Users';
// import Home from './page/Home';
// import Title from './components/Title';
// import Home from './page/Home';
// import About from './page/About'
// import UDetails from './components/UDetails'
// import Counter from './components/Counter'
// import List from './components/List'
// import Title from './components/Title'
// import FocusInput from './components/FocusInput'
// import InputRef from './components/InputRef'
// import LoginForm from './components/LoginForm'
// import RenderPropsComponent from "./components/RenderPropsComponent";
// import Users from "./components/Users";
// import LogInForm from './components/LoginForm'

// export const UserContext = React.createContext()
// export const counterContext = React.createContext()

// const initialValue =0;
// const reducer = (state,action) => {
//     switch (action) {
//         case 'increment':
//             return state + 1
//         case 'decrement':
//             return state - 1
//         case 'reset':
//             return initialValue
//         default:
//             return state
//     }
// }

function App() {

  // const[count,dispatch] = useReducer(reducer,initialValue)
  // const [page, setPage] = React.useState("Home");

  // const handleChange = () => {
  //   if (page === "Home") {
  //     setPage("About");
  //   } else {
  //     setPage("Home");
  //   }
  // };
  return (
    <div>
      {/* <LoginForm /> */}
      {/* {page === "Home" ? <Home/> : <About/>}
    <button onClick={handleChange}>Change Page</button> */}
      {/* <Title name="Title1"/>
        <Title name="Title2"/>
        <Title  name="Title3"/> */}
        {/* <Home />
        
         <Title title="mathan"desc="is a Developer"/>
         <Home /> */}

        {/* <UserContext.Provider value="Manthan Ranpariya">
        <Consumer2/>
        </UserContext.Provider> */}

         
         {/* <Counter /> */}
         {/* <List /> */}
         {/* <Title title="Manthan" description="Web Developer"/> */}
         {/* <FocusInput />  */}
         {/* <Home/> */}
         {/* <UserProvider value="Manthan Ranpariya">
        <Consumer3/>
      </UserProvider> */}
      <Users />
      {/* <Post /> */}
     {/* < HooksMouse /> */}
     {/* <PostDetails /> */}
     {/* <CounterHook/> */}
     {/* <UDetails/> */}
{/* 
     <counterContext.Provider value={{countState: count, countDispatch: dispatch}}>
        <div>
          Count - {count}
          <Consumer1/>
          <Consumer2/>
        </div>
      </counterContext.Provider> */}

    </div>
  )
}

export default App
