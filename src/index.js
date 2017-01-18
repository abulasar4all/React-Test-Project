import React from 'react';
import ReactDOM from 'react-dom';
import TableStruct from './components/table_struct';
import leads from './components/leads_api';

class App extends React.Component{

	constructor(props){
		super(props);

		this.state = { leads : leads };
	}

	render(){
		return (
			<div className="col-xs-12">
			<TableStruct leads = {this.state.leads} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector('.container'));