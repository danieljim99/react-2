import React, {Component} from 'react';
import Subject from './components/Subject';
import Header from './components/Header';
import './App.css';

class App extends Component {
  state = {
    styleGradeButtons: [
      {
        className: "button clickable"
      },

      {
        className: "button clickable"
      },

      {
        className: "button clickable"
      },

      {
        className: "button clickedButton clickable"
      },
    ],

    styleMarkButtons: [
      {
        className: "button clickable"
      },

      {
        className: "button clickable"
      },

      {
        className: "button clickedButton clickable"
      },
    ],

    subjects: [
      {
        name: "Programacion I",
        id: 1,
        grade: 1,
        appear: true,
        view: false,
        styleShowButton: {
          isClicked: false,
          className: "clickable showMarks"
        },
        teacher: {name: "Alberto Valero"},
        students: [{id: 1, name: "Marcos Alonso", mark: 7, appear: true, appearMark: false}, {id: 2, name: "Luis Rodri", mark: 4, appear: true, appearMark: false}, {id: 3, name: "Mariana Simbiotica", mark: 6, appear: true, appearMark: false}]
      },

      {
        name: "Estructura de Datos",
        id: 2,
        grade: 1,
        appear: true,
        view: false,
        styleShowButton: {
          isClicked: false,
          className: "clickable showMarks"
        },
        teacher: {name: "Jose Emilio Torres"},
        students: [{id: 1, name: "Marcos Alonso", mark: 2, appear: true, appearMark: false}, {id: 2, name: "Luis Rodri", mark: 4, appear: true, appearMark: false}, {id: 3, name: "Mariana Simbiotica", mark: 6, appear: true, appearMark: false}]
      },

      {
        name: "Java",
        id: 3,
        grade: 2,
        appear: true,
        view: false,
        styleShowButton: {
          isClicked: false,
          className: "clickable showMarks"
        },
        teacher: {name: "Jorge Comosellame"},
        students: [{id: 4, name: "Agustina Agatiello", mark: 9, appear: true, appearMark: false}, {id: 5, name: "Alberto Obo", mark: 4, appear: true, appearMark: false}, {id: 6, name: "Simon Perico", mark: 6, appear: true, appearMark: false}]
      },

      {
        name: "Backend",
        id: 4,
        grade: 3,
        appear: true,
        view: false,
        styleShowButton: {
          isClicked: false,
          className: "clickable showMarks"
        },
        teacher: {name: "Alberto Otravez"},
        students: [{id: 7, name: "Mateo", mark: 9, appear: true, appearMark: false}, {id: 8, name: "Luis Tengounaduda", mark: 10, appear: true, appearMark: false}, {id: 9, name: "Estefaniaaaa", mark: 6, appear: true, appearMark: false}]
      }
    ]
  };

  showMarksHandler = (subjectName) => {
    let array = this.state.subjects.slice();

    const subject = array.find(elem => elem.name === subjectName);

    subject.styleShowButton.isClicked = !subject.styleShowButton.isClicked;

    subject.styleShowButton.className = subject.styleShowButton.isClicked ? "clickable clickedShowMarks" : "clickable showMarks";

    subject.students.map(obj => obj.appearMark = !obj.appearMark);

    this.setState({subjects: array});
  };

  appearSubjetHandler = (name) => {
    let array = this.state.subjects.slice();

    array.map(obj => {
      if(obj.name === name){
        obj.view = !obj.view;
      }

      return obj;
    });

    this.setState({subjects: array});
  };

  markFilterHandler = (filter) => {
    let subjects = this.state.subjects.slice();
    let styles = this.state.styleMarkButtons.slice();

    styles.map((style, index) => {
      if(index === (filter + 2) % 3){
        style.className = "button clickedButton clickeable";
      } else {
        style.className = "button clickable";
      }
      return style;
    });
    
    subjects.forEach(elem => {
      elem.students.map(obj => {
        if(filter === 0 || (filter === 1 && obj.mark >= 5) || (filter === 2 && obj.mark < 5)){
          obj.appear = true;
        } else {
          obj.appear = false;
        }

        return obj;
      });
    })

    this.setState({subjects: subjects, styleMarkButtons: styles});
  };

  gradeFilterHandler = (filter) => {
    let array = this.state.subjects.slice();
    let styles = this.state.styleGradeButtons.slice();

    styles.map((style, index) => {
      if(index === (filter + 3) % 4){
        style.className = "button clickedButton clickable";
      } else {
        style.className = "button clickable";
      }
      return style;
    });

    array.map(obj => {
      if(filter === 0 || obj.grade === filter){
        obj.appear = true;
      } else {
        obj.appear = false;
      }

      return obj;
    });

    this.setState({subjects: array, styleGradeButtons: styles});
  };

  marksCalcs = (subjectName) => {
    let array = this.state.subjects.slice();
    let averageMark = 0;
    let markArray = [];

    const subject = array.find(subject => subject.name === subjectName);

    subject.students.forEach(student => {
      markArray.push(student.mark);
      averageMark = averageMark + student.mark;
    });

    averageMark = averageMark / subject.students.length;
    const maxMark = Math.max(...markArray);
    const minMark = Math.min(...markArray);

    return [averageMark.toFixed(2), minMark.toFixed(2), maxMark.toFixed(2)];
  }

  render(){
    return (
      <div className="App">
        <Header styleMark={this.state.styleMarkButtons} styleGrade={this.state.styleGradeButtons} markFilterButton={this.markFilterHandler} gradeFilterButton={this.gradeFilterHandler}/>
        {this.state.subjects.map(subject => <Subject calcs={this.marksCalcs} showMarks={this.showMarksHandler} clickSubject={this.appearSubjetHandler} subject={subject} key={subject.id}/>)}
      </div>
    );
  }
}

export default App;