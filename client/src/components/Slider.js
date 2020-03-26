import * as React from 'react'
import Whirligig from 'react-whirligig'
import RepoCard from './RepoCard'
 
const Slider = ({ repos }) => {
  let whirligig
  const next = () => whirligig.next()
  const prev = () => whirligig.prev()

  const reposList = repos.map(repo => {
    return <RepoCard key={repo.id} repo={repo} />
  })

  return (    
    <div className="slider">
      <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button onClick={prev} className="ui left labeled icon button">
           Prev
          <i className="left arrow icon"></i>
          </button>
         <button onClick={next} className="ui right labeled icon button">
         <i className="right arrow icon"></i>
          Next
         </button>
     </div>
      <Whirligig
        visibleSlides={3}
        gutter="1em"
        ref={(_whirligigInstance) => { whirligig = _whirligigInstance}}
      >
        {reposList}
      </Whirligig>
      <style jsx>{`
             @media(max-width: 968px){
                .slider{
                  display: none
                }
             }
      `}</style>
    </div>
  )
}

export default Slider