//rfce will automatically create a function with a header componnent
import React from 'react'
import { useState } from 'react'

function FeedbackItem({item}) {
 
  console.log('This is my item'+item.rating+ item.text);



 return (
  
    <div className='card'>
        <div className='num-display'>{item.rating}</div>
        <div className='text-display'> {item.text}</div>
  
    </div>
  )
}

export default FeedbackItem
