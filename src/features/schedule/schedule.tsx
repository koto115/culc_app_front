import { useState } from 'react'
import styled from 'styled-components';
import { FriBefore, MonBefore, SatBefore, ThuBefore, TueBefore, WedBefore } from './mulucule/beforUpdate';
import NewSchedule from './newSchedule';
import { selectIsLogin } from '../auth/authFunc';
import { useSelector } from 'react-redux';

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
  const [sub, setSub] = useState<string[]>([])

  const [isUpdate, setIsUpdate] = useState(true)

  let process: string[] = []

  const changeSub = () => {
    // 配列に配列を代入
    setSub({...sub, ...process})
  }

  return (
    <>
      <Container>
      <Title>Grade2 second semester</Title>
      {isUpdate ? <NewSchedule value1={sub}/> :
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
                <MonBefore value1={sub[0]}/>
                <input
                  style={{ width: '95px' }}
                  onChange={e => process[0] = e.target.value}
                />
              </ScTd>
              <ScTd>
                <TueBefore value1={sub[1]}/>
                <input
                  style={{ width: '95px' }}
                  onChange={e => process[1] = e.target.value}
                />
              </ScTd>
              <ScTd>
                <WedBefore value1={sub[2]}/>
                <input
                  style={{ width: '95px' }}
                  onChange={e => process[2] = e.target.value}
                />
              </ScTd>
              <ScTd>
                <ThuBefore value1={sub[3]}/>
                <input
                  style={{ width: '95px' }}
                  onChange={e => process[3] = e.target.value}
                />
              </ScTd>
              <ScTd>
                <FriBefore value1={sub[4]}/>
                <input
                  style={{ width: '95px' }}
                  onChange={e => process[4] = e.target.value}
                />
              </ScTd>
              <ScTd>
                <SatBefore value1={sub[5]}/>
                <input
                  style={{ width: '95px' }}
                  onChange={e => process[5] = e.target.value}
                />
              </ScTd>
            </ScTr>
            <ScTr>
              <ScTime>2</ScTime>
              <ScTd>
                <MonBefore value1={sub[6]}/>
                <input
                  style={{ width: '95px' }}
                  onChange={e => process[6] = e.target.value}
                />
              </ScTd>
              <ScTd>
                <TueBefore value1={sub[7]}/>
                <input
                  style={{ width: '95px' }}
                  onChange={e => process[7] = e.target.value}
                />
              </ScTd>
              <ScTd>
                <WedBefore value1={sub[8]}/>
                <input
                  style={{ width: '95px' }}
                  onChange={e => process[8] = e.target.value}
                />
              </ScTd>
              <ScTd>
                <ThuBefore value1={sub[9]}/>
                <input
                  style={{ width: '95px' }}
                  onChange={e => process[9] = e.target.value}
                />
              </ScTd>
              <ScTd>
                <FriBefore value1={sub[10]}/>
                <input
                  style={{ width: '95px' }}
                  onChange={e => process[10] = e.target.value}
                />
              </ScTd>
              <ScTd>
                <SatBefore value1={sub[11]}/>
                <input
                  style={{ width: '95px' }}
                  onChange={e => process[11] = e.target.value}
                />
              </ScTd>
            </ScTr>
            <ScTr>
              <ScTime>3</ScTime>
              <ScTd>
                <MonBefore value1={sub[12]}/>
                <input
                  style={{ width: '95px' }}
                  onChange={e => process[12] = e.target.value}
                />
              </ScTd>
              <ScTd>
                <TueBefore value1={sub[13]}/>
                <input
                  style={{ width: '95px' }}
                  onChange={e => process[13] = e.target.value}
                />
              </ScTd>
              <ScTd>
                <WedBefore value1={sub[14]}/>
                <input
                  style={{ width: '95px' }}
                  onChange={e => process[14] = e.target.value}
                />
              </ScTd>
              <ScTd>
                <ThuBefore value1={sub[15]}/>
                <input
                  style={{ width: '95px' }}
                  onChange={e => process[15] = e.target.value}
                />
              </ScTd>
              <ScTd>
                <FriBefore value1={sub[16]}/>
                <input
                  style={{ width: '95px' }}
                  onChange={e => process[16] = e.target.value}
                />
              </ScTd>
              <ScTd>
                <SatBefore value1={sub[17]}/>
                <input
                  style={{ width: '95px' }}
                  onChange={e => process[17] = e.target.value}
                />
              </ScTd>
            </ScTr>
            <ScTr>
              <ScTime>4</ScTime>
              <ScTd>
                <MonBefore value1={sub[18]}/>
                <input
                  style={{ width: '95px' }}
                  onChange={e => process[18] = e.target.value}
                />
              </ScTd>
              <ScTd>
                <TueBefore value1={sub[19]}/>
                <input
                  style={{ width: '95px' }}
                  onChange={e => process[19] = e.target.value}
                />
              </ScTd>
              <ScTd>
                <WedBefore value1={sub[20]}/>
                <input
                  style={{ width: '95px' }}
                  onChange={e => process[20] = e.target.value}
                />
              </ScTd>
              <ScTd>
                <ThuBefore value1={sub[21]}/>
                <input
                  style={{ width: '95px' }}
                  onChange={e => process[21] = e.target.value}
                />
              </ScTd>
              <ScTd>
                <FriBefore value1={sub[22]}/>
                <input
                  style={{ width: '95px' }}
                  onChange={e => process[22] = e.target.value}
                />
              </ScTd>
              <ScTd>
                <SatBefore value1={sub[23]}/>
                <input
                  style={{ width: '95px' }}
                  onChange={e => process[23] = e.target.value}
                />
              </ScTd>
            </ScTr>
            <ScTr>
              <ScTime>5</ScTime>
              <ScTd>
                <MonBefore value1={sub[24]}/>
                <input
                  style={{ width: '95px' }}
                  onChange={e => process[24] = e.target.value}
                />
              </ScTd>
              <ScTd>
                <TueBefore value1={sub[25]}/>
                <input
                  style={{ width: '95px' }}
                  onChange={e => process[25] = e.target.value}
                />
              </ScTd>
              <ScTd>
                <WedBefore value1={sub[26]}/>
                <input
                  style={{ width: '95px' }}
                  onChange={e => process[26] = e.target.value}
                />
              </ScTd>
              <ScTd>
                <ThuBefore value1={sub[27]}/>
                <input
                  style={{ width: '95px' }}
                  onChange={e => process[27] = e.target.value}
                />
              </ScTd>
              <ScTd>
                <FriBefore value1={sub[28]}/>
                <input
                  style={{ width: '95px' }}
                  onChange={e => process[28] = e.target.value}
                />
              </ScTd>
              <ScTd>
                <SatBefore value1={sub[29]}/>
                <input
                  style={{ width: '95px' }}
                  onChange={e => process[29] = e.target.value}
                />
              </ScTd>
            </ScTr>
          </tbody>
        </ScTable>
        <button
        type="submit"
        onClick={() => changeSub()}
        >
          更新
        </button>
      </>
        }
        <button onClick={() => setIsUpdate(!isUpdate)}>
          {isUpdate ?  '更新画面へ' : '変更できない時間割'}
        </button>
        </Container>
      </>
  )
}

export default UpdateSchedule;