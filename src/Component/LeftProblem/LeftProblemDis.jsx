import React from 'react'

const LeftProblemDis = ({problem1}) => {

    return (
        <div className="leftproblemdis">
            <div className="leftproblemMenu">
                <span >Description</span><span>Editorial</span><span>Comments</span>
            </div>
            <div className="problemStatement">
                <h3 className="ptitle">{problem1?.title}</h3>
                <p style={{ margin: "5px", color: "blue", fontSize: '20px', textTransform: "capitalize" }}>{problem1?.level}</p>
                <p className='pdescription'>{problem1?.description}</p>
            </div><div className="problem-examples">

                <div className="peg">
                    <h4>Examples:</h4>
                    <div className="pegexp">
                        {problem1?.examples?.split("\n").map((item, key) => (
                            <React.Fragment key={key}>
                                {item}
                                <br />
                            </React.Fragment>
                        ))}
                    </div>
                </div>

            </div><div className="problem_constraints">
                <h4>Constaints</h4>
                <div>{problem1?.constraint}</div>
                <span>o(n)</span>
            </div>

        </div>
    )

}

export default LeftProblemDis