// import { useState } from "react";
// import "./App.css";

// function App() {

//   const[count, setCount] = useState(0);

//   function decreaseHandler(){
// setCount(count-1);
//   }

//   function increaseHandler(){
//     setCount(count+1);
//       }
//       function resetHandler(){
//         setCount(0);
//           }

//   return (
//     <div className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">

// <div className="text-[#0398d4] font-medium  text-2xl ">Increment && Decrement</div>
// <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
//   <button onClick={decreaseHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">
//     -
//   </button>
//   <div className="font-bold gap-12 text-5xl" >
// {count}
//   </div>
//   <button onClick={increaseHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">
//     +
//   </button>
// </div>
// <button onClick={resetHandler} className="bg-[#0398d4] text-white  px-5 py-2 rounded-sm text-lg">
//   Reset
// </button>
//     </div>
//   );
// }

// export default App;




import "./App.css";
import {useState} from "react"

function App() {
  const [formData, setFormData] =useState({
    firstName:"", lastName:"", email:"", country:"India", streetAddress:"", city:"", state:"", postalCode:"", comments:false, candidates:false, offers:false, pushNotification:""
  })
  function changeHandler(event){
    const{name, value, checked, type} =event.target;
    setFormData((prev) =>({...prev, [name]:type === "checkbox" ? checked:value}));

  }
  function submitHandler(event){
    event.preventDefault();
    console.log("Finally printing the value of Form data");
    console.log(formData);


  }
  return(
<div className="flex flex-col items-center mt-2 ">

<form onSubmit={submitHandler}>
<label htmlFor="firstName">FirstName</label>
<br />
<input 
type="text"
name="firstName"
id="firstName"
placeholder="Naresh"
value={formData.firstName}
onChange={changeHandler}
className="outline "
 />

 <br />
<label htmlFor="lastName">LastName</label>
<br />
<input 
type="text"
name="lastName"
id="lastName"
placeholder="Kumar"
value={formData.lastName}
onChange={changeHandler}
className="outline "
 />

 <br />
 <label htmlFor="email">Email</label>
<br />
<input 
type="text"
name="email"
id="email"
placeholder="nareshbaghel274@gmail.com"
value={formData.email}
onChange={changeHandler}
className="outline "
 />
 <br />

<label htmlFor="country">Country</label>
<br />

<select
 name="country"
  id="country" 
  value={formData.country}
  onChange={changeHandler}
  className="outline"
  >
  <option>India</option>
  <option>United States</option>
  <option>Canada</option>
  <option>Mexico</option>
</select>





<br />
<label htmlFor="streetAddress">StreetAddress</label>
<br />
<input 
type="text"
name="streetAddress"
id="streetAddress"
placeholder="Vahanpur-341c"
value={formData.streetAddress}
onChange={changeHandler}
className="outline "
 />


<br />
<label htmlFor="city">City</label>
<br />
<input 
type="text"
name="city"
id="city"
placeholder="Hathras"
value={formData.city}
onChange={changeHandler}
className="outline "
 />

<br />
<label htmlFor="state">State / Province</label>
<br />
<input 
type="text"
name="state"
id="state"
placeholder="Uttar Pradesh"
value={formData.state}
onChange={changeHandler}
className="outline "
 />

<br />
<label htmlFor="postalCode">Postal Code</label>
<br />
<input 
type="text"
name="postalCode"
id="postalCode"
placeholder="204102"
value={formData.postalCode}
onChange={changeHandler}
className="outline "
 />



<br /> <br />
<fieldset>
 <legend>By Email</legend>

<div className="flex">

 <input 
 id="comments"
 name="comments"
 type="checkbox"
 checked={formData.comments}
 onChange={changeHandler}
  />
  <div>
   <label htmlFor="comments">Comments</label>
   <p > Get notified when someones posts a comment on a posting</p>
  </div>
  </div>
 
  <div className="flex">

<input 
id="candidates"
name="candidates"
type="checkbox"
checked={formData.candidates}
onChange={changeHandler}
 />
 <div>
  <label htmlFor="candidates">Candidates</label>
  <p > Get notified when a candidate applies for a job</p>
 </div>
 </div>

 <div className="flex">

<input 
id="offers"
name="offers"
type="checkbox"
checked={formData.offers}
onChange={changeHandler}
 />
 <div>
  <label htmlFor="offers">Offers</label>
  <p > Get notified when  a candidate accepts or rejects an offers</p>
 </div>
 </div>




</fieldset>
<br />
<fieldset>
  <legend>Push Notification</legend>
  <p>These are delivered via SMS to your mobile phone</p>
  <input 
  type="radio" 
  name="pushNotification"
   id="pushEverything" 
   value="Everything"
   onChange={changeHandler}

   />
   <label htmlFor="pushNotification">Everything</label>

<br />
   <input 
  type="radio" 
  name="pushNotification"
   id="pushEmail" 
   value="Same as Email "
   onChange={changeHandler}

   />
   <label htmlFor="pushEmail">Same as email</label>

<br />
   <input 
  type="radio" 
  name="pushNotification"
   id="pushNothing" 
   value="No Push Notification "
   onChange={changeHandler}

   />
   <label htmlFor="pushNothing">No Push Notification</label>
</fieldset>

<button className="bg-blue-500 text-white font-bold rounded-md  py-2 px-4">Save</button>
</form>

</div>
  );
}

export default App;