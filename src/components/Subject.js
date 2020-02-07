import React from 'react';
import Teacher from './Teacher';
import Student from './Student';
import ShowMarksButton from './ShowMarksButton';
import MarksBox from './MarksBox';

const subject = (props) => {
    let result = null;

    if(props.subject.appear){
        if(props.subject.view){
            result = (
                <div className="subject">
                    <h2 className="clickable subjectNameClicked" onClick={props.clickSubject.bind(this, props.subject.name)}>{props.subject.name}</h2>
                    <div> <Teacher teacher={props.subject.teacher}/> <ShowMarksButton styleShow={props.subject.styleShowButton} showMarks={props.showMarks} subjectName={props.subject.name}/></div>
                    <div style={{display: "flex"}}>
                        <div>
                            {props.subject.students.map(student => {
                                return <Student student={student} subjectName={props.subject.name} key={student.id}></Student>
                            })}
                        </div>
                        <MarksBox subjectName={props.subject.name} calcs={props.calcs}/>
                    </div>
                </div>
            );
        } else {
            result = (
                <div className="subject">
                    <h2 className="subjectName clickable" onClick={props.clickSubject.bind(this, props.subject.name)}>{props.subject.name}</h2>
                </div>
            );
        }
    }

    
    return result;
}

export default subject;