import React from 'react'
import { BEFORE } from '../../types'


export const MonBefore: React.FC<BEFORE> = ({value1}) => {
  return (
    <>
      <p style={{ margin: '0', backgroundColor: '#DCDCDC', borderRadius: '7px'}}>
        {value1 ? value1 : <p style={{ margin: '0', opacity: '0'}}>empty</p>}
      </p>
    </>
  )
}

export const TueBefore: React.FC<BEFORE> = ({value1}) => {
  return (
    <>
      <p style={{ margin: '0', backgroundColor: '#FFABCE', borderRadius: '7px'}}>
        {value1 ? value1 : <p style={{ margin: '0', opacity: '0'}}>empty</p>}
      </p>
    </>
  )
}

export const WedBefore: React.FC<BEFORE> = ({value1}) => {
  return (
    <>
      <p style={{ margin: '0', backgroundColor: '#77EEFF', borderRadius: '7px'}}>
        {value1 ? value1 : <p style={{ margin: '0', opacity: '0'}}>empty</p>}
      </p>
    </>
  )
}

export const ThuBefore: React.FC<BEFORE> = ({value1}) => {
  return (
    <>
      <p style={{ margin: '0', backgroundColor: '#99FF99', borderRadius: '7px'}}>
        {value1 ? value1 : <p style={{ margin: '0', opacity: '0'}}>empty</p>}
      </p>
    </>
  )
}

export const FriBefore: React.FC<BEFORE> = ({value1}) => {
  return (
    <>
      <p style={{ margin: '0', backgroundColor: '#FFFF88', borderRadius: '7px'}}>
        {value1 ? value1 : <p style={{ margin: '0', opacity: '0'}}>empty</p>}
      </p>
    </>
  )
}

export const SatBefore: React.FC<BEFORE> = ({value1}) => {
  return (
    <>
      <p style={{ margin: '0', backgroundColor: '#D2B48C', borderRadius: '7px'}}>
        {value1 ? value1 : <p style={{ margin: '0', opacity: '0'}}>empty</p>}
      </p>
    </>
  )
}
