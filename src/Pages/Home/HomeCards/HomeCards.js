import React from 'react';
import './HomeCards.css'

const HomeCards = () => {
    const colors = ["blue", "green", , "#9b59b6" , "#3498db" , "#e67e22" , "#16a085" , "#95a5a6" , "#fab1a0 " , "#6c5ce7" , "#00cec9", "#D980FA" , "#006266" , "#A3CB38" ,"#833471"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomColor2 = colors[Math.floor(Math.random() * colors.length)];
    const randomColor3 = colors[Math.floor(Math.random() * colors.length)];
    

    return (
        <div className='homeCards'>
           <h1 className='gradient-text pt-10'>Our Tools</h1>
             <div className="card-container " >
        
         <div className="home-card" style={{
            background: randomColor }} data-aos="fade-up">
            <div className="card-img">
               <img src="https://scontent.fdac99-1.fna.fbcdn.net/v/t1.6435-9/123652913_717415279155170_6968995783453785650_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGQ7qh-I28ac6BpANMCjOeGOSbBMb19J6g5JsExvX0nqCnzqu25FraJ-hchAKPPdlX4MS23q8v5jKGFAzx3qxZa&_nc_ohc=JSYdibUZ3mUAX9HytKs&_nc_ht=scontent.fdac99-1.fna&oh=00_AT_lkwo3DWJLx_MEShd7xIki3ab9w7cwu_aLGmGF_G86Mw&oe=62AEECBD"  />
            </div>
            <div className="top-text">
               <div className="name text-3xl font-bold">
                  Annie Lea
               </div>
               <p>
                  Apps Developer
               </p>
            </div>
            <div className="bottom-text">
               <div className="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quaerat iusto adipisci reprehenderit quasi cum perspiciatis, minima reiciendis magni quam!
               </div>
               <div className="button">
                  <button>Buy Now</button>
               </div>
            </div>
         </div>
         <div className="home-card" style={{
            backgroundColor: randomColor2 }} data-aos="fade-up">
            <div className="card-img">
               <img src="https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/281760173_1067836044113090_7794491380868506137_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHdbe92oqWBT7NoN4DvyEv7oEQqCL0-txegRCoIvT63Fz1jQCbzEPrOpxgkF1xtxxBDL1tqugamnggg_NwGeCyY&_nc_ohc=uanvQo_N-QkAX_K6EuI&_nc_ht=scontent.fdac99-1.fna&oh=00_AT9-7l1RTa7gUlroZWU0P7k-C4d8bYLbdwcCh72E86ZDgw&oe=628D3AC0"/>
            </div>
            <div className="top-text">
               <div className="name">
                  Eliana Maia
               </div>
               <p>
                  Website Developer
               </p>
            </div>
            <div className="bottom-text">
               <div className="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quaerat iusto adipisci reprehenderit quasi cum perspiciatis, minima reiciendis magni quam!
               </div>
               <div className="button" >
               <button>Buy Now</button>
               </div>
            </div>
         </div>
         <div className="home-card" style={{
            backgroundColor: randomColor3 }} data-aos="fade-up">
            <div className="card-img">
               <img src="https://scontent.fdac99-1.fna.fbcdn.net/v/t39.30808-6/277227732_1034169300813098_1160739421832369038_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeHYMrGMkhu7ZMrNiU2fDhaFtWce__YJziS1Zx7_9gnOJO3rq3iHWmF1LtorNf7nmIUuqklWJijhf0ng7sOaA6Mo&_nc_ohc=Xvm6tEBTf-sAX-RkYxy&tn=39rt_vJeKiEZv_Cp&_nc_ht=scontent.fdac99-1.fna&oh=00_AT-RR5-FFY3KP8sQtjxJfz3noygwj5xpzPEzWKb7Ze4X-Q&oe=628E099D"/>
            </div>
            <div className="top-text">
               <div className="name">
                  Harley Briana
               </div>
               <p>
                  Graphic Developer
               </p>
            </div>
            <div className="bottom-text">
               <div className="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem quaerat iusto adipisci reprehenderit quasi cum perspiciatis, minima reiciendis magni quam!
               </div>
               <div className="button">
               <button>Buy Now</button>
               </div>
            </div>
         </div>
      </div>
        </div>
    );
};

export default HomeCards;