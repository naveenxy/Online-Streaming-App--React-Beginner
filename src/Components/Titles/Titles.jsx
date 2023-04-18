import React from 'react';

import Segment from '../Segment';

import  './Titles.css';

const Titles = () => {
    return (
        <div className="titles">
            <Segment title="Popular on Netflix" />
            <Segment title="Continue watching for Home" />
            <Segment title="Prime Action and adventure movies" />
            <Segment title="Comedy movies on Netflix" />
            <Segment title="Movies in English" />
        </div>
    );
};

export default Titles;
