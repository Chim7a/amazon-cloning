import React from 'react';
import "./Home.css"
import Product from './Product';

function Home() {
  return (
    <div className="home">
        <img className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
        />
        
    <div className="home__row">
    <Product 
        id="493898489123"
        title="A book you should'nt read."
        price={11.96}
        rating={4}
        image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/action-thriller-book-cover-design-template-3675ae3e3ac7ee095fc793ab61b812cc_screen.jpg?ts=1637008457"
        />
    <Product 
        id="12438723632233"
        title="Rolex watch"
        price={12622.22}
        rating={5}
        image="https://content.rolex.com/dam/watches/family-pages/datejust/update/2021/family-page-datejust-cover-m126333-0010_1601ac_003_portrait.jpg?imwidth=420"
        />
    </div>

    <div className="home__row">
    <Product 
        id="143437823"
        title="Apple Iphone 13"
        price={1244.96}
        rating={4}
        image="https://shop.ee.co.uk/medias/iphone-13-mini-5g-midnight-desktop-detail-1-Format-488?context=bWFzdGVyfHJvb3R8MTY5NTkyfGltYWdlL3BuZ3xzeXMtbWFzdGVyL3Jvb3QvaDEzL2g5Ni85NzI2NDE1ODk2NjA2L2lwaG9uZS0xMy1taW5pLTVnLW1pZG5pZ2h0LWRlc2t0b3AtZGV0YWlsLTFfRm9ybWF0LTQ4OHw3ODI4NjhmYjEzMTkwOTRiZDQ0MDQ3Y2Y4ZDhiNzQ0YTkyYmI0NzVmMWM1OGRkYjI4N2YwNDg1NjU4ODhkMWI3"
        />
    <Product 
        id="128348733"
        title="Lenovo M10 HD Grey 25.65 cm (10.1) 64 GB Tablet"
        price={111.96}
        rating={5}
        image="https://img.tatacliq.com/images/i7/1348Wx2000H/MP000000009695941_1348Wx2000H_202105312042442.jpeg"
        />
    <Product 
        id="12767437643"
        title="Amazon Alexa"
        price={110.96}
        rating={5}
        image="https://m.media-amazon.com/images/I/51TFnR7AtGL._AC_SY400_.jpg"
        />
    </div>

    <div className="home__row">
    <Product 
        id="45343123"
        title="LG 55UP7670PUC"
        price={119.96}
        rating={4}
        image="https://www.lg.com/us/images/tvs/md08001120/gallery/D-01.jpg"
        />
    </div>

    </div>
  )
}

export default Home

