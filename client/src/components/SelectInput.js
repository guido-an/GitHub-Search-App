import React from 'react'
import { setLanguage } from '../config/setLanguage'
import { translations } from '../translations/selectInput'

const { text } = setLanguage(translations)

const SelectInput = ({ handleCheckBox, repos }) => {
  return (
    repos.length > 0 && (
      <div className='ui toggle checkbox' style={{ marginBottom: '40px' }}>
        <input onChange={handleCheckBox} type='checkbox' />
        <label>{text}</label>
      </div>
    )
  )
}

export default SelectInput
