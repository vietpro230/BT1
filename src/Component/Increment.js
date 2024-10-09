import React from 'react'
import { FaHandPointer } from "react-icons/fa";
import { LuRefreshCw } from "react-icons/lu";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa6";
import { useState } from 'react';


const Increment = () => {
    const [value, setValue] = useState(0);
    const increase = () => {
        setValue(value + 1);
    }
    const decrease = () => {
        if (value === 0) {
            return;
        }
        setValue(value - 1);
    }
    const reset = () => {
        setValue(0);
    }



    return (
        <div className="container">
            <div className="content">
                <div className="header">
                    <h1>Homework 01</h1>
                </div>
                <div className="content-top">
                    <FaHandPointer size={32} />
                    <h1>React Clicker</h1>
                </div>
                <div className="content-bottom">
                    <div class="value">
                        <p>{value}</p>
                    </div>
                    <div class="button">
                        <button class="increase" onClick={increase}>
                            <FaPlus size={32} />
                        </button>
                        <button class="reset" onClick={reset}>
                            <LuRefreshCw size={32} />
                        </button>
                        <button class="decrease" onClick={decrease}>
                            <FaMinus size={32} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Increment;