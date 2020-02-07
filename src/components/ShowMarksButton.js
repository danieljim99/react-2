import React from 'react';

const showMarksButton = (props) => {
    return (
        <div className={props.styleShow.className} onClick={props.showMarks.bind(this, props.subjectName)}>&#128065;</div>
    );
}

export default showMarksButton;