import React from 'react';

export default function Question (props) {
return(
    <>
    <h1>{props.question}</h1>
    <h6>{props.answerOpts}</h6>
    <h6></h6>
    <h6></h6>
    <h6></h6>
    </>
);
}