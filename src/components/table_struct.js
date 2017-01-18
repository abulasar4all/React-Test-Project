import React from 'react';
import TableStructItem from './table_struct_item';
import moment from 'moment';

const TableStruct = (props) =>{
	props.leads.forEach((item, index)=> {
		const moneyFormatter = new Intl.NumberFormat();
		item.total_cash = moneyFormatter.format(item.total_cash);
		item.date = moment(item.date).format('M-DD-YY');		
		item.id = index+1;
	});

	for(let i = 0; i < props.leads.length; i++)
	{
		if (typeof props.leads[i-1] !== 'undefined') {
			if (props.leads[i].date == props.leads[i-1].date) {
	    	props.leads[i].isDirty1 = "dirtyValue";
	       }
	       if (props.leads[i].inventory == props.leads[i-1].inventory) {
	    	props.leads[i].isDirty2= "dirtyValue";
	       }
	       if (props.leads[i].model == props.leads[i-1].model) {
	    	props.leads[i].isDirty3 = "dirtyValue";
	       }
		}
		
	}

	console.log("Props LIST", props.leads);

	const rowData = props.leads.map((lead, index)=> {
		console.log("LESTDATA", lead);
		lead.id = index;
		return(
		  <TableStructItem key={lead.id} item={lead} />	
		);
	});

	return (
		<table className="table table-bordered table-striped">
			<thead>
			   <tr>
			     <th>Date</th>
			     <th>Inventory</th>
			     <th>Model</th>
			     <th>City</th>
			     <th>Total Leads</th>
			     <th>Total Sales</th>
			     <th>Total Cash</th>
			     <th>Average Dissount</th>
			   </tr>
			</thead>
			<tbody>
				{rowData}
			</tbody>
		</table>

	);
}

export default TableStruct;