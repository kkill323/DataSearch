import React from "react";
import { useState, useEffect } from "react";
import StudentContainer from "./components/StudentContainer";
import SearchFullName from "./components/SearchFullName";
import TagSearch from "./components/TagSearch";

export default function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [studentFilter, setStudentFilter] = useState("")
  const [filteredTagData,setFilteredTagData] = useState("");

  async function getData() {
  try{  
      const response = await fetch( "https://api.hatchways.io/assessment/students" )
      const data = await response.json()
      const students = data.students;
      // if (!data.ok) throw Error('Did not receive expected data');
students.forEach((student)=>{
student.tags =[];
});

      setData(students);
      // setFilteredData(response.data)
      // console.log(setFilteredData)
      setError(null)
      // console.log(students);

    } catch (err) {
      setError(err.message)
      setData(null)
      setLoading(false);
    } finally {
      setLoading(true)
    }

  }

    

  useEffect(() => {
    
    getData();
  }, [])



  //Add tags

  const createTagStudent = (student, newTag) => {
    student.tags.push(newTag);

    const index = data.findIndex((i) => i.id === student.id);
    let changedStudentData = [
      ...data.slice(0, index),
      student,
      ...data.slice(index + 1),
    ];
    setData(changedStudentData);
  };


//search through name and return the result

  const filteredName = (filteredText) => {
    if (filteredText && filteredText.toLowerCase) {
      filteredText = filteredText.toLowerCase();
    }
    let filtered = [];
    data.forEach((student) => {
    const fullName = `${student.firstName} ${student.lastName}`.toLowerCase();

      if (!filteredText || fullName.includes(filteredText)) {
        filtered.push(student);
      }
    });
    return filtered;
  };





    
//search through tags

const findTags = (tagInsert) => {
  if (tagInsert && tagInsert.toLowerCase) {
    tagInsert = tagInsert.toLowerCase();
  }

  let tagsData = [];
  data.forEach((student) => {
    let tag = false;
    student.tags.forEach((index) => {
      if (index.toLowerCase().includes(tagInsert)) {
        tag = true;
      }
    });

    if (!tagInsert || tag) {
      tagsData.push(student);
    }
  });
  return tagsData;
};




const combinedStudentAndTags = [];
 //join arrays

 filteredName(studentFilter).forEach((student) => {
    if ( findTags(filteredTagData).includes(student)) {
      combinedStudentAndTags.push(student);
    }
  });



  return (
    <div className="dataContainer">
      <div>
        <SearchFullName
          handleSearchFullName={setStudentFilter}
          placeholder="Search by name"
        />
      </div>
      <hr></hr>
      <div>
        <TagSearch handleSearchTag={setFilteredTagData} placeholder="Search by tag" />
      </div>
      <hr></hr>
      <div>
        {" "}
        <StudentContainer
          students={combinedStudentAndTags}
     
          createdTag={createTagStudent}
        />
      </div>
    </div>
  );
};


