import React from 'react';
import GradeFilter from './GradeFilter';
import MarkFilter from './MarkFilter';

const header = (props) => {
    return (
        <div className="header">
            <GradeFilter styleGrade={props.styleGrade} gradeFilterButton={props.gradeFilterButton}/>
            <MarkFilter styleMark={props.styleMark} markFilterButton={props.markFilterButton}/>
        </div>
    );
}

export default header;