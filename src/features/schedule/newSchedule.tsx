import styled from 'styled-components'
import { Button } from '@material-ui/core';
import { resetOpenSchedule, resetSubsArray, setOpenSignIn } from '../auth/authFunc';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../app/store';

const ScTable = styled.table`
  border: 1px solid;
  border-radius: 5px;
  margin-bottom:30px;
`

const ScTh = styled.tr`
  display: flex;
  margin-left: 60px;
  margin-bottom: 10px;
`

const ScTr = styled.tr`
  border: 1px, solid, black;
  display: flex;
  margin-bottom: 10px;
`

const ScDays = styled.td`
  width: 100%;
  border: 1px, solid,;
  display: flex;
  flex-direction: column;
`

const ScTime = styled.td`
  text-align: center;
  width: 60px;
`

const ScTd = styled.td`
  display: flex;
  flex-direction: column;
  width: 100px;
  margin-right: 5px;
  border-radius: 5px;
`

const NewSchedule: React.FC<{value1: string[]}> = ({value1}) => {
  const dispatch: AppDispatch = useDispatch()

  return (
    <div style={{width: '710px', margin: '0 auto'}}>
      <Button
        style={{float:'right', marginRight: ''}}
        onClick={() => {
          localStorage.removeItem("localJWT")
          dispatch(resetOpenSchedule())
          dispatch(resetSubsArray({id: 0, userSchedule: 0, nickName: "", subs: [""],}))
          dispatch(setOpenSignIn())
        }}>Logout
      </Button>
      <ScTable>
        <thead>
          <ScTh style={{backgroundColor: '#DCDCDC',
                borderTopRightRadius : '10px',}}>
            <ScDays>月</ScDays>
            <ScDays>火</ScDays>
            <ScDays>水</ScDays>
            <ScDays>木</ScDays>
            <ScDays>金</ScDays>
            <ScDays>土</ScDays>
          </ScTh>
        </thead>
        <tbody>
          <ScTr>
            <ScTime>1</ScTime>
            <ScTd style={{backgroundColor: '#DCDCDC'}}>{value1[0]}</ScTd>
            <ScTd style={{backgroundColor: '#FFABCE'}}>{value1[1]}</ScTd>
            <ScTd style={{backgroundColor: '#77EEFF'}}>{value1[2]}</ScTd>
            <ScTd style={{backgroundColor: '#99FF99'}}>{value1[3]}</ScTd>
            <ScTd style={{backgroundColor: '#FFFF88'}}>{value1[4]}</ScTd>
            <ScTd style={{backgroundColor: '#D2B48C'}}>{value1[5]}</ScTd>
          </ScTr>
          <ScTr>
            <ScTime>2</ScTime>
            <ScTd style={{backgroundColor: '#DCDCDC'}}>{value1[6]}</ScTd>
            <ScTd style={{backgroundColor: '#FFABCE'}}>{value1[7]}</ScTd>
            <ScTd style={{backgroundColor: '#77EEFF'}}>{value1[8]}</ScTd>
            <ScTd style={{backgroundColor: '#99FF99'}}>{value1[9]}</ScTd>
            <ScTd style={{backgroundColor: '#FFFF88'}}>{value1[10]}</ScTd>
            <ScTd style={{backgroundColor: '#D2B48C'}}>{value1[11]}</ScTd>
          </ScTr>
          <ScTr>
            <ScTime>3</ScTime>
            <ScTd style={{backgroundColor: '#DCDCDC'}}>{value1[12]}</ScTd>
            <ScTd style={{backgroundColor: '#FFABCE'}}>{value1[13]}</ScTd>
            <ScTd style={{backgroundColor: '#77EEFF'}}>{value1[14]}</ScTd>
            <ScTd style={{backgroundColor: '#99FF99'}}>{value1[15]}</ScTd>
            <ScTd style={{backgroundColor: '#FFFF88'}}>{value1[16]}</ScTd>
            <ScTd style={{backgroundColor: '#D2B48C'}}>{value1[17]}</ScTd>

          </ScTr>
          <ScTr>
            <ScTime>4</ScTime>
            <ScTd style={{backgroundColor: '#DCDCDC'}}>{value1[18]}</ScTd>
            <ScTd style={{backgroundColor: '#FFABCE'}}>{value1[19]}</ScTd>
            <ScTd style={{backgroundColor: '#77EEFF'}}>{value1[20]}</ScTd>
            <ScTd style={{backgroundColor: '#99FF99'}}>{value1[21]}</ScTd>
            <ScTd style={{backgroundColor: '#FFFF88'}}>{value1[22]}</ScTd>
            <ScTd style={{backgroundColor: '#D2B48C'}}>{value1[23]}</ScTd>

          </ScTr>
          <ScTr>
            <ScTime>5</ScTime>
            <ScTd style={{backgroundColor: '#DCDCDC'}}>{value1[24]}</ScTd>
            <ScTd style={{backgroundColor: '#FFABCE'}}>{value1[25]}</ScTd>
            <ScTd style={{backgroundColor: '#77EEFF'}}>{value1[26]}</ScTd>
            <ScTd style={{backgroundColor: '#99FF99'}}>{value1[27]}</ScTd>
            <ScTd style={{backgroundColor: '#FFFF88'}}>{value1[28]}</ScTd>
            <ScTd style={{backgroundColor: '#D2B48C'}}>{value1[29]}</ScTd>
          </ScTr>
        </tbody>
      </ScTable>
    </div>
  )
}

export default NewSchedule
