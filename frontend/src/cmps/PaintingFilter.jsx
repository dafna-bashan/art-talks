import React from 'react'

export function PaintingFilter({ filterBy, onSetFilter }) {

    const handleChange = ({ target }) => {
        onSetFilter(target.value);
    };

    return (
        <div className="painting-filter">
            <input
                type="text"
                placeholder="Search by title or artist"
                value={filterBy}
                onChange={handleChange}
            />
        </div>
    );
};

