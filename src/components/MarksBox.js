import React from 'react';

const marksBox = (props) => {
    return (
        <div className="marksBox">
            <p>Average Mark: {props.calcs(props.subjectName)[0]}</p>
            <p>Max Mark: {props.calcs(props.subjectName)[2]}</p>
            <p>Min Mark: {props.calcs(props.subjectName)[1]}</p>
        </div>
    );
}

export default marksBox;