// Created by Nima Owji - All rights reserved
// Please don't use these codes without permission!

$(document).ready(function() {

    $("#year").text((new Date).getFullYear());

    var NightMode = false;

    $("#btnCalc").click(function() {
        if (validate()) {
            reset();
            calculate();
        }
    });

    $("#btnReset").click(function() {
        $("#divTable").fadeOut();
        reset();
    });

    $("#cbShowAllNumbers").click(function() {
        $(".NotPrime").fadeToggle();
    });

    $("#cbNightMode").click(function() {
        NightMode = !NightMode;

        if (NightMode) {
            $("*").addClass(" bg-dark text-light");
        } else {
            $("*").removeClass(" bg-dark text-light");
        }
    });

});

function validate() {

    var from = $("#txtFrom").val();
    var to = $("#txtTo").val();

    var isValid = true;

    if (from == "") {
        $("#txtFromErr").text("Please enter a number!").fadeIn();
        isValid = false;
    } else if (parseInt(from) < 0) {
        $("#txtFromErr").text("Please enter a number greater than zero!").fadeIn();
        isValid = false;
    } else if (parseInt(from) > parseInt(to)) {
        $("#txtFromErr").text("The first number should not be greater than the second number!").fadeIn();
        isValid = false;
    } else {
        $("#txtFromErr").fadeOut();
    }

    if (to == "") {
        $("#txtToErr").text("Please enter a number!").fadeIn();
        isValid = false;
    } else if (parseInt(to) < 0) {
        $("#txtToErr").text("Please enter a number greater than zero!").fadeIn();
        isValid = false;
    } else {
        $("#txtToErr").fadeOut();
    }


    return isValid;
}

function calculate() {

    var from = parseInt($("#txtFrom").val());
    var to = parseInt($("#txtTo").val());

    for (var i = from; i <= to; i++) {

        var count = 0;

        for (var x = 1; x <= Math.sqrt(i); x++) {

            if (i % x == 0) {
                count++;
            }
        }

        var state = "";

        if (count == 1 && i != 1) {
            state = "✔";
        } else if (i == 1) {
            state = "❗";
        } else {
            state = "❌";
        }

        addRow(i.toString(), state);
    }

    $("#divTable").slideDown();
}

function reset() {
    $(".result").remove();
}

function addRow(num, state) {

    var tr = document.createElement("tr");
    tr.classList += "result";

    if (state == "❌") {
        tr.classList += " NotPrime";
    }

    var tdNum = document.createElement("td");
    var tdState = document.createElement("td");

    var tdNumVal = document.createTextNode(num);
    var tdStateVal = document.createTextNode(state);

    tdNum.appendChild(tdNumVal);
    tdState.appendChild(tdStateVal);

    tr.appendChild(tdNum);
    tr.appendChild(tdState);

    document.getElementById("tblBody").appendChild(tr);

}