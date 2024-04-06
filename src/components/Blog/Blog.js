
// css imported
import "../Common.css"
import "./Blog.css"


function Blog() {
    return (
        <div className="Blogs ">

            // <div className="Blog_box box_shdow m_stndrd prjc" style={{ boxSizing: "border-box" }}>
            //     <h2></h2>
            //     <p>...</p>
            //     <a href="">Read More</a>
            // </div> 
            <div className="Blog_box box_shdow m_stndrd prjc" style={{ boxSizing: "border-box" }}>
                <h2>Fruit Into Baskets |🔥 C++ | Sliding Window | Map | Easy explanation | Leetcode</h2>
                <p>Intuition We will keep plucking one fruit while traversing from left to right and put it into one type of basket (map) between the two baskets....</p>
                <a href="https://codesplash.medium.com/fruit-into-baskets-c-sliding-window-map-easy-explanation-leetcode-aed0c83c8d27?source=user_profile---------0----------------------------">Read More</a>
            </div>
            <div className="Blog_box box_shdow m_stndrd prjc" style={{ boxSizing: "border-box" }}>
                <h2>JavaScript Working | Execution Context of JavaScript</h2>
                <p>#1 Javascript Series Started Execution context “Everything in Javascript happens inside an execution context” It can be thought of as an environment where the Javascript code is evaluated and executed. Two...</p>
                <a href="https://codesplash.medium.com/javascript-working-4f5bdf3ae9b7?source=user_profile---------1----------------------------">Read More</a>
            </div>
            <div className="Blog_box box_shdow m_stndrd prjc" style={{ boxSizing: "border-box" }}>
                <h2>Understanding Semantic Versioning: A Guide to Version Numbers</h2>
                <p>Semantic Versioning (Semver) is a widely adopted convention for versioning software packages. In the context of package.json files used in Node.js projects, version numbers are structured in a specific format, consisting of major, minor, and patch segments separated by dots (e.g., 1.2.3)...</p>
                <a href="https://codesplash.medium.com/understanding-semantic-versioning-a-guide-to-version-numbers-5d15a463df2b?source=user_profile---------2----------------------------">Read More</a>
            </div>
            <div className="Blog_box box_shdow m_stndrd prjc" style={{ boxSizing: "border-box" }}>
                <h2>Tilde(~) vs Caret(^) in package.json</h2>
                <p>In package.json, the tilde (~) and caret (^) symbols are used to specify version ranges for dependencies. They control how flexible or strict the dependency resolution should be when installing or updating packages. Here’s what each symbol means: Tilde (~): It restricts the...</p>
                <a href="https://codesplash.medium.com/tilde-vs-caret-in-package-json-130756808ce7?source=user_profile---------3----------------------------">Read More</a>
            </div>
            <div className="Blog_box box_shdow m_stndrd prjc" style={{ boxSizing: "border-box" }}>
                <h2>Give Color to Your C++, Java or Python Code in Markdown File or Within Your GitHub.md File</h2>
                <p>I was creating my code repo and for this I have used the .md extension. When I saw the dull white text, I thought how to color the C++ code like...</p>
                <a href="https://codesplash.medium.com/give-color-to-your-c-java-or-python-code-in-markdown-file-or-within-your-github-md-file-1e373c50eced?source=user_profile---------4----------------------------">Read More</a>
            </div>
            <div className="Blog_box box_shdow m_stndrd prjc" style={{ boxSizing: "border-box" }}>
                <h2>Solution for not being able to copy PDF text because of encoded text</h2>
                <p>I was Taking help from chatGPT studying with research paper but on a PDF when I copied the text it came like this “7XG0BVCRNJKHG6IUGIG6T7FFITFR” But I have solved it by implementing the following steps Go To ilovepdf Select PDF to Word Now Upload the encoded...</p>
                <a href="https://codesplash.medium.com/solution-for-not-being-able-to-copy-pdf-text-because-of-encoded-text-bf25b4078272?source=user_profile---------0----------------------------">Read More</a>
            </div>

            <div className="Blog_box box_shdow m_stndrd prjc" style={{ boxSizing: "border-box" }}>
                <h2>Next Greater Element-ii |Circularly find next greater number |Leetcode explanation</h2>
                <p>As per the Aditya Verma stack playlist if a question has 2 for loop with O(n^2) solution and the 2nd for loop is dependent on first loop i then the question must have a better stack solution...</p>
                <a href="https://codesplash.medium.com/next-greater-element-ii-circularly-find-next-greater-number-leetcode-explanation-c98fa33deee?source=user_profile---------1----------------------------">Read More</a>
            </div>

            <div className="Blog_box box_shdow m_stndrd prjc" style={{ boxSizing: "border-box" }}>
                <h2>Get environment variable(dotenv)in both frontend and backend(MERN stack) with Vite</h2>
                <p>If you are new to MERN stack development you have possibly heard about .env file which is usually used for the privacy of some important...</p>
                <a href="https://codesplash.medium.com/get-environment-variable-dotenv-in-both-frontend-and-backend-mern-stack-with-vite-19c061e6dc19?source=user_profile---------2----------------------------">Read More</a>
            </div>

            <div className="Blog_box box_shdow m_stndrd prjc" style={{ boxSizing: "border-box" }}>
                <h2>Module “buffer” has been externalized for browser compatibility. JWT error resolved</h2>
                <p>I was working on a MERN stack project and I am new to the MERN stack. I am learning it through project building. While developing the project I have encountered this error and...</p>
                <a href="https://codesplash.medium.com/module-buffer-has-been-externalized-for-browser-compatibility-jwt-error-resolved-dfd1e2e75867?source=user_profile---------3----------------------------">Read More</a>
            </div>

            <div className="Blog_box box_shdow m_stndrd prjc" style={{ boxSizing: "border-box" }}>
                <h2>Search a 2D Matrix | Optimized explanation</h2>
                <p>Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3 Output: true The elements are in increasing from (0,0) to (m-1,n-1). It means we can think of a Binary</p>
                <a href="https://codesplash.medium.com/search-a-2d-matrix-optimized-explanation-261a91a397c0?source=user_profile---------4----------------------------">Read More</a>
            </div>
        </div>
    )
}

export default Blog
