import React, { useState } from 'react'
import vg from "../assets/vg.png";
import toast  from 'react-hot-toast';
import {motion} from 'framer-motion';
import {addDoc,collection} from 'firebase/firestore';
import { db } from '../firebase';
const Contact = () => {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");
  const [disablebtn,setDisablebtn] = useState(false);

  const submitHandlar = async(e)=>{
e.preventDefault();
setDisablebtn(true)
try {
  await addDoc(collection(db,'contacts'),{name,email,message})
  setName('')
  setEmail('')
  setMessage('')
  toast.success('Message Sent');
  setDisablebtn(false)
  
} catch (error) {
  toast.error('Error');
  console.log(error);
  setDisablebtn(false)
}
  };

  const animations = {
    form:{
      initial:{
        x:'-100%',
        opacity:0,
      },
      whileInView:{
        x:0,
        opacity:1,
      },
    },

    button:{
      initial:{
        y:'-100%',
        opacity:0,
      },
      whileInView:{
        y:0,
        opacity:1,
      },
    }
  }

  return (
    <div id='contact'>
        <section>
            <motion.form onSubmit={submitHandlar}
             {...animations.form}>
                <h2>
                Contact Me
                </h2>
                <input type="text" value= {name} onChange={(e)=>setName(e.target.value)} placeholder="Your Name"/>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Email"/>
                <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Your Message"/>

                <motion.button disabled={disablebtn} 
                className={ disablebtn ?'disableBtn':''}
                type="submit"
                {...animations.button}>Send</motion.button>
            </motion.form>
        </section>
        <aside>
<img src={vg} alt="Graphics" />
        </aside>
    </div>
  )
}

export default Contact