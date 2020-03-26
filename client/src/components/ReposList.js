// import './ReposList.css'
// import React, { Suspense } from 'react'
// // import RepoCard from './RepoCard'
// const RepoCard = React.lazy(() => import('./RepoCard'))

// const ReposList = ({ repos }) => {
  
//   const reposList = repos.map(repo => {
//     return (
//       <Suspense fallback={<div>Loading...</div>}>
//         <RepoCard key={repo.id} repo={repo} />
//       </Suspense>
//     )
//   })
//   return (
//     <div className='repos-list'>
//       {reposList}
//     </div>
//   )
// }

// export default ReposList
import './ReposList.css'
import React, { Suspense } from 'react'
import RepoCard from './RepoCard'

const ReposList = ({ repos }) => {
  const reposList = repos.map(repo => {
    return <RepoCard key={repo.id} repo={repo} />
  })

  return (
    <div className='repos-list'>
      {reposList}
    </div>
  )
}

export default ReposList