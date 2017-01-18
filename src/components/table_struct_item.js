import React from 'react';


const TableStructItem = (dataItem) =>{
	return(
		<tr>
		  <td className={dataItem.item.isDirty1}>{dataItem.item.date}</td>
		  <td className={dataItem.item.isDirty2}>{dataItem.item.inventory}</td>
		  <td className={dataItem.item.isDirty3}>{dataItem.item.model}</td>
		  <td>{dataItem.item.City}</td>
		  <td>{dataItem.item.total_leads}</td>
		  <td>{dataItem.item.total_sales}</td>
		  <td>{dataItem.item.total_cash}</td>
		  <td>{dataItem.item.discount}</td>
		</tr>
	);
}


export default TableStructItem;