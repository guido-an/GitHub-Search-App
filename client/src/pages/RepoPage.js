import './RepoPage.css'
import React from 'react'
import { Link } from "react-router-dom"
import github from '../api/github'
import RepoDetails from '../components/RepoDetails'
import Slider from '../components/Slider'
import { setLanguage } from '../config/setLanguage'
import { translations } from '../translations/repoPage'

const { textLink } = setLanguage(translations)

class RepoPage extends React.Component {
  state = {
    singleRepo: null
  }
 
  componentDidMount(){
    window.scrollTo(0, 0);
      this.getSingleRepo()
  }

  componentDidUpdate(prevProps) {  
    if (
      this.props.location.pathname !== prevProps.location.pathname
    ) {
      window.scrollTo(0, 0);
      this.getSingleRepo()
    }
  }

  getSingleRepo = async () => {
    const { owner, repo } = this.props.match.params
    try{
     const response =  await github.get(`/api/repos/${owner}/${repo}`)
     this.setState({ singleRepo: response.data.repo })
    }
    catch(err) {
      console.log(err)
    }     
   }

  render(){   
    return (
        <div>
          <RepoDetails singleRepo={this.state.singleRepo} />
           <div style={{ marginTop: '80px', textAlign: "center" }}>
              {this.props.repos.length > 0  ?
               <Slider repos={this.props.repos}/> :
               <Link to="/">> { textLink }</Link>
             }  
           </div>
       </div>
      )
  }
}

export default RepoPage