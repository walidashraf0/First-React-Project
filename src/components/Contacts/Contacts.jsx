import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Contacts() {
    return <>
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <ul>
                        <li><Link to={''}>Web</Link></li>
                        <li><Link to={'mobile'}>Mobile</Link></li>
                    </ul>
                </div>
                <div className="col-md-9">
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    </>
}
