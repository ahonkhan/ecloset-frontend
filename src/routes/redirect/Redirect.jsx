import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Redirect = ({ location, title }) => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate(location)

    }, [])

}

export default Redirect