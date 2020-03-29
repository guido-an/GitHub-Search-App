import React from 'react'
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
    <section>
      <div className='slider'>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button onClick={prev} className='ui left labeled icon button'>
           Prev
            <i className='left arrow icon' />
          </button>
          <button onClick={next} className='ui right labeled icon button'>
            <i className='right arrow icon' />
          Next
          </button>
        </div>
        <Whirligig
          visibleSlides={3}
          gutter='1em'
          ref={(_whirligigInstance) => { whirligig = _whirligigInstance }}
        >
          {reposList}
        </Whirligig>
      </div>
      <style jsx='true'>{`
             @media(max-width: 968px){
                .slider{
                  display: none
                }
             }
      `}
      </style>
    </section>
  )
}

export default Slider
