import React from 'react'
import { setLanguage } from '../config/setLanguage'
import { translations } from '../translations/repoDetails'

const { author } = setLanguage(translations)

const RepoDetails = ({ singleRepo }) => {
  const { full_name, description, svn_url, watchers, forks, subscribers_count } = singleRepo || {}
  const { login, avatar_url, html_url } = singleRepo ? singleRepo.owner : {}
  return (
    <div>
      {singleRepo && (
        <div className='ui raised very padded text container segment'>
          <h1 className='ui header'>{full_name}</h1>
          <p className='text'>{description} <a href={svn_url} target='_blank' rel='noopener noreferrer'>{svn_url}</a></p>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p><i className='eye icon' />Watchers: {watchers}</p>
            <p><i className='code branch icon' />Forks: {forks}</p>
            <p><i className='user icon' />Subscribers: {subscribers_count}</p>
          </div>
          {singleRepo.owner && (
            <div style={{ fontSize: '15px', marginTop: '20px' }}>
              <img className='ui avatar image' src={avatar_url} alt={login} />
              <span>{author}: <a href={html_url} target='_blank' rel='noopener noreferrer'>{login}</a></span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default RepoDetails
