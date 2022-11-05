import { XYPlot, LineSeries, RadialChart } from 'react-vis';
import Weighting from './Weighting';
import {useState} from "react";

const PieChart = ({width, height}) => {

    const [assignment1, setAssignment1] = useState(20);
    const [assignment2, setAssignment2] = useState(30);
    const [assignment3, setAssignment3] = useState(30);
    const [participation, setParticipation] = useState(20);

    const handleSubmit = (event) => {
    event.preventDefault();
    alert(`The weights you entered were: ${assignment1}, ${assignment2}, ${assignment3}, and ${participation}, respectively.`)
    }

    const pieDatas = [
        [
            { angle: assignment1, label: 'Assignment 1'},
            { angle: assignment2, label: 'Assignment 2'},
            { angle: assignment3, label: 'Assignment 3'},
            { angle: participation, label: 'Participation'}
        ]];

    return (
        <div>
            {pieDatas.map((i) => (
                <div>
                    <RadialChart
                        data={i}
                        width={width}
                        height={height}
                        showLabels={true}
                        labelsAboveChildren={true}
                    />
                </div>

            ))}

            <h4>
                Use these fields to change the % weight of each assignment (should add up to 100% for best results):
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

export default PieChart