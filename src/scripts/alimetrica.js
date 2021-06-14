function doAnalyze() {
  var encodedData = document.querySelector("#encodedData").value.toLowerCase();
  var decodedData = document.querySelector("#decodedData");
  var errorWarning = document.querySelector("#errors");

  decodedData.value = "";

  if (encodedData.length == 0) {
    errorWarning.innerHTML = "Texto inválido";
    throw "Texto inválido";
  }
  errorWarning.innerHTML = "";

  var splitEncodedData = encodedData.split(" ");
  var arr = [];
  for (word of splitEncodedData) arr.push(AALBBLCCL(word));
  decodedData.value += `${arr.join(" ")}\u000a`;
  arr = [];

  for (word of splitEncodedData) arr.push(AALBBLCAL(word));
  decodedData.value += `${arr.join(" ")}\u000a`;
  arr = [];

  for (word of splitEncodedData) arr.push(AALBBLCBL(word));
  decodedData.value += `${arr.join(" ")}\u000a`;
  arr = [];

  for (word of splitEncodedData) arr.push(AALBALCCL(word));
  decodedData.value += `${arr.join(" ")}\u000a`;
  arr = [];

  for (word of splitEncodedData) arr.push(AALBALCAL(word));
  decodedData.value += `${arr.join(" ")}\u000a`;
  arr = [];

  for (word of splitEncodedData) arr.push(AALBALCBL(word));
  decodedData.value += `${arr.join(" ")}\u000a`;
  arr = [];

  for (word of splitEncodedData) arr.push(AALBCLCCL(word));
  decodedData.value += `${arr.join(" ")}\u000a`;
  arr = [];

  for (word of splitEncodedData) arr.push(AALBCLCAL(word));
  decodedData.value += `${arr.join(" ")}\u000a`;
  arr = [];

  for (word of splitEncodedData) arr.push(AALBCLCBL(word));
  decodedData.value += `${arr.join(" ")}\u000a`;
  arr = [];

  for (word of splitEncodedData) arr.push(ABLBBLCCL(word));
  decodedData.value += `${arr.join(" ")}\u000a`;
  arr = [];

  for (word of splitEncodedData) arr.push(ABLBBLCAL(word));
  decodedData.value += `${arr.join(" ")}\u000a`;
  arr = [];

  for (word of splitEncodedData) arr.push(ABLBBLCBL(word));
  decodedData.value += `${arr.join(" ")}\u000a`;
  arr = [];

  for (word of splitEncodedData) arr.push(ABLBALCCL(word));
  decodedData.value += `${arr.join(" ")}\u000a`;
  arr = [];

  for (word of splitEncodedData) arr.push(ABLBALCAL(word));
  decodedData.value += `${arr.join(" ")}\u000a`;
  arr = [];

  for (word of splitEncodedData) arr.push(ABLBALCBL(word));
  decodedData.value += `${arr.join(" ")}\u000a`;
  arr = [];

  for (word of splitEncodedData) arr.push(ABLBCLCCL(word));
  decodedData.value += `${arr.join(" ")}\u000a`;
  arr = [];

  for (word of splitEncodedData) arr.push(ABLBCLCAL(word));
  decodedData.value += `${arr.join(" ")}\u000a`;
  arr = [];

  for (word of splitEncodedData) arr.push(ABLBCLCBL(word));
  decodedData.value += `${arr.join(" ")}\u000a`;
  arr = [];

  for (word of splitEncodedData) arr.push(ACLBBLCCL(word));
  decodedData.value += `${arr.join(" ")}\u000a`;
  arr = [];

  for (word of splitEncodedData) arr.push(ACLBBLCAL(word));
  decodedData.value += `${arr.join(" ")}\u000a`;
  arr = [];

  for (word of splitEncodedData) arr.push(ACLBBLCBL(word));
  decodedData.value += `${arr.join(" ")}\u000a`;
  arr = [];

  for (word of splitEncodedData) arr.push(ACLBALCCL(word));
  decodedData.value += `${arr.join(" ")}\u000a`;
  arr = [];

  for (word of splitEncodedData) arr.push(ACLBALCAL(word));
  decodedData.value += `${arr.join(" ")}\u000a`;
  arr = [];

  for (word of splitEncodedData) arr.push(ACLBALCBL(word));
  decodedData.value += `${arr.join(" ")}\u000a`;
  arr = [];

  for (word of splitEncodedData) arr.push(ACLBCLCCL(word));
  decodedData.value += `${arr.join(" ")}\u000a`;
  arr = [];

  for (word of splitEncodedData) arr.push(ACLBCLCAL(word));
  decodedData.value += `${arr.join(" ")}\u000a`;
  arr = [];

  for (word of splitEncodedData) arr.push(ACLBCLCBL(word));
  decodedData.value += `${arr.join(" ")}\u000a`;
  arr = [];
}

function AALBBLCCL(mensage) {
  var alphabet = "QWERTYUIOPASDFGHJKLÇZXCVBNM";
  var tebahpla = "POIUYTREWQÇLKJHGFDSAMNBVCXZ";
  var alphabet1 = "qwertyuiopasdfghjklçzxcvbnm";
  var tebahpla1 = "poiuytrewqçlkjhgfdsamnbvcxz";
  var decoded_string = "";

  for (var i = 0; i < mensage.length; i++) {
    var coded_letra = mensage.charAt(i);

    if (/[^a-zA-Z]/.test(mensage[i])) {
      decoded_string = decoded_string + mensage[i];
    } else if (mensage[i] === mensage[i].toUpperCase()) {
      var letraPosMayus = alphabet.indexOf(coded_letra);
      var tebLetraPosMayus = tebahpla.charAt(letraPosMayus);
      decoded_string = decoded_string + tebLetraPosMayus;
    } else {
      var letraPosMinus1 = alphabet1.indexOf(coded_letra);
      var tebLetraPosMinus1 = tebahpla1.charAt(letraPosMinus1);
      decoded_string = decoded_string + tebLetraPosMinus1;
    }
  }
  return decoded_string;
}

function AALBBLCAL(mensage) {
  var alphabet = "QWERTYUIOPASDFGHJKLÇZXCVBNM";
  var tebahpla = "POIUYTREWQÇLKJHGFDSAMNBVCXZ";
  var alphabet1 = "qwertyuiopasdfghjklçzxcvbnm";
  var tebahpla1 = "poiuytrewqçlkjhgfdsapoiuytrewq";
  var decoded_string = "";

  for (var i = 0; i < mensage.length; i++) {
    var coded_letra = mensage.charAt(i);

    if (/[^a-zA-Z]/.test(mensage[i])) {
      decoded_string = decoded_string + mensage[i];
    } else if (mensage[i] === mensage[i].toUpperCase()) {
      var letraPosMayus = alphabet.indexOf(coded_letra);
      var tebLetraPosMayus = tebahpla.charAt(letraPosMayus);
      decoded_string = decoded_string + tebLetraPosMayus;
    } else {
      var letraPosMinus1 = alphabet1.indexOf(coded_letra);
      var tebLetraPosMinus1 = tebahpla1.charAt(letraPosMinus1);
      decoded_string = decoded_string + tebLetraPosMinus1;
    }
  }
  return decoded_string;
}

function AALBBLCBL(mensage) {
  var alphabet = "QWERTYUIOP ASDFGHJKLÇ ZXCVBNM";
  var tebahpla = "POIUYTREWQ ÇLKJHGFDSA MNBVCXZ";
  var alphabet1 = "qwertyuiopasdfghjklçzxcvbnm";
  var tebahpla1 = "poiuytrewqçlkjhgfdsaçlkjhgfdsa";
  var decoded_string = "";

  for (var i = 0; i < mensage.length; i++) {
    var coded_letra = mensage.charAt(i);

    if (/[^a-zA-Z]/.test(mensage[i])) {
      decoded_string = decoded_string + mensage[i];
    } else if (mensage[i] === mensage[i].toUpperCase()) {
      var letraPosMayus = alphabet.indexOf(coded_letra);
      var tebLetraPosMayus = tebahpla.charAt(letraPosMayus);
      decoded_string = decoded_string + tebLetraPosMayus;
    } else {
      var letraPosMinus1 = alphabet1.indexOf(coded_letra);
      var tebLetraPosMinus1 = tebahpla1.charAt(letraPosMinus1);
      decoded_string = decoded_string + tebLetraPosMinus1;
    }
  }
  return decoded_string;
}

function AALBALCCL(mensage) {
  var alphabet = "QWERTYUIOP ASDFGHJKLÇ ZXCVBNM";
  var tebahpla = "POIUYTREWQ ÇLKJHGFDSA MNBVCXZ";
  var alphabet1 = "qwertyuiopasdfghjklçzxcvbnm";
  var tebahpla1 = "poiuytrewqpoiuytrewqmnbvcxz";
  var decoded_string = "";

  for (var i = 0; i < mensage.length; i++) {
    var coded_letra = mensage.charAt(i);

    if (/[^a-zA-Z]/.test(mensage[i])) {
      decoded_string = decoded_string + mensage[i];
    } else if (mensage[i] === mensage[i].toUpperCase()) {
      var letraPosMayus = alphabet.indexOf(coded_letra);
      var tebLetraPosMayus = tebahpla.charAt(letraPosMayus);
      decoded_string = decoded_string + tebLetraPosMayus;
    } else {
      var letraPosMinus1 = alphabet1.indexOf(coded_letra);
      var tebLetraPosMinus1 = tebahpla1.charAt(letraPosMinus1);
      decoded_string = decoded_string + tebLetraPosMinus1;
    }
  }
  return decoded_string;
}

function AALBALCAL(mensage) {
  var alphabet = "QWERTYUIOP ASDFGHJKLÇ ZXCVBNM";
  var tebahpla = "POIUYTREWQ ÇLKJHGFDSA MNBVCXZ";
  var alphabet1 = "qwertyuiopasdfghjklçzxcvbnm";
  var tebahpla1 = "poiuytrewqpoiuytrewqpoiuytrewq";
  var decoded_string = "";

  for (var i = 0; i < mensage.length; i++) {
    var coded_letra = mensage.charAt(i);

    if (/[^a-zA-Z]/.test(mensage[i])) {
      decoded_string = decoded_string + mensage[i];
    } else if (mensage[i] === mensage[i].toUpperCase()) {
      var letraPosMayus = alphabet.indexOf(coded_letra);
      var tebLetraPosMayus = tebahpla.charAt(letraPosMayus);
      decoded_string = decoded_string + tebLetraPosMayus;
    } else {
      var letraPosMinus1 = alphabet1.indexOf(coded_letra);
      var tebLetraPosMinus1 = tebahpla1.charAt(letraPosMinus1);
      decoded_string = decoded_string + tebLetraPosMinus1;
    }
  }
  return decoded_string;
}

function AALBALCBL(mensage) {
  var alphabet = "QWERTYUIOP ASDFGHJKLÇ ZXCVBNM";
  var tebahpla = "POIUYTREWQ ÇLKJHGFDSA MNBVCXZ";
  var alphabet1 = "qwertyuiopasdfghjklçzxcvbnm";
  var tebahpla1 = "poiuytrewqpoiuytrewqçlkjhgfdsa";
  var decoded_string = "";

  for (var i = 0; i < mensage.length; i++) {
    var coded_letra = mensage.charAt(i);

    if (/[^a-zA-Z]/.test(mensage[i])) {
      decoded_string = decoded_string + mensage[i];
    } else if (mensage[i] === mensage[i].toUpperCase()) {
      var letraPosMayus = alphabet.indexOf(coded_letra);
      var tebLetraPosMayus = tebahpla.charAt(letraPosMayus);
      decoded_string = decoded_string + tebLetraPosMayus;
    } else {
      var letraPosMinus1 = alphabet1.indexOf(coded_letra);
      var tebLetraPosMinus1 = tebahpla1.charAt(letraPosMinus1);
      decoded_string = decoded_string + tebLetraPosMinus1;
    }
  }
  return decoded_string;
}

function AALBCLCCL(mensage) {
  var alphabet = "QWERTYUIOP ASDFGHJKLÇ ZXCVBNM";
  var tebahpla = "POIUYTREWQ ÇLKJHGFDSA MNBVCXZ";
  var alphabet1 = "qwertyuiopasdfghjklçzxcvbnm";
  var tebahpla1 = "poiuytrewqmnbvcxzmnbvcxz";
  var decoded_string = "";

  for (var i = 0; i < mensage.length; i++) {
    var coded_letra = mensage.charAt(i);

    if (/[^a-zA-Z]/.test(mensage[i])) {
      decoded_string = decoded_string + mensage[i];
    } else if (mensage[i] === mensage[i].toUpperCase()) {
      var letraPosMayus = alphabet.indexOf(coded_letra);
      var tebLetraPosMayus = tebahpla.charAt(letraPosMayus);
      decoded_string = decoded_string + tebLetraPosMayus;
    } else {
      var letraPosMinus1 = alphabet1.indexOf(coded_letra);
      var tebLetraPosMinus1 = tebahpla1.charAt(letraPosMinus1);
      decoded_string = decoded_string + tebLetraPosMinus1;
    }
  }
  return decoded_string;
}

function AALBCLCAL(mensage) {
  var alphabet = "QWERTYUIOP ASDFGHJKLÇ ZXCVBNM";
  var tebahpla = "POIUYTREWQ ÇLKJHGFDSA MNBVCXZ";
  var alphabet1 = "qwertyuiopasdfghjklçzxcvbnm";
  var tebahpla1 = "poiuytrewqmnbvcxzpoiuytrewq";
  var decoded_string = "";

  for (var i = 0; i < mensage.length; i++) {
    var coded_letra = mensage.charAt(i);

    if (/[^a-zA-Z]/.test(mensage[i])) {
      decoded_string = decoded_string + mensage[i];
    } else if (mensage[i] === mensage[i].toUpperCase()) {
      var letraPosMayus = alphabet.indexOf(coded_letra);
      var tebLetraPosMayus = tebahpla.charAt(letraPosMayus);
      decoded_string = decoded_string + tebLetraPosMayus;
    } else {
      var letraPosMinus1 = alphabet1.indexOf(coded_letra);
      var tebLetraPosMinus1 = tebahpla1.charAt(letraPosMinus1);
      decoded_string = decoded_string + tebLetraPosMinus1;
    }
  }
  return decoded_string;
}

function AALBCLCBL(mensage) {
  var alphabet = "QWERTYUIOP ASDFGHJKLÇ ZXCVBNM";
  var tebahpla = "POIUYTREWQ ÇLKJHGFDSA MNBVCXZ";
  var alphabet1 = "qwertyuiopasdfghjklçzxcvbnm";
  var tebahpla1 = "poiuytrewqmnbvcxzçlkjhgfdsa";
  var decoded_string = "";

  for (var i = 0; i < mensage.length; i++) {
    var coded_letra = mensage.charAt(i);

    if (/[^a-zA-Z]/.test(mensage[i])) {
      decoded_string = decoded_string + mensage[i];
    } else if (mensage[i] === mensage[i].toUpperCase()) {
      var letraPosMayus = alphabet.indexOf(coded_letra);
      var tebLetraPosMayus = tebahpla.charAt(letraPosMayus);
      decoded_string = decoded_string + tebLetraPosMayus;
    } else {
      var letraPosMinus1 = alphabet1.indexOf(coded_letra);
      var tebLetraPosMinus1 = tebahpla1.charAt(letraPosMinus1);
      decoded_string = decoded_string + tebLetraPosMinus1;
    }
  }
  return decoded_string;
}

function ABLBBLCCL(mensage) {
  var alphabet = "QWERTYUIOP ASDFGHJKLÇ ZXCVBNM";
  var tebahpla = "POIUYTREWQ ÇLKJHGFDSA MNBVCXZ";
  var alphabet1 = "qwertyuiopasdfghjklçzxcvbnm";
  var tebahpla1 = "çlkjhgfdsaçlkjhgfdsamnbvcxz";
  var decoded_string = "";

  for (var i = 0; i < mensage.length; i++) {
    var coded_letra = mensage.charAt(i);

    if (/[^a-zA-Z]/.test(mensage[i])) {
      decoded_string = decoded_string + mensage[i];
    } else if (mensage[i] === mensage[i].toUpperCase()) {
      var letraPosMayus = alphabet.indexOf(coded_letra);
      var tebLetraPosMayus = tebahpla.charAt(letraPosMayus);
      decoded_string = decoded_string + tebLetraPosMayus;
    } else {
      var letraPosMinus1 = alphabet1.indexOf(coded_letra);
      var tebLetraPosMinus1 = tebahpla1.charAt(letraPosMinus1);
      decoded_string = decoded_string + tebLetraPosMinus1;
    }
  }
  return decoded_string;
}

function ABLBBLCAL(mensage) {
  var alphabet = "QWERTYUIOP ASDFGHJKLÇ ZXCVBNM";
  var tebahpla = "POIUYTREWQ ÇLKJHGFDSA MNBVCXZ";
  var alphabet1 = "qwertyuiopasdfghjklçzxcvbnm";
  var tebahpla1 = "çlkjhgfdsaçlkjhgfdsapoiuytrewq";
  var decoded_string = "";

  for (var i = 0; i < mensage.length; i++) {
    var coded_letra = mensage.charAt(i);

    if (/[^a-zA-Z]/.test(mensage[i])) {
      decoded_string = decoded_string + mensage[i];
    } else if (mensage[i] === mensage[i].toUpperCase()) {
      var letraPosMayus = alphabet.indexOf(coded_letra);
      var tebLetraPosMayus = tebahpla.charAt(letraPosMayus);
      decoded_string = decoded_string + tebLetraPosMayus;
    } else {
      var letraPosMinus1 = alphabet1.indexOf(coded_letra);
      var tebLetraPosMinus1 = tebahpla1.charAt(letraPosMinus1);
      decoded_string = decoded_string + tebLetraPosMinus1;
    }
  }
  return decoded_string;
}

function ABLBBLCBL(mensage) {
  var alphabet = "QWERTYUIOP ASDFGHJKLÇ ZXCVBNM";
  var tebahpla = "POIUYTREWQ ÇLKJHGFDSA MNBVCXZ";
  var alphabet1 = "qwertyuiopasdfghjklçzxcvbnm";
  var tebahpla1 = "çlkjhgfdsaçlkjhgfdsaçlkjhgfdsa";
  var decoded_string = "";

  for (var i = 0; i < mensage.length; i++) {
    var coded_letra = mensage.charAt(i);

    if (/[^a-zA-Z]/.test(mensage[i])) {
      decoded_string = decoded_string + mensage[i];
    } else if (mensage[i] === mensage[i].toUpperCase()) {
      var letraPosMayus = alphabet.indexOf(coded_letra);
      var tebLetraPosMayus = tebahpla.charAt(letraPosMayus);
      decoded_string = decoded_string + tebLetraPosMayus;
    } else {
      var letraPosMinus1 = alphabet1.indexOf(coded_letra);
      var tebLetraPosMinus1 = tebahpla1.charAt(letraPosMinus1);
      decoded_string = decoded_string + tebLetraPosMinus1;
    }
  }
  return decoded_string;
}

function ABLBALCCL(mensage) {
  var alphabet = "QWERTYUIOP ASDFGHJKLÇ ZXCVBNM";
  var tebahpla = "POIUYTREWQ ÇLKJHGFDSA MNBVCXZ";
  var alphabet1 = "qwertyuiopasdfghjklçzxcvbnm";
  var tebahpla1 = "çlkjhgfdsapoiuytrewqmnbvcxz";
  var decoded_string = "";

  for (var i = 0; i < mensage.length; i++) {
    var coded_letra = mensage.charAt(i);

    if (/[^a-zA-Z]/.test(mensage[i])) {
      decoded_string = decoded_string + mensage[i];
    } else if (mensage[i] === mensage[i].toUpperCase()) {
      var letraPosMayus = alphabet.indexOf(coded_letra);
      var tebLetraPosMayus = tebahpla.charAt(letraPosMayus);
      decoded_string = decoded_string + tebLetraPosMayus;
    } else {
      var letraPosMinus1 = alphabet1.indexOf(coded_letra);
      var tebLetraPosMinus1 = tebahpla1.charAt(letraPosMinus1);
      decoded_string = decoded_string + tebLetraPosMinus1;
    }
  }
  return decoded_string;
}

function ABLBALCAL(mensage) {
  var alphabet = "QWERTYUIOP ASDFGHJKLÇ ZXCVBNM";
  var tebahpla = "POIUYTREWQ ÇLKJHGFDSA MNBVCXZ";
  var alphabet1 = "qwertyuiopasdfghjklçzxcvbnm";
  var tebahpla1 = "çlkjhgfdsapoiuytrewqpoiuytrewq";
  var decoded_string = "";

  for (var i = 0; i < mensage.length; i++) {
    var coded_letra = mensage.charAt(i);

    if (/[^a-zA-Z]/.test(mensage[i])) {
      decoded_string = decoded_string + mensage[i];
    } else if (mensage[i] === mensage[i].toUpperCase()) {
      var letraPosMayus = alphabet.indexOf(coded_letra);
      var tebLetraPosMayus = tebahpla.charAt(letraPosMayus);
      decoded_string = decoded_string + tebLetraPosMayus;
    } else {
      var letraPosMinus1 = alphabet1.indexOf(coded_letra);
      var tebLetraPosMinus1 = tebahpla1.charAt(letraPosMinus1);
      decoded_string = decoded_string + tebLetraPosMinus1;
    }
  }
  return decoded_string;
}

function ABLBALCBL(mensage) {
  var alphabet = "QWERTYUIOP ASDFGHJKLÇ ZXCVBNM";
  var tebahpla = "POIUYTREWQ ÇLKJHGFDSA MNBVCXZ";
  var alphabet1 = "qwertyuiopasdfghjklçzxcvbnm";
  var tebahpla1 = "çlkjhgfdsapoiuytrewqçlkjhgfdsa";
  var decoded_string = "";

  for (var i = 0; i < mensage.length; i++) {
    var coded_letra = mensage.charAt(i);

    if (/[^a-zA-Z]/.test(mensage[i])) {
      decoded_string = decoded_string + mensage[i];
    } else if (mensage[i] === mensage[i].toUpperCase()) {
      var letraPosMayus = alphabet.indexOf(coded_letra);
      var tebLetraPosMayus = tebahpla.charAt(letraPosMayus);
      decoded_string = decoded_string + tebLetraPosMayus;
    } else {
      var letraPosMinus1 = alphabet1.indexOf(coded_letra);
      var tebLetraPosMinus1 = tebahpla1.charAt(letraPosMinus1);
      decoded_string = decoded_string + tebLetraPosMinus1;
    }
  }
  return decoded_string;
}

function ABLBCLCCL(mensage) {
  var alphabet = "QWERTYUIOP ASDFGHJKLÇ ZXCVBNM";
  var tebahpla = "POIUYTREWQ ÇLKJHGFDSA MNBVCXZ";
  var alphabet1 = "qwertyuiopasdfghjklçzxcvbnm";
  var tebahpla1 = "çlkjhgfdsamnbvcxzmnbvcxz";
  var decoded_string = "";

  for (var i = 0; i < mensage.length; i++) {
    var coded_letra = mensage.charAt(i);

    if (/[^a-zA-Z]/.test(mensage[i])) {
      decoded_string = decoded_string + mensage[i];
    } else if (mensage[i] === mensage[i].toUpperCase()) {
      var letraPosMayus = alphabet.indexOf(coded_letra);
      var tebLetraPosMayus = tebahpla.charAt(letraPosMayus);
      decoded_string = decoded_string + tebLetraPosMayus;
    } else {
      var letraPosMinus1 = alphabet1.indexOf(coded_letra);
      var tebLetraPosMinus1 = tebahpla1.charAt(letraPosMinus1);
      decoded_string = decoded_string + tebLetraPosMinus1;
    }
  }
  return decoded_string;
}
function ABLBCLCAL(mensage) {
  var alphabet = "QWERTYUIOP ASDFGHJKLÇ ZXCVBNM";
  var tebahpla = "POIUYTREWQ ÇLKJHGFDSA MNBVCXZ";
  var alphabet1 = "qwertyuiopasdfghjklçzxcvbnm";
  var tebahpla1 = "çlkjhgfdsamnbvcxzpoiuytrewq";
  var decoded_string = "";

  for (var i = 0; i < mensage.length; i++) {
    var coded_letra = mensage.charAt(i);

    if (/[^a-zA-Z]/.test(mensage[i])) {
      decoded_string = decoded_string + mensage[i];
    } else if (mensage[i] === mensage[i].toUpperCase()) {
      var letraPosMayus = alphabet.indexOf(coded_letra);
      var tebLetraPosMayus = tebahpla.charAt(letraPosMayus);
      decoded_string = decoded_string + tebLetraPosMayus;
    } else {
      var letraPosMinus1 = alphabet1.indexOf(coded_letra);
      var tebLetraPosMinus1 = tebahpla1.charAt(letraPosMinus1);
      decoded_string = decoded_string + tebLetraPosMinus1;
    }
  }
  return decoded_string;
}
function ABLBCLCBL(mensage) {
  var alphabet = "QWERTYUIOP ASDFGHJKLÇ ZXCVBNM";
  var tebahpla = "POIUYTREWQ ÇLKJHGFDSA MNBVCXZ";
  var alphabet1 = "qwertyuiopasdfghjklçzxcvbnm";
  var tebahpla1 = "çlkjhgfdsamnbvcxzçlkjhgfdsa";
  var decoded_string = "";

  for (var i = 0; i < mensage.length; i++) {
    var coded_letra = mensage.charAt(i);

    if (/[^a-zA-Z]/.test(mensage[i])) {
      decoded_string = decoded_string + mensage[i];
    } else if (mensage[i] === mensage[i].toUpperCase()) {
      var letraPosMayus = alphabet.indexOf(coded_letra);
      var tebLetraPosMayus = tebahpla.charAt(letraPosMayus);
      decoded_string = decoded_string + tebLetraPosMayus;
    } else {
      var letraPosMinus1 = alphabet1.indexOf(coded_letra);
      var tebLetraPosMinus1 = tebahpla1.charAt(letraPosMinus1);
      decoded_string = decoded_string + tebLetraPosMinus1;
    }
  }
  return decoded_string;
}
function ACLBBLCCL(mensage) {
  var alphabet = "QWERTYUIOP ASDFGHJKLÇ ZXCVBNM";
  var tebahpla = "POIUYTREWQ ÇLKJHGFDSA MNBVCXZ";
  var alphabet1 = "qwertyuiopasdfghjklçzxcvbnm";
  var tebahpla1 = "mnbvcxzçlkjhgfdsamnbvcxz";
  var decoded_string = "";

  for (var i = 0; i < mensage.length; i++) {
    var coded_letra = mensage.charAt(i);

    if (/[^a-zA-Z]/.test(mensage[i])) {
      decoded_string = decoded_string + mensage[i];
    } else if (mensage[i] === mensage[i].toUpperCase()) {
      var letraPosMayus = alphabet.indexOf(coded_letra);
      var tebLetraPosMayus = tebahpla.charAt(letraPosMayus);
      decoded_string = decoded_string + tebLetraPosMayus;
    } else {
      var letraPosMinus1 = alphabet1.indexOf(coded_letra);
      var tebLetraPosMinus1 = tebahpla1.charAt(letraPosMinus1);
      decoded_string = decoded_string + tebLetraPosMinus1;
    }
  }
  return decoded_string;
}
function ACLBBLCAL(mensage) {
  var alphabet = "QWERTYUIOP ASDFGHJKLÇ ZXCVBNM";
  var tebahpla = "POIUYTREWQ ÇLKJHGFDSA MNBVCXZ";
  var alphabet1 = "qwertyuiopasdfghjklçzxcvbnm";
  var tebahpla1 = "mnbvcxzçlkjhgfdsapoiuytrewq";
  var decoded_string = "";

  for (var i = 0; i < mensage.length; i++) {
    var coded_letra = mensage.charAt(i);

    if (/[^a-zA-Z]/.test(mensage[i])) {
      decoded_string = decoded_string + mensage[i];
    } else if (mensage[i] === mensage[i].toUpperCase()) {
      var letraPosMayus = alphabet.indexOf(coded_letra);
      var tebLetraPosMayus = tebahpla.charAt(letraPosMayus);
      decoded_string = decoded_string + tebLetraPosMayus;
    } else {
      var letraPosMinus1 = alphabet1.indexOf(coded_letra);
      var tebLetraPosMinus1 = tebahpla1.charAt(letraPosMinus1);
      decoded_string = decoded_string + tebLetraPosMinus1;
    }
  }
  return decoded_string;
}
function ACLBBLCBL(mensage) {
  var alphabet = "QWERTYUIOP ASDFGHJKLÇ ZXCVBNM";
  var tebahpla = "POIUYTREWQ ÇLKJHGFDSA MNBVCXZ";
  var alphabet1 = "qwertyuiopasdfghjklçzxcvbnm";
  var tebahpla1 = "mnbvcxzçlkjhgfdsaçlkjhgfdsa";
  var decoded_string = "";

  for (var i = 0; i < mensage.length; i++) {
    var coded_letra = mensage.charAt(i);

    if (/[^a-zA-Z]/.test(mensage[i])) {
      decoded_string = decoded_string + mensage[i];
    } else if (mensage[i] === mensage[i].toUpperCase()) {
      var letraPosMayus = alphabet.indexOf(coded_letra);
      var tebLetraPosMayus = tebahpla.charAt(letraPosMayus);
      decoded_string = decoded_string + tebLetraPosMayus;
    } else {
      var letraPosMinus1 = alphabet1.indexOf(coded_letra);
      var tebLetraPosMinus1 = tebahpla1.charAt(letraPosMinus1);
      decoded_string = decoded_string + tebLetraPosMinus1;
    }
  }
  return decoded_string;
}

function ACLBALCCL(mensage) {
  var alphabet = "QWERTYUIOP ASDFGHJKLÇ ZXCVBNM";
  var tebahpla = "POIUYTREWQ ÇLKJHGFDSA MNBVCXZ";
  var alphabet1 = "qwertyuiopasdfghjklçzxcvbnm";
  var tebahpla1 = "mnbvcxzpoiuytrewqmnbvcxz";
  var decoded_string = "";

  for (var i = 0; i < mensage.length; i++) {
    var coded_letra = mensage.charAt(i);

    if (/[^a-zA-Z]/.test(mensage[i])) {
      decoded_string = decoded_string + mensage[i];
    } else if (mensage[i] === mensage[i].toUpperCase()) {
      var letraPosMayus = alphabet.indexOf(coded_letra);
      var tebLetraPosMayus = tebahpla.charAt(letraPosMayus);
      decoded_string = decoded_string + tebLetraPosMayus;
    } else {
      var letraPosMinus1 = alphabet1.indexOf(coded_letra);
      var tebLetraPosMinus1 = tebahpla1.charAt(letraPosMinus1);
      decoded_string = decoded_string + tebLetraPosMinus1;
    }
  }
  return decoded_string;
}

function ACLBALCAL(mensage) {
  var alphabet = "QWERTYUIOP ASDFGHJKLÇ ZXCVBNM";
  var tebahpla = "POIUYTREWQ ÇLKJHGFDSA MNBVCXZ";
  var alphabet1 = "qwertyuiopasdfghjklçzxcvbnm";
  var tebahpla1 = "mnbvcxzpoiuytrewqpoiuytrewq";
  var decoded_string = "";

  for (var i = 0; i < mensage.length; i++) {
    var coded_letra = mensage.charAt(i);

    if (/[^a-zA-Z]/.test(mensage[i])) {
      decoded_string = decoded_string + mensage[i];
    } else if (mensage[i] === mensage[i].toUpperCase()) {
      var letraPosMayus = alphabet.indexOf(coded_letra);
      var tebLetraPosMayus = tebahpla.charAt(letraPosMayus);
      decoded_string = decoded_string + tebLetraPosMayus;
    } else {
      var letraPosMinus1 = alphabet1.indexOf(coded_letra);
      var tebLetraPosMinus1 = tebahpla1.charAt(letraPosMinus1);
      decoded_string = decoded_string + tebLetraPosMinus1;
    }
  }
  return decoded_string;
}

function ACLBALCBL(mensage) {
  var alphabet = "QWERTYUIOP ASDFGHJKLÇ ZXCVBNM";
  var tebahpla = "POIUYTREWQ ÇLKJHGFDSA MNBVCXZ";
  var alphabet1 = "qwertyuiopasdfghjklçzxcvbnm";
  var tebahpla1 = "mnbvcxzpoiuytrewqçlkjhgfdsa";
  var decoded_string = "";

  for (var i = 0; i < mensage.length; i++) {
    var coded_letra = mensage.charAt(i);

    if (/[^a-zA-Z]/.test(mensage[i])) {
      decoded_string = decoded_string + mensage[i];
    } else if (mensage[i] === mensage[i].toUpperCase()) {
      var letraPosMayus = alphabet.indexOf(coded_letra);
      var tebLetraPosMayus = tebahpla.charAt(letraPosMayus);
      decoded_string = decoded_string + tebLetraPosMayus;
    } else {
      var letraPosMinus1 = alphabet1.indexOf(coded_letra);
      var tebLetraPosMinus1 = tebahpla1.charAt(letraPosMinus1);
      decoded_string = decoded_string + tebLetraPosMinus1;
    }
  }
  return decoded_string;
}

function ACLBCLCCL(mensage) {
  var alphabet = "QWERTYUIOP ASDFGHJKLÇ ZXCVBNM";
  var tebahpla = "POIUYTREWQ ÇLKJHGFDSA MNBVCXZ";
  var alphabet1 = "qwertyuiopasdfghjklçzxcvbnm";
  var tebahpla1 = "mnbvcxzmnbvcxzmnbvcxz";
  var decoded_string = "";

  for (var i = 0; i < mensage.length; i++) {
    var coded_letra = mensage.charAt(i);

    if (/[^a-zA-Z]/.test(mensage[i])) {
      decoded_string = decoded_string + mensage[i];
    } else if (mensage[i] === mensage[i].toUpperCase()) {
      var letraPosMayus = alphabet.indexOf(coded_letra);
      var tebLetraPosMayus = tebahpla.charAt(letraPosMayus);
      decoded_string = decoded_string + tebLetraPosMayus;
    } else {
      var letraPosMinus1 = alphabet1.indexOf(coded_letra);
      var tebLetraPosMinus1 = tebahpla1.charAt(letraPosMinus1);
      decoded_string = decoded_string + tebLetraPosMinus1;
    }
  }
  return decoded_string;
}

function ACLBCLCAL(mensage) {
  var alphabet = "QWERTYUIOP ASDFGHJKLÇ ZXCVBNM";
  var tebahpla = "POIUYTREWQ ÇLKJHGFDSA MNBVCXZ";
  var alphabet1 = "qwertyuiopasdfghjklçzxcvbnm";
  var tebahpla1 = "mnbvcxzmnbvcxzpoiuytrewq";
  var decoded_string = "";

  for (var i = 0; i < mensage.length; i++) {
    var coded_letra = mensage.charAt(i);

    if (/[^a-zA-Z]/.test(mensage[i])) {
      decoded_string = decoded_string + mensage[i];
    } else if (mensage[i] === mensage[i].toUpperCase()) {
      var letraPosMayus = alphabet.indexOf(coded_letra);
      var tebLetraPosMayus = tebahpla.charAt(letraPosMayus);
      decoded_string = decoded_string + tebLetraPosMayus;
    } else {
      var letraPosMinus1 = alphabet1.indexOf(coded_letra);
      var tebLetraPosMinus1 = tebahpla1.charAt(letraPosMinus1);
      decoded_string = decoded_string + tebLetraPosMinus1;
    }
  }
  return decoded_string;
}

function ACLBCLCBL(mensage) {
  var alphabet = "QWERTYUIOP ASDFGHJKLÇ ZXCVBNM";
  var tebahpla = "POIUYTREWQ ÇLKJHGFDSA MNBVCXZ";
  var alphabet1 = "qwertyuiopasdfghjklçzxcvbnm";
  var tebahpla1 = "mnbvcxzmnbvcxzçlkjhgfdsa";
  var decoded_string = "";

  for (var i = 0; i < mensage.length; i++) {
    var coded_letra = mensage.charAt(i);

    if (/[^a-zA-Z]/.test(mensage[i])) {
      decoded_string = decoded_string + mensage[i];
    } else if (mensage[i] === mensage[i].toUpperCase()) {
      var letraPosMayus = alphabet.indexOf(coded_letra);
      var tebLetraPosMayus = tebahpla.charAt(letraPosMayus);
      decoded_string = decoded_string + tebLetraPosMayus;
    } else {
      var letraPosMinus1 = alphabet1.indexOf(coded_letra);
      var tebLetraPosMinus1 = tebahpla1.charAt(letraPosMinus1);
      decoded_string = decoded_string + tebLetraPosMinus1;
    }
  }
  return decoded_string;
}
