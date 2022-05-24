import React, { useState } from 'react'
import FormHandler from './FormHandler'

export default function App() {
    const { fields, handleChange } = FormHandler({
        email: '',
        password: ''
    })

    return (
        <form className='w-25 bg-white p-3 rounded mx-auto mt-5'>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                </label>
                <input
                    value={fields.email}
                    onChange={handleChange}
                    type="email"
                    className="form-control"
                    name="email"
                />
                <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                </label>
                <input
                    value={fields.password}
                    onChange={handleChange}
                    type="password"
                    className="form-control"
                    name="password"
                />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                </label>
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>

    )
}
