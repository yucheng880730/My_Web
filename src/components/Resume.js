import React from 'react'

const Resume = ({ img, title, text }) => {
   
    const clickHandler = (e) => {
        console.log(e);
        console.log(e.target);
        alert('hello world');
    };

    const complexExample = (text) => {
        console.log(text);
    };

    return (
        <article className='resume' onMouseOver={() => {
            console.log(title);
        }}>
            <img src={img} alt='' />
            <h1 onClick={() => console.log(title)}>{title}</h1>
            <h4>{text}</h4>
            <button type='button' onClick={clickHandler}>
                reference example
            </button>
            <button type='button' onClick={() => complexExample(text)}>
                more complex example
            </button>
        </article>
    );
};

export default Resume
