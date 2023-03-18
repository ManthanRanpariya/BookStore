import Consumer3 from "./components/Consumer3";
import { UserProvider } from "./components/UserContex";
// import Home from './page/Home';
// import Title from './components/Title';
// import Home from './page/Home';
// import About from './page/About'
// import Counter from './components/Counter'
// import List from './components/List'
// import Title from './components/Title'
// import FocusInput from './components/FocusInput'
// import InputRef from './components/InputRef'
// import LoginForm from './components/LoginForm'
// import RenderPropsComponent from "./components/RenderPropsComponent";



import React from 'react'
// import LogInForm from './components/LoginForm'

function App() {
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
         
         {/* <Counter /> */}
         {/* <List /> */}
         {/* <Title title="Manthan" description="Web Developer"/> */}
         {/* <FocusInput />  */}
         {/* <Home/> */}
         <UserProvider value="Manthan Ranpariya">
        <Consumer3/>
      </UserProvider>

    </div>
  )
}

export default App
