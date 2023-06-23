import './index.css'

import {withRouter, Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

const Login = props => {
  const onClickLogin = async () => {
    const username = 'rahul'
    const password = 'rahul@2021'
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    Cookies.set('jwt_token', data.jwt_token, {expires: 30})
    const {history} = props
    history.replace('/')
  }

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <div className="hello">
      <h1>Please Login</h1>
      <button type="submit" className="button" onClick={onClickLogin}>
        Login with Sample Creds
      </button>
    </div>
  )
}

export default withRouter(Login)
