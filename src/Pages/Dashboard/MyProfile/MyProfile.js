import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF , faLinkedin , faSkype } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import './MyProfile.css'
import Swal from 'sweetalert2';

const MyProfile = () => {
    const [user, loading, error] = useAuthState(auth);
    const [profile , setProfile] = useState([])
    useEffect(()=>{
      
        fetch(`https://fast-sands-29069.herokuapp.com/profile?userEmail=${user?.email}` ,{
          method : 'GET',
          headers : {
            'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
          },
        })
        .then(res=>res.json())
        .then(data => setProfile(data[0]))
       
    },[])

    console.log(profile?.phone)
   
    const handleProfile = event =>{
        event.preventDefault()
      
        const education = event.target.education.value;
        const location = event.target.location.value;
        const phone = event.target.phone.value;
        console.log(event.target.phone.value)

        const facebook = event.target.facebook.value;
        const linkdin = event.target.linkdin.value;
        const skype = event.target.skype.value;
        const userEmail = user?.email;

        const profileDetails = {education, location , phone , facebook , linkdin , skype  , userEmail}
       
        fetch("https://fast-sands-29069.herokuapp.com/profile", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(profileDetails),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: `Your Review Added Successfully`,
                  showConfirmButton: false,
                  timer: 1500,
                });
              }
            });
          
          event.target.reset();

    }
    return (
       <div className='myProfile'>
            <div className='myProfile-Details'>
            <img width={200} style={{borderRadius:"50%" , margin: "20px auto"}} src={user?.photoURL} alt="user photo" />
            <h4 className='text-center text-4xl'> {user?.displayName}</h4>
            <br />
            <h1 className='text-2xl'>Contact :- </h1>
           <h4>   <FontAwesomeIcon  icon={faEnvelope} /> : <a  href={`mailto:${user?.email}`} >{user?.email}</a></h4>
           <h4>   <FontAwesomeIcon  icon={faPhone} /> : <a href={`tel:${profile?.phone}`}>{profile?.phone}</a></h4>
           <h4>   <FontAwesomeIcon  icon={faFacebookF} /> : <a href={profile?.facebook}>www.facebook.com/{user?.displayName}</a></h4>
           <h4>   <FontAwesomeIcon  icon={faLinkedin} /> : <a href={profile?.linkdin}>www.linkdin.com/{user?.displayName}</a></h4>
           <h4>   <FontAwesomeIcon  icon={faSkype} /> : <a href={profile?.skype}>www.skype.com/{user?.displayName}</a></h4>
            <br />
            <h1 className='text-2xl'>About :- </h1>
      
           <h4>   <FontAwesomeIcon  icon={faBook} /> : {profile?.education}</h4>
           <h4>   <FontAwesomeIcon  icon={faLocationPin} /> : {profile?.location}</h4>
          
           

           
        </div>
        <div className='myProfile-contact'>
        <h1 className='text-center text-2xl'>Update Your Profile</h1>
        <hr />
        <form onSubmit={handleProfile}>
        <h1 className='text-2xl'>About :- </h1>
        <p className='text-lg text-left'>Education : </p>
        <input
          type="text"
          placeholder="Education"
          className="input  h-10  text-black  input-bordered input-error"
          name="education"
          required
        /> <br />
        <p className='text-lg text-left'>Location : </p>
        <input
          type="text"
          placeholder="Location"
          className="input  h-10 text-black   input-bordered input-error"
          name="location"
          required
        /> <br /><br />
          <h1 className='text-2xl'>Contact :- </h1>
        <p className='text-lg text-left'>Phone : </p>
        <input
          type="text"
          placeholder="Phone"
          className="input  h-10  text-black   input-bordered input-error"
          name="phone"
          required
        /> <br />
        <p className='text-lg text-left'>Facebook : </p>
        <input
          type="text"
          placeholder="Facebook"
          className="input  h-10  text-black   input-bordered input-error"
          name="facebook"
          required
        /> <br />
        <p className='text-lg text-left'>Linkdin :</p>
        <input
          type="text"
          placeholder="Linkdin"
          className="input  h-10 text-black   input-bordered input-error"
          name="linkdin"
          required
        /> <br />
        <p className='text-lg text-left'>Skype : </p>
        <input
          type="text"
          placeholder="Skype"
          className="input h-10 text-black   input-bordered input-error"
          name="skype"
          required
        /> <br />
          <button
          
          id="update-button"
          className="input mt-6 w-50  input-bordered input-error"
          type="submit"
        >
          Review
        
        </button>
        </form>
        </div>
        
       </div>
    );
};

export default MyProfile;