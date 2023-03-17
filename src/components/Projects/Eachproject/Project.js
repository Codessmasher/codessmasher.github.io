import React from 'react'
// css imported
import "../../Common.css"
import "../Projects.css"

function Project(props) {
    return (
        <div>
            <div className="each_prjct cornr_crcl " style={{backgroundColor:props.bgcolor}}>
                <div className="prjct_nm_dt m_stndrd">
                    <h1>{props.p_name}</h1>
                    <h5 style={{color:"yellow",fontSize:"1rem" }}>{props.p_dt}</h5>
                </div>
                <div className="prjct_desc m_stndrd">{props.p_desc}</div>
                <div className="prjct_link_src m_stndrd flex_btwn">
                    <a href={props.see} className="btn_non_outln">Live</a>
                    <a href={props.source} className="btn">Source</a>
                </div>
            </div>
        </div>
    )
}

export default Project