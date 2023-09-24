import React from 'react'
import Style from './Register.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

export default function Register() {
  function registerSubmit(values){
    let {data} = axios.post('' , values)
  }

  let validationSchema = Yup.object({
    name: Yup.string().min(3, 'Name must be more than 3 characters').max(15, 'Name must be less than 15 characters').required('Name is Required'),
    email: Yup.string().email('Invalid email address').required('Email is Required'),
    password: Yup.string().matches(/^[A-Z][a-z0-9]{5,10}$/, 'Password must start uppercase and any lowercase or number from 6:11').required('Name is Required'),
    rePassword: Yup.string().oneOf([Yup.ref('password')], "Password And RePassword don't match").required('RePassword is Required'),
    phone: Yup.string().matches(/^01[0125][0-9]{8}$/, 'We need Egyotion number').required('Phone is Required'),
  })
  // function validate(values){
  //   let errors = {}

  //   if(!values.name){
  //     errors.name = 'Name is Required'
  //   }
  //   else if(values.name.length < 3) {
  //     errors.name = 'Name must be more than 3 characters'
  //   }
  //   else if(values.name.length > 15) {
  //     errors.name = 'Name must be less than 15 characters'
  //   }
    
  //   if (!values.email) {
  //     errors.email = 'Email is Required'
  //   }
  //   else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
  //     errors.email = 'Invalid email address';
  //   }

  //   if (!values.password) {
  //     errors.password = 'Password is Required'
  //   }
  //   else if (!/^[A-Z][a-z0-9]{5,10}$/i.test(values.password)) {
  //     errors.password = 'Password must start uppercase and any lowercase or number from 6:11'
  //   }
  //   console.log(errors);

  //   return errors
  // }

  let formik = useFormik({
    initialValues:{
      name:'',
      email:'',
      password:'',
      rePassword:'',
      phone:''
    }, validationSchema, onSubmit:registerSubmit
  })

  return (
    <>
    <div className="w-75 mx-auto p-4">
      <h2>Register Now</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} className='form-control mb-2' type="text" id='name' name='name'/>
        {formik.errors.name&& formik.touched.name?<div className="alert alert-danger">{formik.errors.name}</div>: ''}

        <label htmlFor="email">Email</label>
        <input onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} className='form-control mb-2' type="email" id='email' name='email'/>
        {formik.errors.email&& formik.touched.email?<div className="alert alert-danger">{formik.errors.email}</div>: ''}

        <label htmlFor="password">Password</label>
        <input onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} className='form-control mb-2' type="password" id='password' name='password'/>
        {formik.errors.password&& formik.touched.password?<div className="alert alert-danger">{formik.errors.password}</div>: ''}

        <label htmlFor="repassword">Re Password</label>
        <input onChange={formik.handleChange} value={formik.values.rePassword} onBlur={formik.handleBlur} className='form-control mb-2' type="password" id='repassword' name='repassword'/>
        {formik.errors.rePassword&& formik.touched.rePassword?<div className="alert alert-danger">{formik.errors.rePassword}</div>: ''}

        <label htmlFor="phone">Phone</label>
        <input onChange={formik.handleChange} value={formik.values.phone} onBlur={formik.handleBlur} className='form-control mb-2' type="tel" id='phone' name='phone'/>
        {formik.errors.phone&& formik.touched.phone?<div className="alert alert-danger">{formik.errors.phone}</div>: ''}

        <button type='submit' className='btn bg-main text-white'>Register</button>
      </form>
    </div>
    </>
  )
}
