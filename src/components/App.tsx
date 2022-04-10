import React from 'react';
import Tree from 'react-d3-tree';

import "./App.css";

class App extends React.Component<{}, { items: any, apiFetch: Boolean }> {
    constructor(props:any) {
        super(props);
        this.state = { 
            items: [],
            apiFetch: false
        };
    }

    componentDidMount() {
        fetch('/fetch/all')
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            this.setState({ 
                items: data,
                apiFetch: true
            });
        })
        .catch((error) => {
            console.error('Error:', error);
        });
        
    }

    render() {
        const pointX = window.innerWidth/2;

        return(   
            <div className="App">
                <header className="App-header">
                    Binary Tree Demo - Data fetched from the <a href="https://github.com/danishiqbal4/binary-tree-api" target="_blank" rel="noreferrer">Binary Tree API</a>
                    <br />
                    This App is hosted at <a href="https://github.com/danishiqbal4/binary-tree-frontend" target="_blank" rel="noreferrer">Binary Tree Frontend</a>
                </header>

                <div id="tree-wrapper">
                    {this.state.apiFetch ? 
                        <Tree 
                            data={this.state.items} 
                            orientation="vertical"
                            translate={{x: pointX, y:20}}  /> 
                        : "Loading..."}
                </div>
            </div>          
        );
    }
};

export default App;
