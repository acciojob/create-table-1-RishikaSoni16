function insert_Row() {
    let t1 = document.getElementById("sampleTable");
	 var newRow = t1.insertRow(0);
	newRow.innerHTML += `<tr><td>New Cell1</td> 
		<td>New Cell2</td></tr> `;
}
