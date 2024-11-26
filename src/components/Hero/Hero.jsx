import React from 'react'
import s from './Hero.module.scss'

const Hero = () => {
  return (
   <>
   <section className={s.hero}>
    <div className="container">
      <div className={s.main_hero}>

      <div className={s.title}>
          <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p className={s.shift}>Browse through our diverse range of meticulously crafted garments
          , designed to bring out your individuality and cater to your sense of style.</p>
          <button>Shop Now</button>
      <div className={s.sale}>
        <div className={s.kupon}>
        <h2>200+</h2>
        <p>International Brands</p>
        </div>
        <div className={s.line}></div>
        <div className={s.kupon}>
        <h2>2,000+</h2>
        <p>High-Quality Products</p>
        </div>
        <div className={s.line}></div>
        <div className={s.kupon}>
        <h2>30,000+</h2>
        <p>Happy Customers</p>
        </div>
        
       </div>
      </div>

      <div className={s.big_img}>
          <img src="./hero-img.png" alt="" />
      </div>
      </div>

    <div className={s.last}>
      <img src="/versage.png" alt="" />
      <img className={s.zara} src="/zara.png" alt="" />
      <img src="/gucci.png" alt="" />
      <img src="/prada.png" alt="" />
      <img src="/calvin.png" alt="" />
    </div>

    </div>
   </section>

   
   </>
  )
}

export default Hero