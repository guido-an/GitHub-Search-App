import './SearchBar.css'
import React from 'react'
import { translations } from '../translations/searchBar'
import { setLanguage } from '../config/setLanguage'

const { title, placeholder, subtitle, responseTime } = setLanguage(translations)

class SearchBar extends React.Component {
    state = {
        term: '',
        timeout: 0
    }

    onInputChange = e => {
        this.setState({ term: e.target.value })
        if (this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.props.getSearchTerm(this.state.term)
        }, 300);
    }
    
  render () {
    return (
      <div className='ui segment search-bar'>
        <form onSubmit={(e) => e.preventDefault()}className='ui form'>
          <div className="search-bar-heading">
             <p><strong>{title}</strong></p>
             <p>{responseTime}: <span>{this.props.apiTimeResponse ? `${this.props.apiTimeResponse}` : '0' }</span></p>
          </div>
          <p className="text subtitle">{subtitle}</p>
          <input type='text' className="search-input" placeholder={placeholder} value={this.props.term} onChange={this.onInputChange} />
        </form>
      </div>
    )
  }
}

export default SearchBar