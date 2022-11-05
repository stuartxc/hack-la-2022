import { XYPlot, LineSeries, RadialChart } from 'react-vis';


const PieChart = ({width, height}) => {

    const pieDatas = [
        [

            { angle: 1, label: 'First section', color: 25 },
            { angle: 5, label: 'Second section', color: 100 },
            { angle: 2, label: 'Third section', color: 200 }
        ],
        [

            { angle: 1, label: 'First section', color: 25 },
            { angle: 5, label: 'Second section', color: 100 },
            { angle: 2, label: 'Third section', color: 200 }
        ]];


    return (
        <div>
            {pieDatas.map((i) => (
                <div>
                    <RadialChart
                        data={i}
                        width={width}
                        height={height}
                    />
                </div>

            ))}
        </div>


    )

}


export default PieChart