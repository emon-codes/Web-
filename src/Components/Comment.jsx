// import React from 'react'
// import useComment from '../Hooks/useComment'

// const Comment = () => {
//     const { comment } = useComment();

//   return (
//       <div>
//           {comment.map((coment) => (<h1>{ coment.id }</h1>) )}
//     </div>
//   )
// }

// export default Comment


import React from 'react'
import useComment from './../Hooks/useComment'

const Comment = () => {
  const {comment} = useComment()
  return (
    <div>
{comment.map((data) => (<h1>{data.id}</h1>))}

    </div>
  )
}

export default Comment