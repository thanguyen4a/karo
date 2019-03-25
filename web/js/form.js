/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var max_lenght_user = 10;
var max_lenght_age = 100;
var max_capital = 1000;  //byte



$(document).ready(function () {
    var file;
    $(".avatar").each(function (i, elem) {
        $(elem).on('change', function (evt) {
            file = evt.target.files;
            if (file === null) {
                console.log("avatar null");
            } else {
                console.log("khac null");
            }
        });
    });



    $(".button").each(function (i, elem) {
        $(elem).click(function () {
            var table = $(elem).closest('.table');
            var user = table.find(".user:first").val();
            var age = table.find(".age:first").val();
            var sex = table.find('input[name="sex"]:checked');
            var tel = table.find(".tel:first").val();
            var mail = table.find(".mail:first").val();
            var birthday = table.find(".birthday:first").val();
            var error = table.find(".error:first");
            var errors = "";
            errors += validateUser(user);
            errors += validateAge(age);
            errors += validateSex(sex);
            errors += validateMail(mail);
            errors += validateTel(tel);
            errors += validateDate(birthday);
            errors += validateAvatar(file);
            error.html(errors);
        }
        );
    });
});
function validateUser(user) {
    var re = new RegExp("^[a-zA-Z0-9]+[a-zA-Z0-9]*$");
    if (!re.test(user))
        return "User name is invalid \n";
    if (user.length > max_lenght_user)
        return "User name must be less than or equal to" + max_lenght_user + "letters\n";
    return "";
}

function validateAge(age) {
    var re = new RegExp("^[\d]+[\d]*$");
    if (!re.test(age))
        return "Age is invalid \n";
    var age_number = parseInt(age);
    if (age_number > max_lenght_age || age_number < 0)
        return "Age must be beetween from 0 to " + max_lenght_age + "\n";
    return "";
}


function validateSex(sex) {
    if (sex.length === 0)
        return "Sex is invalid \n";
    return "";
}

function validateMail(mail) {
    var regexp = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
            + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
    var re = new RegExp(regexp);
    if (!re.test(mail))
        return "Mail is invalid \n";
    return "";
}


function validateTel(tel) {
    console.log("tel " + tel);
    var regexp = "^(?:\\d{11}|\\d{3}\-\\d{4}\-\\d{4}|\\d{3} \\d{4} \\d{4})$";
    var re = new RegExp(regexp);
    if (!re.test(tel))
        return "Tel is invalid \n";
    return "";
}


//  YYYY/MM/DD
function validateDate(date) {
    console.log("date " + date);
    var m1 = moment(date);
    if (m1.isValid()) {
        return "";
    } else {
        return "Date is invalid \n";
    }
}


function validateAvatar(file) {
//    console.log("avatar " + avatar);
    if (!file) {
        return "Avatar is null \n";
    }

    var types = ['text/plain', 'image/png'];
    console.log("file.type " + file[0].type);
    console.log("file.size " + file[0].size);
    if (!types.includes(file[0].type)) {
        return "Avatar must be text or png file";
    }
    if (file[0].size >= max_capital) {
        return "Avatar capital must be less than or equal to " + max_capital + "byte";
    }
    return "";
}


function createNewForm(div_form, id)
{
    var div = document.createElement("DIV");
    div.setAttribute("id", id + "");
    form.setAttribute("action", "#");
    div_form.appendChild(div);

    var form = document.createElement("form");
    form.setAttribute("action", "#");
    form.setAttribute("method", "post");
    form.setAttribute("class", "form");
    div.appendChild(form);

    var table = document.createElement("table");
    table.setAttribute("class", "table");
    table.setAttribute("boder", 1);
    form.appendChild(table);


    var label, input,input2,span,span2;

    label = createLabel("user", "Name");
    input = createInput("text", "user", "user", null);
    create_TR_TD_TH(form, label, input, null,null,null);
     
    /////////////////////////
    
    label = createLabel("age", "Age");
    input = createInput("text", "age", "age", null);   
    create_TR_TD_TH(form, label, input,null,null,null);
   
    /////////////////////////
    label = createLabel("sex_1", "Sex");
    input = createInput("radio", "sex", "sex", "1");
    input2 = createInput("radio", "sex", "sex", "2");
    span = createSpan("Male");
    span2 = createSpan("FeMale");
    create_TR_TD_TH(form, label, input, input2,span,span2);
    
     /////////////////////////
    label = createLabel("user", "Name");
    input = createInput("text", "user", "user", null);
    create_TR_TD_TH(form, label, input, null,null);
    
     /////////////////////////
    label = createLabel("user", "Name");
    input = createInput("text", "user", "user", null);
    create_TR_TD_TH(form, label, input, null,null);
    
    


}


function create_TR_TD_TH(form, thLabel, tdInput1,tdInput2, tdSpan1,tdSpan2)
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

    tr.appendChild(th);
    tr.appendChild(td);
    form.appendChild(tr);
}


function createLabel(_for, innerText)
{
    var label = document.createElement("label");
    label.setAttribute("for", _for + "");
    label.innerHTML = innerText;
    return label;
}

function createInput(type, _class, name, value)
{
    var input = document.createElement("input");
    input.setAttribute("type", type + "");
    input.setAttribute("class", _class + "");
    input.setAttribute("name", name + "");
    if (value !== null) {
        input.setAttribute("value", value + "");
    }

    return input;
}


function createSpan(innerText)
{
    var text = document.createTextNode(innerText);
    var span = document.createElement("span");
    span.appendChild(text);
    return span;
}