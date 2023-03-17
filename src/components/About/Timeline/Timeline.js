// import { React, useState } from 'react'
import "./Timeline.css"

function Timeline({ desc, data }) {
    return (

        <div className="col-lg-6 col-12">
            <h2 className="mb-4" style={{color:"green"}}>{desc}</h2>
            <div className="timeline" >
                {data.map((data) => {
                    return (
                        <div className="timeline-wrapper ">
                            <div className="timeline-yr">
                                <span>{data.yar}</span>
                            </div>
                            <div className="timeline-info">
                                <h3><span>{data.as_a}</span><br /><small>{data.cmpny}</small></h3>
                                <p>{data.dml_desc}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default Timeline