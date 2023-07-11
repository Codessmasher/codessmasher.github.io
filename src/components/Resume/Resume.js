
// css imported
import "../Common.css"
import "./Resume.css"


function Resume() {
    return (
        <div className="Resume">

            <div id="Resume_box" className="m_stndrd p_stndrd box_shdow ">
                <iframe src="DEEPJYOTI_DAS_3rd_Yr_Resume.pdf" width="100%" height="900px">
                </iframe>
            </div>
            <div className="flex_arnd">
                <a className='btn m_stndrd p_stndrd ' href="https://github.com/Codessmasher/portfolio/raw/master/DEEPJYOTI_DAS_Resume.pdf">DOWNLOAD RESUME</a>
            </div>
        </div>
    )
}

export default Resume
