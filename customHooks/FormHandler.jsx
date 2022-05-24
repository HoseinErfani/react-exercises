import React,{useState} from 'react'

export default function FormHandler(init) {

    const [fields, setFields] = useState(init)

    function handleChange(e) {
        const { target } = e;
        setFields({
            ...fields,
            [target.name]: target.value
        })
    }
    return {fields,handleChange};
}
