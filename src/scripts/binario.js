/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
var groups = [];

function doAnalyze() {
    var encodedData = (document.querySelector("#encodedData").value).toLowerCase();
    var decodedData = document.querySelector("#decodedData");
    var textData = document.querySelector("#textData");
    var errorWarning = document.querySelector("#errors");

    decodedData.value = "";

    if (encodedData.length == 0 || (encodedData.replace(/ /g, "").replace(/[0-9]/g, "")).length > 0) {
        errorWarning.innerHTML = "Texto inválido";
        throw "Texto inválido";
    }
    errorWarning.innerHTML = "";

    var arr = encodedData.split(" ");

    for (var group of arr) {
        simplify(group);
    }

    for (gp of groups) decodedData.value += `${gp} `;
    textData.value = binaryAgent(decodedData.value);

}

function simplify(group, groupValues = ["0", "0", "0", "0", "0", "0", "0", "0"]) {
    if (group.slice(0, 3) == "128") {
        groupValues[0] = "1";
        group = group.substring(3, group.length);
    }

    if (group[0] != "8" && group[0] != "4" && group[0] != "2" && group.length > 1) {
        switch (group.slice(0, 2)) {
            case "64":
                groupValues[1] = "1";
                break;
            case "32":
                groupValues[2] = "1";
                break;
            case "16":
                groupValues[3] = "1";
                break;

        }
        group = group.substring(2, group.length);
    } else {
        switch (group.slice(0, 1)) {
            case "8":
                groupValues[4] = "1";
                break;
            case "4":
                groupValues[5] = "1";
                break;
            case "2":
                groupValues[6] = "1";
                break;
            case "1":
                groupValues[7] = "1";
                break;

        }
        group = group.substring(1, group.length);
    }


    if (group.length > 0) {
        simplify(group, groupValues);
    } else {
        groups.push(groupValues.join(""));
    }

}

function binaryAgent(str) { //stackoverflow

    var binString = "";

    str.split(" ").map(function (bin) {
        binString += String.fromCharCode(parseInt(bin, 2));
    });
    return binString;
}