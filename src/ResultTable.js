import React, { Component } from 'react';
import './ResultTable.css';
class ResultTable extends Component {
    // constructor(props) {
    //     super(props);
    // }
    
    render() {
        // const res = [
        //     {tas: 'toks', anas: 'anoks', sekantis: 'trecioks'},
        //     {tas: 'toks1', anas: 'anoks1', sekantis: 'trecioks1'},
        //     {tas: 'toks2', anas: 'anoks2', sekantis: 'trecioks2'},
        // ];
        // const result = {
        //     headers: ['tas','anas','sekantis'],
        //     lines: [
        //         ['tas', 'anas', 'sekantis'],
        //         ['tas1', 'anas1', 'sekantis1'],
        //         ['tas2', 'anas2', 'sekantis2'],
        //         ['tas3', 'anas3', 'sekantis3'],
        //         ['tas4', 'anas4', 'sekantis4'],
        //     ]
        // };
        let headers, lines = [];
        console.log(this.props.dataResult);
        if (this.props.dataResult) {
            headers = this.props.dataResult.headers.map((header, h) => {
                return <td key={h}><strong>{header}</strong></td>
            })
            lines = this.props.dataResult.lines.map((line, l) => {
                return <tr key={l}>{
                    line.map((item, i) => {
                        // if (headers.length <= i) {
                            return <td key={i}>{item}</td>
                        // }
                    })
                }
                </tr>
            })
        }

        // const lines = result.lines.map((line, l) => {
        //     return <tr key={l}>{
        //         line.map((item, i) => {
        //             return <td key={i}>{item}</td>
        //         })
        //     }
        //     </tr>
        // });

        return (
            <div className="table-container">
                {this.props.dataResult &&
                    <table>
                        <thead>
                            <tr>
                                {headers}
                            </tr>
                        </thead>
                        <tbody>
                            {lines}
                        </tbody>
                    </table>
                }
            </div>
        );
    }
}

export default ResultTable;