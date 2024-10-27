"use client";
import { useRouter } from "next/navigation";

const SignupForm = () => {
  const router = useRouter();

    const handleSignUp =async(e)=>{
        e.preventDefault()
        const newUser = {
        email :  e.target.email.value  ,     
         password :  e.target.password.value 
        }
        const resp = await fetch ("https://next-todo-omega-liart.vercel.app/signup/api",{
            method:'POST',
            body:JSON.stringify(newUser),
            headers:{
                "content-type":"application/json"
            }
        })
              
        console.log(resp)
        if(resp.status===200){
            e.target.reset()
            router.push('/login')
          
           
          
        }
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
        
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input clas name="email" type="email" placeholder="email" className="input input-bordered text-black" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input name="password" type="password" placeholder="password" className="input input-bordered text-black" required />
                <label className="label">
                  <a href="/login" className="label-text-alt link link-hover">Click to signin?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignupForm;
