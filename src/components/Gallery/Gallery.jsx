import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Style from './Gallery.module.css'
import img from '../../Assets/Images/image.jpg'

export default function Gallery() {
    return <>
    <div className="row">
        <div className="col-md-3">
            <ul>
                <li><Link to={''}>Web</Link></li>
                <li><Link className={Style.test} to={'mobile'}>Mobile</Link></li>
            </ul>
        </div>
        <div className="col-md-9 test">
            <img src={img} alt="" width={300}/>
            <Outlet></Outlet>
        </div>
    </div>
    </>
}
