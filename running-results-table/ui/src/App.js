import React, { Component } from 'react';
    import ConnectedResultsTable from './ConnectedResultsTable';
    import NewResultsForm from './NewResultsForm';
    const divStyle = {
  	margin: '40px',
  	border: '10px solid black',
	backgroundColor: '#f2fddb',
	padding: '20px',
    };
    class App extends Component {
      render() {
        return (
          <div style={divStyle} className="App">
	    <NewResultsForm />
	    <ConnectedResultsTable />
          </div>
        );
      }
    }
    export default App;
