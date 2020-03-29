import React from 'react'
import { setLanguage } from '../config/setLanguage'
import { translations } from '../translations/footer'

const { copyright } = setLanguage(translations)

function Footer () {
  return (
    <footer>
      <p style={{ textAlign: 'center', padding: '20px' }} className='text'>@2020 | {copyright} <a href='https://github.com/guido-an' target='_blank' rel='noopener noreferrer'>Guido Carucci</a></p>
    </footer>
  )
}

export default Footer
