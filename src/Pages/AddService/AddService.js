import React from 'react';
import { useForm} from "react-hook-form";
import './AddService.css'
import axios from 'axios';

const AddService = () => {

 const { register, handleSubmit,reset} = useForm();
 
 const onSubmit = data => {
     
    axios.post('http://localhost:5000/services',data)
    .then(res => {
       if(res.data.insertedId) {
           alert("Sucessfully added")
           reset();
       }
     
    })
 };

 



    return (
        <div className="addservice">
        <h2>Add a Service</h2>
     <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("Name", { required: true, maxLength: 20 })} placeholder="Name" />
      <textarea {...register("description")} placeholder="description" />
      <input type="number" {...register("price")} placeholder="price" />
      <input {...register("img")} placeholder="img" />
      <input className="submit-button" type="submit" />
    </form>
        </div>
    );
};

export default AddService;