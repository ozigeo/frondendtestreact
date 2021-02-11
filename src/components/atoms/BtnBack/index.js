import React from 'react'

const BtnBack = ({title, ...rest}) => {
    return (
        <div>
            <button type="submit" className="btn btn-outline-primary" {...rest}>{title}</button>
        </div>
    )
}

export default BtnBack
