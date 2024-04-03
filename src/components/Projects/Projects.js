import React, { useState, useEffect } from "react";
import LoadingSpinner from "../Spinner/LoadingSpinner";
import Project from "./Eachproject/Project"
import "../Common.css"
import "./Projects.css"

export default function Projects() {
    const [Proj, setProj] = useState([]);
    const [load, setload] = useState(null);
    useEffect(() => {
        fetch("https://codessmasher.github.io/projectdetails/ProjectData.json")
            .then(response => response.json())
            .then(response => {
                setProj(response);
                setload(1);
            })
    }, [])

    const renderUser = (
        <div>
            <h3 className="txt_center p_stndrd" style={{color:"green"}}>MY PROJECTS</h3>
            <div className="m_stndrd p_stndrd box_shdow ">
                <div className="grid m_stndrd prjc" style={{boxSizing:"border-box"}}>
                    {Proj.map((item, index) =>
                    (
                        <Project p_name={item.p_name} p_dt={item.p_dt} p_desc={item.p_desc} see={item.see} source={item.source} bgcolor={item.bgcolor} key={index} />
                    )
                    )
                    }
                </div>
            </div>
        </div>
    );

    return (
        <div>
            {/* set load as false initially--then show loader ??then show fetched data by setting load as true */}
            {load ? renderUser : <LoadingSpinner />}
        </div>
    );
}
