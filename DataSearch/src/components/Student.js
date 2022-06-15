import React from "react";
import { useState } from "react";

const Student = ({  image, firstName, lastName, email, company, skill, grades, student, createdTag, deletedTag}) => {

  const [displayGrades, setDisplayGrades] = useState(false);

const [newTag, setNewTag] = useState("");

const fullName= firstName.concat(' ', lastName);

// function newTag(){
//   createdTag(student, searchName);
// }

function storeTag() {
createdTag(student, newTag);
}




// function handleKeyPress(event){
//     if(event.key !== 'Enter') 
//     return 
//     const index = e.target.value
//     if (!index.trim()) 
//     return
//     setNewTag([...tags, index])
//     e.target.value= ''
// }
  const toggle=()=>{
    setDisplayGrades(!displayGrades);
  }



return (
 
    <div className="info-container content-data">
  
    <div className="image-container ">
      <img className="imageBox" src={image} alt="icons" />
    </div>
    <div className="InfoBox content-data"> 
      <h1 className="headingTitle">
       {fullName}
      </h1>
      <p>Email: {email}</p>
      <p>Company: {company}</p>
      <p>Skill: {skill}</p>
      <p>
        Average:{' '}
        {grades.reduce((a, b) => a + parseInt(b), 0) /
          grades.length}
        %
       {/* <div> {console.log(data.email)} </div>  */}
      </p>
      <button onClick={toggle} className={'toggle-button' + (displayGrades ? 'toggle-minus': '' )}>
          {displayGrades 
          ? '-'  : '+'}
      </button>

      { displayGrades && <p>
          {grades.map(function(name,index){
              return <li key={index}>Test {index+1}: {name}%</li>
          })}
      </p>  }
      {/* <Create onAdd={addTag} />
  {tags.map((tagItem, index) => {
    return (
      <Tag
        key={index}
        id={index}
        text={tagItem.text}
        onDelete={deleteTag}
      />
    );
  })} */}

  
   {/* <input type="text" placeholder= "search for Tags" onChange={event => {setNewSearchName(event.target.value)}}/> */}
    <div className="tag-data">

  {student.tags.map((tag, index)=>{
  
    return(
   
        <div className='tags' key={student.id + " " + tag}>{tag}</div>
       

    );
  })
  }

  </div>

<div>
<input // Ads a tag on enter key
            onChange={(event) => {
              setNewTag(event.target.value);
            }}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                storeTag();
                event.target.value = "";
              } else if(event.key === 'Delete'){
                storeTag().clear()
                event.target.value = "";

              }
            }}
            type="text"
            placeholder="Add a tag"
            className="tag-input-container"
          />
        </div>
    {/* <div className="tag">
<input onChange={handleChange} type="text" value={inputText}/>
<button>
<span>add</span>
</button>
    </div> */}
{/* <div>
{ tags.map((tag) => {
    return <li>{tag}</li>
} )}
</div> */}
    </div>
    <hr />
  </div>
);

}


export default Student;