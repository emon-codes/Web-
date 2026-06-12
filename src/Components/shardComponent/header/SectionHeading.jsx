import React from 'react'

const SectionHeading = ({heading, colorHeading, discription}) => {
  return (
      <div>
          <div>
              <h3>{heading} {colorHeading} </h3>
              <p>{ discription}</p>
          </div>
    </div>
  )
}

export default SectionHeading