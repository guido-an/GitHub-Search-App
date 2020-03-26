import './RepoPage.css'
import React from 'react'
import axios from 'axios'
import RepoDetails from '../components/RepoDetails'
import Slider from '../components/Slider'

// import { singleRepoTest } from '../test'



const hideOnMobile = {
  display: 'none'
}

const sliderStyle = function() {
  if (window.innerWidth < 800) {
    alert('yes')
    return hideOnMobile;
  } else {
    alert('no')
  }
};


class RepoPage extends React.Component {
  state = {
    singleRepo: null
  }
  // state = {
  //   singleRepo: singleRepoTest
  // }

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
     const myRepo =  await axios.get(`/repos/${owner}/${repo}`)
     this.setState({ singleRepo: myRepo.data })
    }
    catch(err) {
      console.log(err)
    }     
   }

  render(){   
    return (
        <div>
          <RepoDetails singleRepo={this.state.singleRepo} />
           <div style={{ marginTop: '80px' }}>
              {this.props.repos.length > 0  &&
               <Slider repos={this.props.repos}/>
             }  
           </div>
       </div>
      )
 }
}

export default RepoPage