/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var number_of_project = 3;
var number_of_process = 4;


$(document).ready(function () {

initTable();










});



function initTable()
{
    var table = document.getElementbyID("table");


    for (var i = 1; i <= number_of_project; i++) {
        createProject(table, "Project_" + i);
    }

}

function createTD(_class, text, rowspan)
{
    var span = document.createElement("span");
    if (text)
        span.textContent = text;

    var td = document.createElement("td");
    td.setAttribute("class", _class);
    if (rowspan) {
        td.setAttribute("rowspan", rowspan);
    }

    td.appendChild(span);
    return td;
}

function createTH(_class, text, rowspan)
{
    var span = document.createElement("span");
    if (text)
        span.textContent = text;

    var th = document.createElement("th");
    th.setAttribute("class", _class);
    if (rowspan) {
        th.setAttribute("rowspan", rowspan);
    }

    th.appendChild(span);
    return th;
}





//function createTR(main)
//{
//     var tr = document.createElement("tr");
//}



function createProject(table, project_name)
{
    for (var i = 1; i <= this.number_of_process; i++) {
        var tr = document.createElement("tr");
        if (i === 1) {
            var project_td = createTD("project-name", project_name, this.number_of_process);
            tr.appendChild(project_td);
        }

        var process_td = createTD("process-name", project_name, this.number_of_process);

        var monday = createTD("monday", null, null);
        var tuesday = createTD("tuesday", null, null);
        var wednesday = createTD("wednesday", null, null);
        var thursday = createTD("thursday", null, null);
        var friday = createTD("friday", null, null);
        var saturday = createTD("saturday", null, null);
        var sunday = createTD("sunday", null, null);
        var sum = createTD("sum", null, null);


        tr.appendChild(process_td);
        tr.appendChild(monday);
        tr.appendChild(tuesday);
        tr.appendChild(wednesday);
        tr.appendChild(thursday);
        tr.appendChild(friday);
        tr.appendChild(saturday);
        tr.appendChild(sunday);
        tr.appendChild(sum);
        table.appendChild(tr);
    }

}

function create_TR_TD_TH(table, thLabel, tdInput1, tdInput2, tdSpan1, tdSpan2, textArea)
{
    var tr = document.createElement("tr");
    var th = document.createElement("th");
    var td = document.createElement("td");

    if (thLabel !== null) {
        th.appendChild(thLabel);
    }
    if (tdInput1 !== null) {
        td.appendChild(tdInput1);
    }
    if (tdSpan1 !== null) {
        td.appendChild(tdSpan1);
    }
    if (tdInput2 !== null) {
        td.appendChild(tdInput2);
    }
    if (tdSpan2 !== null) {
        td.appendChild(tdSpan2);
    }

    if (textArea !== null) {
        td.appendChild(textArea);
    }

    tr.appendChild(th);
    tr.appendChild(td);
    table.appendChild(tr);
}
