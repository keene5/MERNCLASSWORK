import React from 'react'
import PropTypes from 'prop-types'

function FeedbackStats({feedback}) {
    let averageReviews = feedback.reduce((accumulator, fb) => {
        return  accumulator + fb.rating
    }, 0)/feedback.length

    averageReviews = averageReviews.toFixed(1)

  return (
    <div className='feedback-stats'>
        <h4>{feedback.length} Reviews</h4>
        <h4>Average Rating {averageReviews}</h4>
    </div>
  )
}
FeedbackStats.propTypes = {
    feedback: PropTypes.array.isRequired
}

export default FeedbackStats
