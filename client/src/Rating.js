import { useState } from 'react';

function Rating(props) {
  const { upvote, downvote, id, answerid } = props;


  // Conditional rendering
  return (
    <>
      <h3>Rate</h3>



      <button type="button" class="ratingBtn" onClick={(event) => {
        upvote(id, answerid);
      }}>&uarr;
      </button>
      <button type="button" class="ratingBtn" onClick={(event) => {
       downvote(id, answerid);
      }}>&darr;
      </button>
    </>
  );
}

export default Rating;
