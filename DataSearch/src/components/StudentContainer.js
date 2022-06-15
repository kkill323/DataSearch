import React from "react";
import Student from "./Student";

const StudentContainer = ({ students, createdTag }) => {
  return (
    <div>
      {students.map((student) => {
        return (
          <Student
            key={"student" + student.id.toString()}
            image={student.pic}
            firstName={student.firstName.toUpperCase()}
            lastName={student.lastName.toUpperCase()}
            email={student.email}
            company={student.company}
            skill={student.skill}
            
            grades={student.grades}
            student={student}
            createdTag={createdTag}
          />
        );
      })}
    </div>
  );
};

export default StudentContainer;
