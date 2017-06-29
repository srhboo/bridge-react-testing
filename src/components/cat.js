import React from 'react'
import './cat.css'

const Cat = ({
  name,
  picture
}) => (
  <div className='cat-details'>
    <img className='cat-img' src={ picture } />
    { name }
  </div>
)

export default Cat
