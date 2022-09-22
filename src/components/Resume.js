import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">



<div className="row work">
            <div className="three columns header-col">
               <h1><span>Work Experiences</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <div>
                          { (item.Achievements).split('\n').map(  (item, i) => { return <p className="achive-list-item" key={i}>{item} </p>; } ) }
                          <ul>
                          {item.techstack.map((tech) => {
                            return <li className="techstack-item">{tech}</li>
                          })}
                          </ul>
                          </div>
                       </div>

                    </div>

                  )
                })
              }
            </div> 
         </div>



         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                        
                          <h3>{   (item.Achievements)? item.UniversityName : <a href={`${item.link}`}>{item.UniversityName}</a> }</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          <a href={item.link}>  {item.Achievements}</a>
                          </p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
        


         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>Skills</span></h1>
            </div>

            <div className="nine columns main-col">

               <p className="skillsDesc">
                 <b>Soft skills</b>
               {resumeData.skillsDescription}
               </p>

   				<div className="skills">
              <b>Technical skills</b>
   				   <ul className="">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <li>
                      <div className={`skillinfo`}>
                      <span className={`${item.skillname.toLowerCase()}`}><img className={`skillImg`} src={`${item.skillicon}`} alt={`${item.skillname} icon`}></img>
                      </span><em>{item.skillname}</em>
                      </div>
                      </li>
                      
                    )
                  })
                }

   					</ul>

   				</div>

   			</div>

         </div>

      </section>
    );
  }
}