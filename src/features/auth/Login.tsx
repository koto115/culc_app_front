import styled from 'styled-components';
import { SyntheticEvent, useState } from 'react';
import 
{ fetchAsyncGetJWT,
  fetchAsyncRegister,
  resetOpenSignIn,
  resetOpenSignUp,
  selectOpenSignIn,
  selectOpenSignUp,
  setOpenSchedule,
  setOpenSignIn,
  setOpenSignUp } from './authFunc';
import { fetchAsyncCreateSchedule, fetchAsyncGetSchedule } from '../schedule/ScheduleSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../app/store';
import Modal from 'react-modal'
import UpdateSchedule from '../schedule/schedule';
const Container = styled.div`
    margin: 0 auto;
    display: flex;
`

const Login: React.FC = () => {
  Modal.setAppElement("#root");

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // stateの値が入っていいる
  const openSignIn = useSelector(selectOpenSignIn)
  const openSignUp = useSelector(selectOpenSignUp)

  const [isLoginError, setIsLoginError] = useState(false)

  const dispatch: AppDispatch = useDispatch();

  const handleLogin = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await dispatch(fetchAsyncGetJWT({username, password}))

    if (fetchAsyncGetJWT.fulfilled.match(result)) {
      await dispatch(fetchAsyncGetSchedule())
      dispatch(resetOpenSignIn())
      dispatch(setOpenSchedule())
      setUsername('');
      setPassword('');
      setIsLoginError(false)
    } else {
      setIsLoginError(true)
    }
  }

  const handleRegist = async (e: SyntheticEvent) => {
    e.preventDefault();
    const result = await dispatch(fetchAsyncRegister({username, password}))
    const data = { nickName:'anonymas', subs: [""]}

    if (fetchAsyncRegister.fulfilled.match(result)) {
      await dispatch(fetchAsyncGetJWT({username, password}))
      await dispatch(fetchAsyncCreateSchedule(data))
      await dispatch(fetchAsyncGetSchedule())
      dispatch(resetOpenSignUp())
      dispatch(setOpenSchedule())
      setUsername('');
      setPassword('')
    } else {
      window.alert('もう一度お試しください')
    }
  }


  return (
      <Container>
        <UpdateSchedule/>
        <Modal
          isOpen={openSignUp}
          onRequestClose={async () => {
            await dispatch(resetOpenSignUp());
          }}
        >
        <form onSubmit={handleRegist}>
        <p>Please sign up</p>
        <input onChange={e => setUsername(e.target.value)}/>
        <label>username</label>
        <br/>
        <br/>
        <input onChange={e => setPassword(e.target.value)}/>
        <label>password</label>
        <br/>
        <button type='submit'>Sign up</button>
        </form>
        <p
          onClick={async () => {
            await dispatch(setOpenSignIn());
            await dispatch(resetOpenSignUp());
            setUsername('');
            setPassword('')}}>既にアカウントをお持ちの方はこちら</p>
        </Modal>

        <Modal
          isOpen={openSignIn}
          onRequestClose={async () => {
            await dispatch(resetOpenSignIn())
          }}
        >
          <p>{isLoginError ? 'ユーザー名またはパスワードが違います':''}</p>
          <form onSubmit={handleLogin}>
          <p>Please sign in</p>
          <input onChange={e => setUsername(e.target.value)}/>
          <label>username</label>
          <br/>
          <br/>
          <input onChange={e => setPassword(e.target.value)}/>
          <label>password</label>
          <br/>
          <button type='submit'>Sign in</button>
          </form>
          <p
            onClick={async () => {
              await dispatch(setOpenSignUp())
              await dispatch(resetOpenSignIn())
              setUsername('');
              setPassword('');
              setIsLoginError(false)}}>新規会員様はこちら</p>
        </Modal>
      </Container>
    )
}

export default Login;
