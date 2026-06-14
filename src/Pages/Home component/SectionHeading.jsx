import React from 'react'

const SectionHeading = ({heading, colorHeading, discription}) => {
  return (
        <div>
      <div className='flex flex-col gap-3'>
        <h2>{heading}</h2>
        <h3>{colorHeading}</h3>
      </div>
      <div>
        {discription}
      </div>
    </div>
  )
}

export default SectionHeading
