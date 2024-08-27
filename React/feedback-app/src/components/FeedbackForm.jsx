import React from 'react'
import Card from './shared/Card'
import { useState, useEffect } from 'react'
import Button from './shared/Button';
import RatingSelect from './RatingSelect';

function FeedbackForm({handleAdd}) {
    const [initialText, setInitialText] = useState('');
    const [rating, setRating] = useState('10');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');
    
    const handleTextChange = (e) => {
      const textValue = e.target.value;
      
      if(textValue === ''){
        setBtnDisabled(true);
        setMessage(null);
      }
      else if (textValue !== '' && textValue.trim().length<= 10){
        setMessage('Length must be at least 10');
        setBtnDisabled(true);
      }
      else{setMessage(null);
        setBtnDisabled(false);
      }
      setInitialText(textValue)
    
    }

    const handleSubmit= (e) => {
      e.preventDefault();
      if(initialText.trim().length>10){
        const newFeedback = {
          text: initialText,
          rating: rating
        }
       handleAdd(newFeedback)
       setInitialText('');
      }
}

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate our service</h2>
            <RatingSelect select = {(rating) => {setRating(rating);console.log(rating)}}/>
            <div className='input-group'>
                <input onChange= {handleTextChange} type="text" placeholder='Write a review'/>
                <Button type='submit' isDisabled= {btnDisabled}>Send</Button>
            </div>
            {message && <div className='message'>{message} </div>}
        </form>
      
    </Card>
  )
}

export default FeedbackForm
