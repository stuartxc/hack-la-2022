// This was all put in RadialChart instead, but we might need to abstract the weighting functionality

/* import {useState} from "react";

const Weighting = () => {
    const [assignment1, setAssignment1] = useState(0);
    const [assignment2, setAssignment2] = useState(0);
    const [assignment3, setAssignment3] = useState(0);
    const [participation, setParticipation] = useState(0);

    const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The weight you entered was: ${assignment1}, ${assignment2}, ${assignment3}, ${participation}`)
  }

    return (
        <div>
        <h4>
            Use these fields to change the % weight of each assignment (must add up to 100%):
        </h4>
        <form onSubmit={handleSubmit}>
            <label> Assignment 1 Weight:
                <input 
                type="number"
                value={assignment1}
                onChange={(e) => setAssignment1(parseFloat(e.target.value))}
                />
            </label>
            <label> Assignment 2 Weight:
                <input 
                type="number"
                value={assignment2}
                onChange={(e) => setAssignment2(parseFloat(e.target.value))}
                />
            </label>
            <label> Assignment 3 Weight:
                <input 
                type="number"
                value={assignment3}
                onChange={(e) => setAssignment3(parseFloat(e.target.value))}
                />
            </label>
            <label> Participation Weight:
                <input 
                type="number"
                value={participation}
                onChange={(e) => setParticipation(parseFloat(e.target.value))}
                />
            </label>
            <input type="submit"/>
        </form>
        </div>
    )
}


export default Weighting */