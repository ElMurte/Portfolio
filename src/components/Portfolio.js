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
                  <div className="item-wrap">
                    <a href={`${item.srcurl}`}>
                      <img src={`${item.imgurl}`} className="item-img"/>
                      <div >
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          { (item.description).split('\n').map(  (item, i) => { return <p className="achive-list-item" key={i} >{item}  </p>; } ) }
                                                 </div>
                      </div>
                    </a>
                    <ul>
                      {item.techstack.map((tech) => {
                        return <li className="techstack-item-project">{tech}</li>
                      })}
                    </ul>
                  </div>
                </div>
              )
            })
          }
	
          </div>
        </div>
      </div>
	  	  <h6 class="moreinfoprojects">{resumeData.portfoliogit}</h6>
  </section>
        );
  }
}