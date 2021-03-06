import React, { useState } from 'react'
import './sign-in.styles.scss'
import { connect } from 'react-redux'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions'


const SignIn = ({ emailSignInStart, googleSignInStart }) => {

  const [userCredentials, setuserCredentials] = useState({ email: '', password: '' })
  const { email, password } = userCredentials

  const handleSubmit = async event => {
    event.preventDefault()
    emailSignInStart(email, password)
  }

  const handleChange = event => {
    const { value, name } = event.target
    setuserCredentials({ ...userCredentials, [name]: value })
  }
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          label="email"
          type="email"
          value={email}
          required
          handleChange={handleChange}
        />
        <FormInput
          name="password"
          label="password"
          type="password"
          value={password}
          required
          handleChange={handleChange}
        />
        <div className="buttons">
          <CustomButton type="submit" value="Submit Form">
            {' '}
                  Sign in{' '}
          </CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStart}
            isGoogleSignIn={true}
          >
            {' '}
                  Sign in with Google{' '}
          </CustomButton>
        </div>
      </form>
    </div>
  );
}


const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);