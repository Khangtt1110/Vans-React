import React from 'react'
import PropTypes from 'prop-types'
import './Button.scss'
import { Icon } from 'semantic-ui-react'



const Button = props => {
    return (
        <button className={`btn ${props.className}`} onClick={props.onClick ? () => props.onClick() : null}>
            <div>
                {props.children}
                {props.icon && <Icon size='large' name={`${props.icon}`} className='btn-icon' />}
            </div>
        </button >
    )
}

Button.propTypes = {
    onClick: PropTypes.func
}

export default Button
