import React from 'react'

function SingleTestimonial({email , photo ,name ,post,description}) {
  return (
   
<div className="single-testimonial mt-30 mb-30 text-center">
<div className="testimonial-image">
<img src={ photo ? process.env.REACT_APP_BACKEND_URL + photo : process.env.REACT_APP_DEFAULT_IMAGE} alt="Author" style={{width:"90px"}} />
</div>
<div className="testimonial-content">
<p className="text">{description}</p>
<h6 className="author-name">{name}</h6>
<span className="sub-title">{post}</span>
</div>
</div> 

  )
}

export default SingleTestimonial