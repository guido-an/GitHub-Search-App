import React from 'react'

const RepoDetails = ({ singleRepo }) => {
    const { full_name, description, svn_url, watchers, forks, subscribers_count } = singleRepo ? singleRepo : {}
    // const { login, avatar_url, html_url } = singleRepo ? singleRepo.owner : {}
    console.log(singleRepo)
    return(
        singleRepo && (
            <div className="ui raised very padded text container segment">
                <h1 className="ui header">{ full_name }</h1>
                <p className="text">{ description } <a href={svn_url} target="_blank">{svn_url}</a></p>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <p><i className="eye icon" />Watchers: { watchers }</p>
                  <p><i className="code branch icon" />forks: { forks }</p>
                  <p><i className="user icon" />Subscribers: { subscribers_count }</p>
                </div>
                {singleRepo.owner && (
                <div style={{ fontSize: '15px', marginTop: '20px' }}>
                   <img className="ui avatar image" src={singleRepo.owner.avatar_url} />
                   <span>Author: <a href={singleRepo.owner.html_url}>{ singleRepo.owner.login }</a></span>    
                </div>
                )}
            </div>
            ) 
    )
}

export default RepoDetails