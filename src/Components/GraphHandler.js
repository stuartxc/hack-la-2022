import { Component, useEffect, useState } from "react";
import Papa from "papaparse";
import { getSystemErrorMap } from "util";
import csv from "../Data/gradebook.csv"

import {  
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
    VerticalBarSeriesCanvas
} from "react-vis";
import { arrayExpression } from "@babel/types";



// asn -- assignment
const GraphHandler = ({asn}) => {

    const A1 = "Assignment 1 Current Score";
    const A2 = "Assignment 2 Current Score";
    const A3 = "Assignment 3 Current Score";
    const ALL = "Current Score";

    const fetchCsv = () => {
        return fetch("https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/UBC-LA-Hackathon/hack-la-2022/main/data/additional/gradebook.csv",
            {headers: { 'content-type': 'text/csv;charset=UTF-8'}}
        ).then((response) => response.text()
        ).then((data) => {
            console.log(data);
        });
    }
    const init = () => {

        Papa.parse("https://cors-anywhere.herokuapp.com/https://raw.githubusercontent.com/UBC-LA-Hackathon/hack-la-2022/main/data/additional/gradebook.csv", {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
                console.log(results);
                const rowsArray = [];
                const valuesArray = [];

                // Iterating data to get column name and their values
                results.data.map((d) => {
                    rowsArray.push(Object.keys(d));
                    valuesArray.push(Object.values(d));
                });

                // Parsed Data Response in array format
                setParsedData(results.data);

                // Filtered Column Names
                setTableRows(rowsArray[0]);

                // Filtered Values
                setValues(valuesArray);

                // setData(results.data);

                
            },
        });

    }
    // State to store parsed data
    const [parsedData, setParsedData] = useState([]);

    //State to store table Column name
    const [tableRows, setTableRows] = useState([]);

    //State to store the values
    const [values, setValues] = useState([]);

    // state to store the assignment target
    const [assignment, setAssignment] = useState('All')

    const [data, setData] = useState([]);

    // on page reload
    useEffect(() => {
        init();
    }, [])
    

    // runs on asn change
    useEffect(() => {
        handleAssignment();
    }, [asn]);

    
    const histFormat = (array) => {
        const map = new Map();

        for (let i = 0; i< array.length;i++) {
            let j = Math.floor(array[i]/5)
            if (!map.has(j)) {
                map.set(j,1)
            } else {
                map.set(j,map.get(j)+1)
            }
            
        }
    
        let keyArray = []
    
        for (var key of map.keys()) {
            keyArray.push(key)
        }
        
        // for (var [key, value] of map) {
        //     console.log(key,value)
        // }
    
        keyArray.sort(function(a, b){return a - b})
    
    
        let histArray = []
    
        for (let i = 0; i<keyArray.length; i++) {
            histArray.push({x: keyArray[i], y:map.get(keyArray[i])})
        }

        return histArray;
    }

    const computeData = (assignmentName) => {

        var index = tableRows.indexOf(assignmentName);
        var nums = [];
        var min = 100;
        var max = 0;
        for (var i = 0; i < values.length; i++) {
            let val = values[i][index];
            if (isNaN(val) || val == "") continue;
            let num = parseInt(val);
            min = Math.min(min, num);
            max = Math.max(max, num);
            nums.push(num);
            
        }

        var n = 10; // number of bars
        var interval = Math.ceil((max - min) / n);
        console.log(min, max, interval);
        var nData = [];

        // format the data
        for (var i = 1; i <= n; i++) {
            nData.push({
                x: min + (interval * i),
                y: 0
            });
        }
        
        // console.log(nData);
        // console.log(histFormat(nums));
        nData = histFormat(nums);

        for (let i = 0; i < nData.length; i++) {
            nData[i]["x"] *= 5;
        }

        setData(nData);


        

    };

    const handleAssignment = () => {
        console.log(tableRows);
        switch(asn) {

            case "One":
                computeData(A1);
                break;
            case "Two":
                computeData(A2);
                break;
            case "Three":
                computeData(A3)
                break;
            case "All":
                computeData(ALL);
                break;
                

        }
    }

    const d = [
        {x: 0, y: 8},
        {x: 1, y: 5},
        {x: 2, y: 4},
        {x: 3, y: 9},
        {x: 4, y: 1},
        {x: 5, y: 7},
        {x: 6, y: 6},
        {x: 7, y: 3},
        {x: 8, y: 2},
        {x: 9, y: 0}
      ];

    return (
        <div>
            <XYPlot height={300} width={300}>
            <VerticalBarSeries className="vertical-bar-series-example" data={data} />
            <XAxis />
            <YAxis />
            </XYPlot>
            
          <br />
          {/* Table */}
          <table>
            <thead>
              <tr>
                {tableRows.map((rows, index) => {
                  return <th key={index}>{rows}</th>;
                })}
              </tr>
            </thead>
            <tbody>
              {values.map((value, index) => {
                return (
                  <tr key={index}>
                    {value.map((val, i) => {
                      return <td key={i}>{val}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
}

export default GraphHandler;