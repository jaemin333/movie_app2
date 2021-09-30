import React from 'react';
import PropTypes from 'prop-types';

function Movie(){
    return
}

Movie.PropTypes = {
    id:PropTypes.number.isRequired,
    year:PropTypes.number.isRequired,
    title:PropTypes.string.isRequired,
    summary:PropTypes.string.isRequired,
    poster:PropTypes.string.isRequired,
}