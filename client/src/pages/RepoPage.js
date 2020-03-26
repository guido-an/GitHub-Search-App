import './RepoPage.css'
import React from 'react'
import axios from 'axios'

class RepoPage extends React.Component {
  state = {
    singleRepo: null
  }

  componentDidMount(){
      this.getSingleRepo()
  }

  getSingleRepo = async () => {
    const { owner, repo } = this.props.match.params
    try{
     const myRepo =  await axios.get(`/repos/${owner}/${repo}`)
     this.setState({ singleRepo: myRepo.data })
    }
    catch(err) {
      console.log(err)
    }     
   }

  render(){   
    console.log(this.state.singleRepo)
     const { full_name, description, created_at, updated_at,  svn_url, watchers, forks, subscribers_count } = this.state.singleRepo ? this.state.singleRepo : {}
     const { login, avatar_url } = this.state.singleRepo ? this.state.singleRepo.owner : {}
    return (
        <div>

   { this.state.singleRepo && (
      <div>
      <h1>{ full_name }</h1>
      <p className="text">{ description }</p>
      <p><i className="eye icon" />Watchers: { watchers }</p>
      <p><i className="code branch icon" />forks: { forks }</p>
      <p><i className="user icon" />Subscribers: { subscribers_count }</p>
      <span>Created: { created_at.slice(0, 10) }</span>
      <span>Updated: { updated_at.slice(0, 10) }</span>
      <a href={svn_url} target="_blank">Link</a>
     
      </div>
      ) }
    
       </div>
      )
  }
}

export default RepoPage

