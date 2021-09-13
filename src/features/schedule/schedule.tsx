import { useState } from 'react'
import styled from 'styled-components';
import { FriBefore, MonBefore, SatBefore, ThuBefore, TueBefore, WedBefore } from './mulucule/beforUpdate';
import NewSchedule from './newSchedule';
import { Button } from '@material-ui/core';
import Modal from 'react-modal';
import { resetOpenSchedule, selectOpenMySchedule, selectSchedule, setSubsArray } from '../auth/authFunc';
import { fetchAsyncUpdateSchedule } from './ScheduleSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../app/store';

const Container = styled.div`
  text-align: center;
`

const Title = styled.p`
  font-family: 'Corben', cursive;
  color: #228B22;
  font-size: 32px;
  margin-bottom: 10px;
`

const ScTable = styled.table`
  border: 1px solid;
  border-radius: 5px;
  margin: 0 auto 30px auto;
`

const ScTh = styled.th`
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
`

export const UpdateSchedule: React.FC = () => {
  Modal.setAppElement("#root");
  const dispatch: AppDispatch = useDispatch();

  const [isUpdate, setIsUpdate] = useState(true)

  const openSchedule = useSelector(selectOpenMySchedule)
  const schedule = useSelector(selectSchedule)
  console.log(schedule)
  const subs: string[] = schedule.subs

  let process = subs.slice()
  console.log(process)

  const changeSub = () => {
    dispatch(setSubsArray(process))
    const postData = {
      id: schedule.id,
      nickName: schedule.nickName,
      userSchedule: schedule.userSchedule,
      subs: process,
    }
    dispatch(fetchAsyncUpdateSchedule(postData))
    console.log(subs)
  }


  return (
    <>
      <Modal
        isOpen={openSchedule}
        onRequestClose={async () => {
          await dispatch(resetOpenSchedule)
        }}
      >
      <Container>
        <Title>Grade2 second semester</Title>
        {isUpdate ? <NewSchedule value1={subs}/> :
        <>
          <ScTable>
            <thead>
              <ScTh>
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
                <ScTd>
                  <MonBefore value1={subs[0]}/>
                  <input
                    style={{ width: '95px' }}
                    onChange={e => process[0] = e.target.value}
                    placeholder={process[0]}
                  />
                </ScTd>
                <ScTd>
                  <TueBefore value1={subs[1]}/>
                  <input
                    style={{ width: '95px' }}
                    onChange={e => process[1] = e.target.value}
                    placeholder={process[1]}
                  />
                </ScTd>
                <ScTd>
                  <WedBefore value1={subs[2]}/>
                  <input
                    style={{ width: '95px' }}
                    onChange={e => process[2] = e.target.value}
                    placeholder={process[2]}
                  />
                </ScTd>
                <ScTd>
                  <ThuBefore value1={subs[3]}/>
                  <input
                    style={{ width: '95px' }}
                    onChange={e => process[3] = e.target.value}
                    placeholder={process[3]}
                  />
                </ScTd>
                <ScTd>
                  <FriBefore value1={subs[4]}/>
                  <input
                    style={{ width: '95px' }}
                    onChange={e => process[4] = e.target.value}
                    placeholder={process[4]}
                  />
                </ScTd>
                <ScTd>
                  <SatBefore value1={subs[5]}/>
                  <input
                    style={{ width: '95px' }}
                    onChange={e => process[5] = e.target.value}
                    placeholder={process[5]}
                  />
                </ScTd>
              </ScTr>
              <ScTr>
                <ScTime>2</ScTime>
                <ScTd>
                  <MonBefore value1={subs[6]}/>
                  <input
                    style={{ width: '95px' }}
                    onChange={e => process[6] = e.target.value}
                    placeholder={process[6]}
                  />
                </ScTd>
                <ScTd>
                  <TueBefore value1={subs[7]}/>
                  <input
                    style={{ width: '95px' }}
                    onChange={e => process[7] = e.target.value}
                    placeholder={process[7]}
                  />
                </ScTd>
                <ScTd>
                  <WedBefore value1={subs[8]}/>
                  <input
                    style={{ width: '95px' }}
                    onChange={e => process[8] = e.target.value}
                    placeholder={process[8]}
                  />
                </ScTd>
                <ScTd>
                  <ThuBefore value1={subs[9]}/>
                  <input
                    style={{ width: '95px' }}
                    onChange={e => process[9] = e.target.value}
                    placeholder={process[9]}
                  />
                </ScTd>
                <ScTd>
                  <FriBefore value1={subs[10]}/>
                  <input
                    style={{ width: '95px' }}
                    onChange={e => process[10] = e.target.value}
                    placeholder={process[10]}
                  />
                </ScTd>
                <ScTd>
                  <SatBefore value1={subs[11]}/>
                  <input
                    style={{ width: '95px' }}
                    onChange={e => process[11] = e.target.value}
                    placeholder={process[11]}
                  />
                </ScTd>
              </ScTr>
              <ScTr>
                <ScTime>3</ScTime>
                <ScTd>
                  <MonBefore value1={subs[12]}/>
                  <input
                    style={{ width: '95px' }}
                    onChange={e => process[12] = e.target.value}
                    placeholder={process[12]}
                  />
                </ScTd>
                <ScTd>
                  <TueBefore value1={subs[13]}/>
                  <input
                    style={{ width: '95px' }}
                    onChange={e => process[13] = e.target.value}
                    placeholder={process[13]}
                  />
                </ScTd>
                <ScTd>
                  <WedBefore value1={subs[14]}/>
                  <input
                    style={{ width: '95px' }}
                    onChange={e => process[14] = e.target.value}
                    placeholder={process[14]}
                  />
                </ScTd>
                <ScTd>
                  <ThuBefore value1={subs[15]}/>
                  <input
                    style={{ width: '95px' }}
                    onChange={e => process[15] = e.target.value}
                    placeholder={process[15]}
                  />
                </ScTd>
                <ScTd>
                  <FriBefore value1={subs[16]}/>
                  <input
                    style={{ width: '95px' }}
                    onChange={e => process[16] = e.target.value}
                    placeholder={process[16]}
                  />
                </ScTd>
                <ScTd>
                  <SatBefore value1={subs[17]}/>
                  <input
                    style={{ width: '95px' }}
                    onChange={e => process[17] = e.target.value}
                    placeholder={process[17]}
                  />
                </ScTd>
              </ScTr>
              <ScTr>
                <ScTime>4</ScTime>
                <ScTd>
                  <MonBefore value1={subs[18]}/>
                  <input
                    style={{ width: '95px' }}
                    onChange={e => process[18] = e.target.value}
                    placeholder={process[18]}
                  />
                </ScTd>
                <ScTd>
                  <TueBefore value1={subs[19]}/>
                  <input
                    style={{ width: '95px' }}
                    onChange={e => process[19] = e.target.value}
                    placeholder={process[19]}
                  />
                </ScTd>
                <ScTd>
                  <WedBefore value1={subs[20]}/>
                  <input
                    style={{ width: '95px' }}
                    onChange={e => process[20] = e.target.value}
                    placeholder={process[20]}
                  />
                </ScTd>
                <ScTd>
                  <ThuBefore value1={subs[21]}/>
                  <input
                    style={{ width: '95px' }}
                    onChange={e => process[21] = e.target.value}
                    placeholder={process[21]}
                  />
                </ScTd>
                <ScTd>
                  <FriBefore value1={subs[22]}/>
                  <input
                    style={{ width: '95px' }}
                    onChange={e => process[22] = e.target.value}
                    placeholder={process[22]}
                  />
                </ScTd>
                <ScTd>
                  <SatBefore value1={subs[23]}/>
                  <input
                    style={{ width: '95px' }}
                    onChange={e => process[23] = e.target.value}
                    placeholder={process[23]}
                  />
                </ScTd>
              </ScTr>
              <ScTr>
                <ScTime>5</ScTime>
                <ScTd>
                  <MonBefore value1={subs[24]}/>
                  <input
                    style={{ width: '95px' }}
                    onChange={e => process[24] = e.target.value}
                    placeholder={process[24]}
                  />
                </ScTd>
                <ScTd>
                  <TueBefore value1={subs[25]}/>
                  <input
                    style={{ width: '95px' }}
                    onChange={e => process[25] = e.target.value}
                    placeholder={process[25]}
                  />
                </ScTd>
                <ScTd>
                  <WedBefore value1={subs[26]}/>
                  <input
                    style={{ width: '95px' }}
                    onChange={e => process[26] = e.target.value}
                    placeholder={process[26]}
                  />
                </ScTd>
                <ScTd>
                  <ThuBefore value1={subs[27]}/>
                  <input
                    style={{ width: '95px' }}
                    onChange={e => process[27] = e.target.value}
                    placeholder={process[27]}
                  />
                </ScTd>
                <ScTd>
                  <FriBefore value1={subs[28]}/>
                  <input
                    style={{ width: '95px' }}
                    onChange={e => process[28] = e.target.value}
                    placeholder={process[28]}
                  />
                </ScTd>
                <ScTd>
                  <SatBefore value1={subs[29]}/>
                  <input
                    style={{ width: '95px' }}
                    onChange={e => process[29] = e.target.value}
                    placeholder={process[29]}
                  />
                </ScTd>
              </ScTr>
            </tbody>
          </ScTable>
          <Button
          variant="contained" color="secondary"
          style={{display: 'flex', margin: '10px auto'}}
          type="submit"
          onClick={() => changeSub()}
          >
            更新
          </Button>
        </>
          }
          <Button variant="outlined" color="primary" onClick={() => setIsUpdate(!isUpdate)}>
            {isUpdate ?  '更新画面へ' : '変更できない時間割'}
          </Button>
        </Container>
        </Modal>
      </>
  )
}

export default UpdateSchedule;