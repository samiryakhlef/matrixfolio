import React from 'react'
import './Form.css'
import { useState } from 'react';


export default function Form() {

    const [closeForm, setCloseForm] = useState(true);

    const closed = () => {
        setCloseForm(!closeForm);
    }
    console.log(closeForm);
    return (
        <>
            {closeForm ?
                    <form className='form-contact'>
                        < span
                            onClick={closed}
                            className="closed" > x
                        </span >

                        <h4>Contact</h4>

                        <input
                            className='input-items'
                            type="text"
                            placeholder='Nom' />

                        <input
                            className='input-items'
                            type="text"
                            placeholder='prenom' />

                        <textarea name=""
                            id=""
                            cols="20"
                            rows="5"
                            placeholder='Entrer votre message'>
                        </textarea>
                        <button
                            className='btn-form'>
                            Envoyer
                        </button>
                    </form >
                    : false}
        </>
    )
}
