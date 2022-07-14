import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox } from 'semantic-ui-react';

const CustomCheckbox = props => {
    const data = props.data;
    return data.map((prop) => (
        <div style={{ margin: '0 2em', display: 'flex' }} key={prop}>
            <label style={{ marginRight: '.5em' }}>{prop}</label>
            <Checkbox onClick={props.onClick ? () => props.onClick() : null} />
        </div>
    ));
}

CustomCheckbox.propTypes = {
    onClick: PropTypes.func
}

export default CustomCheckbox