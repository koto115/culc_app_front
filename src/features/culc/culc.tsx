import React, { useState } from 'react'
import Big from 'big.js';

const Culc: React.FC = () => {
  const [absorb, setAbsorb] = useState<number>(0)
  const [con, setCon] = useState<number>(0)
  const [length, setLength] = useState<number>(0)

  const [epc, setEpc] = useState<Big[]>([])

  const culcEps = () => {
    const result = Big(absorb).div(con).times(length)
    setEpc([result])
    console.log(result)
  }
  console.log(absorb)


  return (
    <div>
      <label>モル吸光係数</label><br/>
      <p>ε = A/c×d</p>
      <input placeholder='吸光度' type='number' onChange={e => setAbsorb(parseInt(e.target.value))}/>
      <input placeholder='モル濃度' type='number' onChange={e => setCon(parseInt(e.target.value))}/>
      <input placeholder='カラム長' type='number' onChange={e => setLength(parseInt(e.target.value))}/>
      <button onClick={() => {culcEps()}}>計算</button>
      <div>
        {`モル吸光係数は${epc}です!`}
      </div>
    </div>
  )
}

export default Culc;
