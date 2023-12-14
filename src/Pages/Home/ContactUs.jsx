import { useRef } from "react";
import emailjs from '@emailjs/browser';


const ContactUs = () => {

    
        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs.sendForm('service_zcnfk7l', 'template_ukfx5xf', form.current, 'BNN9Ve2EBo1de04vo')
            .then((result) => {
                form.reset()
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        };
      
    return (
        <div className="bg-slate-200 text-black ">
            <h1 className="text-4xl font-bold  text-center bg-orange-400 border md:w-96 mx-auto  p-1 text-black">Contact ME</h1>
              <form ref={form} onSubmit={sendEmail}>

              <div className="form-control w-2/3 mx-auto">
          <label className="label">
            <span className="label-text text-black">Name</span>
          </label>
          <input type="text" placeholder="email"  name="user_name" className="input input-bordered bg-white" required />
        </div>

              <div className="form-control w-2/3 mx-auto">
          <label className="label">
            <span className="label-text text-black">Email</span>
          </label>
          <input type="email" placeholder="email" name="user_email" className="input input-bordered bg-white" required />
        </div>

              <div className="form-control w-2/3 mx-auto">
          <label className="label">
            <span className="label-text text-black">Message</span>
          </label>
          <textarea name="message"  className="bg-white"/>
        </div>
       
       <div className="flex justify-center">
       <button className="btn bg-slate-200 text-black mt-5 mb-5 w-72 md:w-96 mx-auto">Send</button>
       </div>
     
    </form>
        </div>
    );
};

export default ContactUs;