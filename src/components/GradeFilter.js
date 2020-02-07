import React from 'react';

const gradeFilter = (props) => {
    return (
    <div>
        <div className={props.styleGrade[0].className} onClick={props.gradeFilterButton.bind(this, 1)}>Primero</div>
        <div className={props.styleGrade[1].className} onClick={props.gradeFilterButton.bind(this, 2)}>Segundo</div>
        <div className={props.styleGrade[2].className} onClick={props.gradeFilterButton.bind(this, 3)}>Tercero</div>
        <div className={props.styleGrade[3].className} onClick={props.gradeFilterButton.bind(this, 0)}>Todos</div>
    </div>
    )
}

export default gradeFilter;