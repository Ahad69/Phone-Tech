import React from 'react';
import './Products.css'

const Products = () => {
    return (
       <div className='products-container'>
       <h1 className='gradient-text mb-5'>This is Heading</h1>
        <div className='cards'>
            <div className="product-container" data-aos="fade-up">
            
         <div className="image">
            <img src="https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/281760173_1067836044113090_7794491380868506137_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHdbe92oqWBT7NoN4DvyEv7oEQqCL0-txegRCoIvT63Fz1jQCbzEPrOpxgkF1xtxxBDL1tqugamnggg_NwGeCyY&_nc_ohc=uanvQo_N-QkAX_K6EuI&_nc_ht=scontent.fdac99-1.fna&oh=00_AT9-7l1RTa7gUlroZWU0P7k-C4d8bYLbdwcCh72E86ZDgw&oe=628D3AC0" alt="" />
         </div>
         <div className="card-content">
            <div className="wrapper">
               <div className="title ">
                  Adidas Originals
               </div>
               <p>
                  Men's running tshirt
               </p>
               <span className="price">$29.99</span>
               <div className="btns">
                  <button>Buy now</button>
               </div>
            </div>
         </div>
      </div>
         
     
        </div>
       </div>
    );
};

export default Products;