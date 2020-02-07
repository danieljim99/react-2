import React from 'react';

const student = (props) => {
    let result = null;

    if(props.student.appear){
        result = (
            <div style={{display:"flex"}}>
                <div className="student" key={props.student.id}> {props.student.name}</div>
                <div style={{visibility: props.student.appearMark ? "visible" : "hidden"}} className="marks">{props.student.mark}</div>
            </div>
        );
    }

    return result; 
}

export default student;