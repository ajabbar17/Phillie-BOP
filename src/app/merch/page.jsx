// pages/merch.js or pages/index.js
import MerchCard from '@/components/Merch/MerchCard';
import React from 'react';

const Page = () => {
    const products = [
        {
          name: "Worthy",
          price: 2.00,
          imageUrl: "https://www.philliebopmusic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcdworthy1.1b059da4.png&w=384&q=75", // Update with actual image path
        },
        {
          name: "Mask",
          price: 8.00,
          imageUrl: "https://www.philliebopmusic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRectangle%2026%20(4).e64aea2f.png&w=384&q=75", // Update with actual image path
        },
        {
          name: "Sweetest Of Melody",
          price: 2.00,
          imageUrl: "https://www.philliebopmusic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcdsweet1.4796caac.png&w=384&q=75", // Update with actual image path
        },
        {
          name: "Cap",
          price: 20.00,
          imageUrl: "https://www.philliebopmusic.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcapnew.e387f208.png&w=384&q=75", // Update with actual image path
        },
      ];
  return (
    <div className="w-full flex flex-col flex-wrap items-center py-5 px-8 lg:px-28 gap-8 md:gap-20">
      <div>
        <h1 className= "text-3xl md:text-7xl font-semibold text-center mb-3 pb">Merch</h1>
        <p className="text-xl font-light text-center text-white">
          Your one-stop shop for purchasing Phillie-BOP merch
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-7 items-center justify-center">
        {products.map((product) => (
          <MerchCard
            key={product.name}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Page;
