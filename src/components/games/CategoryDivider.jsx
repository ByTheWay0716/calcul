import React from 'react';
import PropTypes from 'prop-types';
import './CategoryDivider.css';

const CategoryDivider = ({ label, moduleCount }) => {
    return (
        <div className="category-divider">
            <hr className="divider-line" />
            <span className="category-label">
                {label} ({moduleCount})
            </span>
            <hr className="divider-line" />
        </div>
    );
};

CategoryDivider.propTypes = {
    label: PropTypes.string.isRequired,
    moduleCount: PropTypes.number.isRequired,
};

export default CategoryDivider;