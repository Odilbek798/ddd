import React from 'react'
import s from './Browse.module.scss'

const Browse = () => {
  return (
    <>
    <section className={s.browse}>
        <div className="container">
            <div className={s.style}>
                <h1>BROWSE BY DRESS STYLE</h1>
                <div className={s.card}>
                    <div className={s.first_card}>
                        <img  src="./casual.png" alt="" />
                        <img src="./formal.png" alt="" />
                    </div>
                    <div className={s.second_card}>
                    <img  src="./party.png" alt="" />
                        <img src="./gym.png" alt="" />
                    </div>

                    <div className={s.fore}>
                        <img src="./Frame 105.png" alt="" />
                        <img src="./Frame 106.png" alt="" />
                        <img src="./Frame 107.png" alt="" />
                        <img src="./Frame 108.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className={s.happy}>
        <div className="container">
            <div className={s.head}>
                <h2>OUR HAPPY CUSTOMERS</h2>
                <div className={s.arrows}>
                    <img src="./arrow-1.png" alt="" />
                    <img src="./arrow-2.png" alt="" />
                </div>
            </div>
            <div className={s.otzivs}>
                <div className={s.otziv}>
                <div className={s.profile}>
                <img className={s.star} src="./stars.png" alt="" />
                    <h3>Sarah M<img src="./galochka.png" alt="" /></h3>
                    
                    <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses,
                     every piece I've bought has exceeded my expectations.”</p>
                    </div>
                <div className={s.profile}>
                    <div className={s.medias}>
                        <img className={s.star} src="./stars.png" alt="" />
                        <h3>James L<img src="./galochka.png" alt="" /></h3>
                        <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses,
                        every piece I've bought has exceeded my expectations.”</p>   
                    </div>
                         </div>
                <div className={s.profile}>
                    <div className={s.medias}>
                <img className={s.star} src="./stars.png" alt="" />
                    <h3>Sarah <img src="./galochka.png" alt="" /></h3>
                    <p>"I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses,
                     every piece I've bought has exceeded my expectations.”</p>

                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className={s.stay}>
        <h1>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
        <div className={s.email}>
            <input type="email" placeholder='Enter your email address' />
            <button>Subscribe to Newsletter</button>
        </div>
    </section>
    </>
  )
}

export default Browse