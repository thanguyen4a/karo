var cell_number = 10;
var win_lenght = 5;


var PLAYERS = {
    NONE: 0,
    NO_1: 1,
    NO_2: 2

};

var STATE = {
    WATTING: 0,
    NO_1: 1,
    NO_2: 2,
    FINISHED: 3

};

var PLAYER_TICK = {
    NONE: "",
    NO_1: "X",
    NO_2: "O"

};

var arr = [];
var state;
var winer;


$(document).ready(function () {

    //init
    init();

    var body = document.getElementsByTagName("body")[0];

    var table = document.createElement("TABLE");
    var tblB = document.createElement("TBODY");
    table.appendChild(tblB);

    generateTable(tblB);
    body.appendChild(table);

    $("TD").click(function () {
        
        var selector = $(this);
        var id_str = selector.attr("id");
        var span = selector.children('span');
        var result = process(id_str, span);
    }
    );
}
);

function init() {
    this.state = STATE.NO_1;
    this.winer = PLAYERS.NONE;
    Create2DArray();
}

function Create2DArray() {
    this.arr = new Array(cell_number);
    for (var i = 0; i < cell_number; i++) {
        this.arr[i] = new Array(cell_number);
        for (var j = 0; j < cell_number; j++) {
            this.arr[i][j] = {player: PLAYERS.NONE, id: "" + i + j};
        }
    }
}


function generateTable(tblB) {
    for (var i = 0; i < cell_number; i++) {
        var TR = document.createElement("TR");
        tblB.appendChild(TR);
        for (var j = 0; j < cell_number; j++) {
            var TD = document.createElement("TD");
            TD.setAttribute("id", i + "" + j);
            TD.setAttribute("class", "height-30 width-30 background-color-00ffbf border-bisque text-align-center");
            var text = document.createTextNode(PLAYER_TICK.NONE);
            var span = document.createElement("span");
            span.appendChild(text);

            TD.appendChild(span);
            TR.appendChild(TD);
        }
    }

}



function process(id_str, selector) {
    var result = false;
    var player = PLAYERS.NONE;
    switch (this.state) {
        case STATE.WATTING:
        case STATE.FINISHED:
            break;
        case STATE.NO_1:
            player = PLAYERS.NO_1;
            result = setData(id_str, player);
            break;
        case STATE.NO_2:
            player = PLAYERS.NO_2;
            result = setData(id_str, player);
            break;
    }

    if (result) {
        tickXO(selector, player);
        var sub_array = determineWinner(id_str, player);
        if (sub_array instanceof Array) {
            console.log("thang roi");
            this.state = STATE.FINISHED;
            printID(sub_array)
        } else {
            console.log("chua thang");
            nextTurn();
        }

    }
    return result;
}

function tickXO(selector, player)
{
    if (player === PLAYERS.NO_1) {
        selector.html(PLAYER_TICK.NO_1);
    } else if (player === PLAYERS.NO_2) {
        selector.html(PLAYER_TICK.NO_2);
    }
}

function setData(id_str, player) {
    var i = parseInt(id_str.substring(0, 1));
    var j = parseInt(id_str.substring(1, 2));
    var tmp = this.arr[i][j];

    if (tmp["player"] === PLAYERS.NO_1 || tmp["player"] === PLAYERS.NO_2)
    {
        return false;
    }

    this.arr[i][j].player = player;
    return true;
}

function nextTurn()
{
    if (this.state === STATE.NO_1) {
        this.state = STATE.NO_2;
    } else if (this.state === STATE.NO_2) {
        this.state = STATE.NO_1;
    }

}

function determineWinner(id_str, player) {
    return determineHorizontalWin(id_str, player);
}

function determineHorizontalWin(id_str, player)
{
    var i = parseInt(id_str.substring(0, 1));
    var j = parseInt(id_str.substring(1, 2));

    for (var delta = 0; delta < win_lenght; delta++) {
//        console.log("j - delta" + (j - delta));
//         console.log(" j + (win_lenght - delta - 1) " + ( j + (win_lenght - delta - 1) ));
        if (j - delta < 0 || j + (win_lenght - delta - 1) >= cell_number) {
            continue;
        }
        var sub_array = isWinSubHorizontalArray(i, j - delta, win_lenght, player)
        if (sub_array != false) {
            return sub_array;
        }
    }

    return determineVerticalWin(id_str, player);
}

function isWinSubHorizontalArray(i, start, end, player)
{
    var sub_array = new Array(win_lenght);
    for (var j = start; j < start + end; j++)
    {
        sub_array[j - start] = this.arr[i][j];
        if (this.arr[i][j]["player"] != player) {
            return false;
        }
    }
    return sub_array;
}


function determineVerticalWin(id_str, player)
{
    var i = parseInt(id_str.substring(0, 1));
    var j = parseInt(id_str.substring(1, 2));

    for (var delta = 0; delta < win_lenght; delta++) {
//        console.log("j - delta" + (j - delta));
//         console.log(" j + (win_lenght - delta - 1) " + ( j + (win_lenght - delta - 1) ));
        if (i - delta < 0 || i + (win_lenght - delta - 1) >= cell_number) {
            continue;
        }
        var sub_array = isWinSubVerticalArray(j, i - delta, win_lenght, player)
        if (sub_array != false) {
            return sub_array;
        }
    }

    return determineCrossFirstWin(id_str, player);
}

function isWinSubVerticalArray(j, start, end, player)
{
    var sub_array = new Array(win_lenght);
    for (var i = start; i < start + end; i++)
    {
        sub_array[i - start] = this.arr[i][j];
        if (this.arr[i][j]["player"] != player) {
            return false;
        }
    }
    return sub_array;
}




function determineCrossFirstWin(id_str, player)
{
    var i = parseInt(id_str.substring(0, 1));
    var j = parseInt(id_str.substring(1, 2));

    for (var delta = 0; delta < win_lenght; delta++) {
//        console.log("j - delta" + (j - delta));
//         console.log(" j + (win_lenght - delta - 1) " + ( j + (win_lenght - delta - 1) ));
        if (i - delta < 0 || i + (win_lenght - delta - 1) >= cell_number) {
            continue;
        }

        if (j - delta < 0 || j + (win_lenght - delta - 1) >= cell_number) {
            continue;
        }


        var sub_array = isWinSubCrossFirstArray(i, j, delta, player)
        if (sub_array != false) {
            return sub_array;
        }
    }

    return determineCrossSecondWin(id_str, player);
}

function isWinSubCrossFirstArray(i, j, start, player)
{
    var sub_array = new Array(win_lenght);
    for (var m = -start; m < -start + win_lenght; m++)
    {
        sub_array[m + start] = this.arr[i + m][j + m];
        if (this.arr[i + m][j + m]["player"] != player) {
            return false;
        }
    }
    return sub_array;
}




function determineCrossSecondWin(id_str, player)
{
    var i = parseInt(id_str.substring(0, 1));
    var j = parseInt(id_str.substring(1, 2));

    for (var delta = 0; delta < win_lenght; delta++) {

        console.log("i =" + i);
        console.log(" j =" + j);


        console.log("i - delta =" + (i - delta));
        console.log(" i + (win_lenght - delta - 1) =" + (i + (win_lenght - delta - 1)));

        console.log("j - delta=" + (j - delta));
        console.log(" j + (win_lenght - delta - 1)= " + (j + (win_lenght - delta - 1)));
        if (i - delta >= cell_number || i - (win_lenght - delta - 1) < 0) {
            continue;
        }

        if (j + delta > 0 || j + (win_lenght - delta - 1) >= cell_number) {
            continue;
        }


        var sub_array = isWinSubCrossSecondArray(i, j, delta, player)
        if (sub_array != false) {
            return sub_array;
        }
    }

    return false;
}

function isWinSubCrossSecondArray(i, j, start, player)
{
    var sub_array = new Array(win_lenght);
    for (var m = -start; m < -start + win_lenght; m++)
    {

        console.log("i-m" + (i - m));
        console.log("j+m" + (j + m));
        sub_array[m + start] = this.arr[i - m][j + m];
        if (this.arr[i - m][j + m]["player"] != player) {
            return false;
        }
    }
    return sub_array;
}


















function printID(sub_array) {
    var id_list = "";
    for (var i = 0; i < win_lenght; i++) {
        var id = sub_array[i]["id"];
        console.log("id" + id);
        id_list += "#" + id;
        if (i != win_lenght - 1) {
            id_list += ",";
        }
    }
    console.log("id_list" + id_list);
    console.log("class " + $("#65").attr("class"));
    fadeToogle(id_list);

}


function fadeToogle(id_list)
{
//    var elements = $(id_list);
//    setInterval(function () {
    $(id_list).each(function () {
        console.log("id ... ddddddddddddddddddddd" + $(this).attr("class"));
        $(this).addClass("text-color-red-italic");
    });
//                 }, 4000);

//    });

}