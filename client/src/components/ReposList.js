import './ReposList.css'
import React from 'react'
import RepoCard from './RepoCard'

const ReposList = ({ repos }) => {
  const reposList = repos.map(repo => {
    return <div key={repo.id} className='repo-container'><RepoCard repo={repo} /></div>
  })

  return (
    <div className='repos-list'>
      {reposList}
    </div>
  )
}

export default ReposList
