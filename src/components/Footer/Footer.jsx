import React from 'react'
import s from './Footer.module.scss'

const Footer = () => {
  return (
   <>
   <section className={s.footer}>
        <div className="container">
            <div className={s.all}>

            <div className={s.shop}>
                <img src="/SHOP.CO (1).png" alt=""/>
                <p>We have clothes that suits your style and which you're
                 proud to wear. From women to men.</p>
                 <img src="./social.png" alt="" />  
            </div>
            <div className={s.text}>
                <div className={s.first }>
                <div className="company">
                    <h4>Company</h4>
                    <p>About</p>
                    <p>Features</p>
                    <p>Works</p>
                    <p>Career</p>
                </div>
                <div className="company">
                    <h4>Help</h4>
                    <p>About</p>
                    <p>Features</p>
                    <p>Works</p>
                    <p>Career</p>
                </div>
                </div>
                <div className={s.second}>

                <div className="company">
                    <h4>FAQ</h4>
                    <p>About</p>
                    <p>Features</p>
                    <p>Works</p>
                    <p>Career</p>
                </div>
                <div className="company">
                    <h4>Resources</h4>
                    <p>About</p>
                    <p>Features</p>
                    <p>Works</p>
                    <p>Career</p>
                </div>

                    </div>  
                
            </div>
            </div>

            <div className={s.line}>
                <img src="./Line 8.png" alt="" />
            </div>

            <div className={s.last}>
                <div className={s.bom}>
                    <div className={s.textbek}>
                        <p>Shop.co © 2000-2023, All Rights Reserved</p>
                    </div>
                    <div className={s.imgbek}>
                    <img src="./Frame 53.png" alt="" />
                    </div>
                </div>
            
            </div>
        </div>
   </section>
   </> 
  )
}

export default Footer