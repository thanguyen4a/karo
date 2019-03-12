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

const cell_number = 10;
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



    for (var i = 0; i < cell_number; i++) {
        var TR = document.createElement("TR");
        tblB.appendChild(TR);
        for (var j = 0; j < cell_number; j++) {
            var TD = document.createElement("TD");
            TD.setAttribute("id", i + "" + j);
            TD.setAttribute("class","height-30 width-30 background-color-00ffbf border-bisque text-align");
            var text = document.createTextNode(PLAYER_TICK.NONE);
            TD.appendChild(text);
            TR.appendChild(TD);
        }
    }
    body.appendChild(table);

    $("TD").click(function () {

        var selector = $(this);
        var id_str = selector.attr("id");
        var result = TickCell(id_str, selector);
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
            this.arr[i][j] = {player: PLAYERS.NONE};
        }
    }
}

function TickCell(id_str, selector) {
    var result = false;
    switch (this.state) {
        case STATE.WATTING:
        case STATE.FINISHED:
            break;
        case STATE.NO_1:
            result = SetData(id_str, PLAYERS.NO_1);
            if (result) {
                selector.html(PLAYER_TICK.NO_1);
            }
            break;
        case STATE.NO_2:
            result = SetData(id_str, PLAYERS.NO_2);
            if (result) {
                selector.html(PLAYER_TICK.NO_2);
            }
            break;
    }
    
    if(result) {
        nextTurn();
    }
    return result;
}

function SetData(id_str, player) {
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


