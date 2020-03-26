import './RepoCard.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { setLanguage } from '../config/setLanguage'
import { translations } from '../translations/repoCard'

const { linkText } = setLanguage(translations)

const excerpLength = 55

const RepoCard = ({ repo }) => {
  
  const description = repo.description ? repo.description.substring(0, excerpLength) : ''

  return (
    <div className='repo-card'>
      <div className="repo-info">
        <div className="repo-heading">
           <p><strong>{repo.full_name}</strong></p>
           {repo.description && 
           <p className='desc text'>{repo.description.length <= excerpLength ? description : `${description} [...]`}</p>
           }
         </div>
         <p><i className="eye icon"></i> Watchers: {repo.watchers}</p>
         </div>
      <Link to={`/repos/${repo.owner.login}/${repo.name}`} className="text">> {linkText}</Link>
    </div>
  )
}

export default RepoCard