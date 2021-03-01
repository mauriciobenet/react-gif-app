import React, { Fragment, useState } from 'react';

import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState([]);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if( inputValue.trim().length > 0 ) {
            setCategories( categories => [inputValue, ...categories] );
            setInputValue('');
        }

    }

    return (
        <Fragment>
            <h2>Add Category</h2>
            <form onSubmit={ handleSubmit }>
                <input
                    type="text"
                    value={ inputValue }
                    placeholder="Write a category"
                    onChange={ handleInputChange }/>
            </form>
        </Fragment>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;