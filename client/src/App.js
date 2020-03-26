import './App.css'
import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import github from './api/github'
import logo from './github-logo.svg'
import Footer from './components/Footer'
import Home from './pages/Home'
import RepoPage from './pages/RepoPage'

class App extends React.Component {
  state = {
    repos: [],
    reposCopy: [],
    apiTimeResponse: null
  }

  getSearchTerm = async term => {
    try {
      const res = await github.get(`/search/repositories?q=${term}`)
      
      this.getApiTimeResponse()
    
      this.setState({ repos: res.data.repositories, reposCopy: res.data.repositories })  
      
    } catch(err) {
      console.log(err)
    }
  }

  getApiTimeResponse = () => {
    const myEntry = performance.getEntriesByType("resource").filter(entry =>  entry.name.includes(process.env.REACT_APP_API_URL) )
    let index = myEntry.length - 1
    let resTime = ( (myEntry[index].duration) / 1000 ).toFixed(2)
  
    this.setState({ apiTimeResponse: resTime })
  }

  handleCheckBox = e => {
    const reposByWatchers = [...this.state.repos].sort((a, b) => ( a.watchers < b.watchers ) ? 1 : -1 )
    e.target.checked ? this.setState({ repos: reposByWatchers }) : this.setState({ repos: this.state.reposCopy })
  }

  render () {   
    return (
      <section>
        <div className='ui container' style={{ minHeight: '100vh' }}>
          <Link to="/"><img src={logo} style={{ width: '90px', display: 'block', margin: '10px auto' }} alt="github-logo" /></Link>
            <Switch>
               <Route exact path="/" render={props => 
                    <Home
                      {...props}
                      getSearchTerm={this.getSearchTerm}
                      repos={this.state.repos}
                      apiTimeResponse={this.state.apiTimeResponse}
                      handleCheckBox={this.handleCheckBox}
                    />}
                />
                <Route exact path="/repos/:owner/:repo" render={props => 
                     <RepoPage {...props} 
                     repos={this.state.repos} 
                     />} 
                />
            </Switch>
        </div>
       <Footer/>
      </section>
    )
  }
}

export default App
