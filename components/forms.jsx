import React from 'react';
import { useForm } from "react-hook-form";

import styles from '@styles/Forms.module.css'

const Contact = () =>{
const { register, handleSubmit } = useForm();

    return(
        <form netlify>
            <input {...register("firstName", { required: true })} placeholder="First name" />
            <input {...register("lastName", { required: true })} placeholder="Last name" />
        </form>
    )
}

export default Contact;