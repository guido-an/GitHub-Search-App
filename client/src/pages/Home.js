import React from 'react'
import { translations } from '../translations/home'
import { setLanguage } from '../config/setLanguage'
import SearchBar from '../components/SearchBar'
import ReposList from '../components/ReposList'
import SelectInput from '../components/SelectInput'

const { welcome1, spanText, welcome2 } = setLanguage(translations)

const Home = ({ repos, getSearchTerm, apiTimeResponse, handleCheckBox }) => {
  return (
    <div>
      <SearchBar getSearchTerm={getSearchTerm} apiTimeResponse={apiTimeResponse} />
      <SelectInput handleCheckBox={handleCheckBox} repos={repos} />
      { repos.length > 0 ? <ReposList repos={repos} /> : 
      <h1 style={{ marginTop: '40px', textAlign: 'center' }}>{ welcome1 } <span style={{ color: '#2078C2' }}>{ spanText }</span> { welcome2 }</h1> 
      }
    </div>
  )
}

export default Home