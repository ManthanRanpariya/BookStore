import React, { Component } from 'react'
// import Title from '../components/Title'
import HOC from '../components/HOC'
import UserList from '../components/UserList'

// export default class Home extends Component {
// 	constructor(){
// 		super();
// 		this.state={
// 			title:"Title",
// 			description:"Nothing",	
// 			}
// 	}
// 	changeTitle() {
// 		this.setState({
// 		  title: "This was changed title",
// 		});
// 	  }
	
//   render() {
// 	return (
// 	  <div>
		
// 		<h1>Hello {this.state.title}</h1>
//         <button
//           type="button"
//           onClick={() => this.changeTitle()}
//           className="btn btn-primary"
//         >
//           Subscribe
//         </button>
// 	  </div>
// 	)
//   }
// }

export default class Home extends Component {

	// constructor() {
	//     super();
	//     this.state = { title: "Default Title", description: "Default Description" };
	// }
  
	render() {
	  const userData = [
		{ID : 1, Name : 'Manthan'},
		{ID : 2, Name : 'Anil'},
		{ID : 3, Name : 'Sandip'},
		{ID : 4, Name : 'Jenis'},
		{ID : 5, Name : 'Vijay'}
	  ]
  
	  const Users = HOC(UserList, userData)
	  return (
		// <div>
		//    <>
		//   <h1>This home page</h1>
		// <div>
		//   <Title
		//     Title1="first title"
		//     Title2="second title"
		//     Title3="third title"
		//     titlestate={this.state.title}
		//     descriptionstate={this.state.description}
  
		//   />
		// </div>
		// <Counter/>
  
		// 
		<div>
			<Users />
		</div>
	  )
	}
  }