import React from 'react';

const markFilter = (props) => {
    return (
        <div>
            <div className={props.styleMark[0].className} onClick={props.markFilterButton.bind(this, 1)}>Aprobados</div>
            <div className={props.styleMark[1].className} onClick={props.markFilterButton.bind(this, 2)}>Suspensos</div>
            <div className={props.styleMark[2].className} onClick={props.markFilterButton.bind(this, 0)}>Todos</div>
        </div>
    )
}

export default markFilter;