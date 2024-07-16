import MerchCard from '@/components/Merch/MerchCard';
import ShopCard from '@/components/ShopCard';
import React from 'react'

const page = () => {
    const products = [
        {
          name: "E.S.P",
          price: 1.50,
          imgSrc: "https://www.philliebopmusic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRectangle%2026%20(1).1c516a27.png&w=384&q=75"
        },
        {
          name: "Made",
          price: 1.50,
          imgSrc: "https://www.philliebopmusic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRectangle%2026%20(2).abf643bf.png&w=384&q=75"
        },
        {
          name: "Worthy",
          price: 1.50,
          imgSrc: "https://www.philliebopmusic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRectangle%2026%20(3).8711920d.png&w=384&q=75"
        },
        {
          name: "More Than Enough",
          price: 1.50,
          imgSrc: "https://www.philliebopmusic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmore.d57092ed.png&w=384&q=75"
        },
        {
          name: "Sweetest of Melody",
          price: 1.50,
          imgSrc: "https://www.philliebopmusic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRectangle%2026%20(5).3efe9674.png&w=384&q=75"
        },
        {
          name: "Je Ne Sais Quoi",
          price: 1.50,
          imgSrc: "https://www.philliebopmusic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjene.5767b9d5.png&w=384&q=75"
        },
        {
          name: "Cap",
          price: 20.00,
          imgSrc: "https://www.philliebopmusic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcapnew.e387f208.png&w=384&q=75"
        },
        {
          name: "Mask",
          price: 8.00,
          imgSrc: "https://www.philliebopmusic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRectangle%2026%20(4).e64aea2f.png&w=384&q=75"
        },
        {
          name: "Breathe Again",
          price: 1.50,
          imgSrc: "https://www.philliebopmusic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimarii.4134c1d6.png&w=384&q=75"
        },
        {
          name: "Worthy CD",
          price: 2.00,
          imgSrc: "https://www.philliebopmusic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcdworthy1.1b059da4.png&w=384&q=75"
        },
        {
          name: "Sweetest of Melody CD",
          price: 2.00,
          imgSrc: "https://www.philliebopmusic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcdsweet1.4796caac.png&w=384&q=75"
        }
      ];
      
  return (
    <div className="w-full flex flex-col items-center py-5 px-8 lg:px-28 gap-8 ">
    <div>
      <h1 className="text-5xl md:text-7xl font-semibold text-center mb-3 pb">Shop</h1>
      <p className="text-xl font-light text-center text-white">
        Your one-stop shop for purchasing Phillie-BOP merch
      </p>
    </div>
    <div className="w-full flex flex-wrap gap-7 items-center justify-center">
      {products.map((product) => (
        <ShopCard
          key={product.name}
          name={product.name}
          price={product.price}
          imageUrl={product.imgSrc}
        />
      ))}
    </div>
  </div>
  )
}

export default page