import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Projects</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                 <a href={`${item.srcurl}`}> <div className="item-wrap">
                    
                      <img src={`${item.imgurl}`} className="item-img"/>
                      <div >
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          { (item.description).split('\n').map(  (item, i) => { return <p className="achive-list-item" key={i} >{item}  </p>; } ) }
                                                 </div>
                      </div>
                    
                    <ul>
                      {item.techstack.map((tech) => {
                        return <li className="techstack-item-project">{tech}</li>
                      })}
                    </ul>
                  </div></a>
                </div>
              )
            })
          }
	
          </div>
        </div>
      </div>
	  	  <a target="_blank" href={resumeData.socialLinks[1].url}><h6 class="moreinfoprojects">{resumeData.portfoliogit}</h6></a>
  </section>
        );
  }
}