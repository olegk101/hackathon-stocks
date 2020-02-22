import React from 'react';

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.userIsLoggedIn = props.isLoggedIn;
  }

  render () {
    if (!this.userIsLoggedIn) {
      return (
        <div className="container mx-auto max-w-md">
          <div className="font-bold text-4xl text-center pt-16 pb-20">
            The Portfolio Tracker
          </div>
          <div className="w-full max-w-md" >
            <form action="" className="flex flex-col items-center bg-white shadow-md rounded px-8 py-8 pt-8">
              <div className="w-full px-4 pb-4">
                <label htmlFor="email" className="text-sm block font-bold  pb-2">EMAIL ADDRESS</label>
                <input type="email" name="email" id="" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 " placeholder="Johnbull@example.com"/>
              </div>
              <div  className="w-full px-4 pb-4">
                <label htmlFor="password" className="text-sm block font-bold pb-2">PASSWORD</label>
                <input type="password" name="email" id="" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" placeholder="Enter your password"/>
              </div>
              <div className="pt-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Sign In</button>
              </div>
            </form>
          </div>
        </div>
      )
    }
    return null;
  }
}

export default Login;
