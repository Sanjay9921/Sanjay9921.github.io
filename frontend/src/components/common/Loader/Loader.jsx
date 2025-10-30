// src/components/common/Loader/Loader.jsx

import React from 'react'

import style from './Loader.module.css';

function Loader() {
    return (
        <div className={style.spinner}>
            <div></div>   
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
            <div></div>    
        </div>
    );
}

export default Loader;