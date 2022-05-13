import React from 'react'
import food from '../assets/food.jpeg'
import tourism from '../assets/tourism.jpeg'
import hotel7 from '../assets/hotel7.jpg'
const Services = () => {
  return (
    <section className='services'>
      

      <div className='grid'>
        <div>
          <img src={hotel7} alt='service-1' />
           <a href ='https://www.airbnb.co.in/?locale=en&_set_bev_on_new_domain=1652080749_NzZiYmI1NDU3Yzg4' classname='redirect'><h3 className='vn'>Hotels</h3></a>
          <p>
          Travel is about
to get a redesign
Come back on 11 May at 9am EDT
to see what’s new, By clicking on the above link


          </p>
        </div>

        <div>
          <img src={tourism} alt='service-2' />
          <a href ='https://www.thomascook.in/holidays/india-tour-packages' classname='redirect'><h3 className='bk'>Holiday Packages</h3></a>
          <p>
          WANT TO GET AN ALERT ON TRAVEL GUIDELINES FOR INDIA HOLIDAYS?
           Visit the Website by clicking on above link
          </p>
        </div>

        <div>
          <img src={food} alt='service-3' />
          <a href ='https://www.ecatering.irctc.co.in/' classname='redirect'><h3 className='op'>E-Catering</h3></a>
          <p>
         GET RESTARUNT FOOD DELIVERD AT YOUR SEAT, by clicking on the above link
          </p>
        </div>
      </div>
    </section>
  )
}

export default Services