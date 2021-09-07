import React, { useState } from 'react'

const Culc: React.FC = () => {
  const [absorb, setAbsorb] = useState<number>()

  return (
    <div>
      <label>モル吸光係数</label><br/>
      <p>ε = A/c×d</p>
      <input placeholder='吸光度' type='number' onChange={e => setAbsorb(parseInt(e.target.value))}/>
      <input placeholder='モル濃度' type='number' onChange={e => setAbsorb(parseInt(e.target.value))}/>
      <input placeholder='カラム長' type='number' onChange={e => setAbsorb(parseInt(e.target.value))}/>
    </div>
  )
}

export default Culc;
