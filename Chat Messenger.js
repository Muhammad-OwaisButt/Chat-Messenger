function send1()
{
    var inputt = document.getElementById('_input-1').value;
    if(inputt == "") {
        alert('Please type something')
    } else{
        
    var table = document.getElementById("_table-1");
    var row = table.insertRow(table_length);
    var table_length = table.rows.length;
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    const d = new Date();
    var start = "<p>";
    var end = "</p>";
    var date = d.toLocaleString();
    var input1 =  document.getElementById('_input-1').value;
    cell1.innerHTML = "";
    cell2.innerHTML = input1 + "<br>" + start + date + end;
    

    var table2 = document.getElementById("_table-2");
    var row2 = table2.insertRow(table_length2);
    var table_length2 = table2.rows.length;
    var cell1 = row2.insertCell(0);
    var para = "<p>From 1</p>";
    const d2 = new Date();
    var start2 = "<p>";
    var end2 = "</p>";
    var date2 = d2.toLocaleString();
    var input2 =  document.getElementById('_input-1').value;
    cell1.innerHTML = input2 + "<br>" + start2 + date2 + end2 + para;

    var audio = document.getElementById("_audio");
    audio.play();
    document.getElementById('_input-1').value = '';
    }
    
}

function send2()
{
    var inputt = document.getElementById('_input-2').value;
    if(inputt == "") {
        alert('Please type something')
    } else{

    var table = document.getElementById("_table-1");
    var row = table.insertRow(table_length);
    var table_length = table.rows.length;
    var cell1 = row.insertCell(0);
    var para = "<p>From 2</p>";
    const d2 = new Date();
    var start2 = "<p>";
    var end2 = "</p>";
    var date2 = d2.toLocaleString();
    var input2 =  document.getElementById('_input-2').value;
    cell1.innerHTML = input2 + "<br>" + start2 + date2 + end2 + para;
    

    var table2 = document.getElementById("_table-2");
    var row2 = table2.insertRow(table_length2);
    var table_length2 = table2.rows.length;
    var cell1 = row2.insertCell(0);
    var cell2 = row2.insertCell(1);
    const d = new Date();
    var start = "<p>";
    var end = "</p>";
    var date = d.toLocaleString();
    var input1 =  document.getElementById('_input-2').value;
    cell1.innerHTML = "";
    cell2.innerHTML = input1 + "<br>" + start + date + end;

    var audio = document.getElementById("_audio2");
    audio.play();
    document.getElementById('_input-2').value = '';
    }
}