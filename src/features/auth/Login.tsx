import styled from 'styled-components';
import { useState } from 'react';
import { fetchAsyncGetJWT, fetchAsyncRegister, selectIsLogin, toLogin } from './authFunc';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../app/store';
const Container = styled.div`
    margin: 0 auto;
    display: flex;
`

const Login: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const isLoginSelect = useSelector(selectIsLogin);

  const handleFunc = async () => {
    try {
      await fetchAsyncGetJWT({username, password})
      dispatch(toLogin)
    } catch {
      console.log('ログイン失敗')
    }
  }

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isRegist, setIsRegist] = useState(false)


  const handleRegist = () => {
    fetchAsyncRegister({username, password})
    fetchAsyncGetJWT({username, password})
  }

  return (
      <Container>
          <div>
            {isRegist ?
              <>
                <form>
                <p>Please sign up</p>
                <input onChange={e => setUsername(e.target.value)}/>
                <label>username</label>
                <input onChange={e => setPassword(e.target.value)}/>
                <label>password</label>
                <button type='submit'>Sign up</button>
                </form>
                <p onClick={() => setIsRegist(!isRegist)}>既にアカウントをお持ちの方はこちら</p>
              </>
            :
            <>
              <form onSubmit={() => handleFunc()}>
              <p>Please sign in</p>
              <input onChange={e => setUsername(e.target.value)}/>
              <label>username</label>
              <input onChange={e => setPassword(e.target.value)}/>
              <label>password</label>
              <button type='submit'>Sign in</button>
              </form>
              <p onClick={() => {setIsRegist(!isRegist)}}>新規会員様はこちら</p>
            </>
            }
          </div>
      </Container>
    )
}

export default Login;
