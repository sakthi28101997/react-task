import React, { useEffect, useState } from 'react'
import {backendUrl } from '../api/Url';
import SingleTestimonial from './SingleTestimonial/SingleTestimonial';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


function Testimonial() {



  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch(backendUrl +"api/testimonial/list")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result.data);
          setIsLoaded(true);
       
          setItems(result.data);
          
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])


 
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
          return (
                  <section id="testimonial" className="testimonial-area">
              <div className="container">
              <div className="row justify-content-center">
              <div className="col-lg-6">
              <div className="section-title text-center pb-10">
              <h4 className="title">Testimonial</h4>
              <p className="text">Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!</p>
              </div> 
              </div>
              </div> 
              <div className="row">
              <div className="col-lg-12">
              <div className="row testimonial-active">
              {
                 items.map(item => (
                  <div className='col-md-4' key={item.id}>
                      <SingleTestimonial 
                      email={item.email}
                      photo = {item.photo}
                      name ={item.name}
                      post ={item.post}
                      description ={item.description}
                      />
                  </div>
                ))
              }

              </div> 
              </div>
              </div> 
              </div> 
              </section>

          )
}
}

export default Testimonial