function doAnalyze() {
    var lineCount = 1;

    if (document.getElementById("s1d2").checked == true) var a1z26 = true
    if (document.getElementById("ssep").checked == true) var separator = true
    if (document.getElementById("sdown").checked == true) var down = true
    if (document.getElementById("ssum").checked == true) var scsum = true
    if (document.getElementById("szosep").checked == true) var zosep = true
    if (document.getElementById("s1to0").checked == true) var ss1to0 = true

    var decodedData = document.querySelector('#decodedData')
    decodedData.value = ""

    var values = []
    var data = getData(separator, down)
    for (line of data) values.push(count(line, scsum, ss1to0))

    join(values, a1z26, scsum, zosep) //Juntar
    sum(values, a1z26) //Somar
    sub(values, a1z26) //Subtrair
    reSub(values, a1z26) //Subtração inversa
    mul(values, a1z26) //Multiplicar
    mulSumF(values, a1z26) //Multiplicar + Primeiro
    mulSumS(values, a1z26) //Multiplicar + Segundo
    mulSubF(values, a1z26) //Multiplicar - Primeiro
    mulSubS(values, a1z26) //Multiplicar - Segundo
    div(values, a1z26) //Dividir
    reDiv(values, a1z26) //Divisão inversa
    pow(values, a1z26) //Potencia
    rePow(values, a1z26) //Potencia inversa
    square(values, a1z26) //Square2 join
    squareRoot(values, a1z26) //Squareroot join
    squareRootMul(values, a1z26) //Squareroot mul

}

function getData(separator, down) {
    var encodedData = document.querySelector('#encodedData').value
    var errorWarning = document.querySelector('#errors')

    if (encodedData.length == 0 || (encodedData.replace(/ /g, '').replace(/32/g, '').replace(/16/g, '').replace(/8/g, '').replace(/4/g, '').replace(/2/g, '').replace(/0/g, '').replace(/1/g, '').replace(/\n/g, '')).length > 0) {
        errorWarning.innerHTML = 'Texto inválido'
        throw 'Texto inválido'
    }

    errorWarning.innerHTML = ""
    var splitEncodedData = encodedData.split('\n')
    var newEncodedData = []

    for (index in splitEncodedData) {
        var line = splitEncodedData[index]
        var line = simplify(line, separator, down)

        if (line.includes(' ')) {
            var sublines = line.split(' ')
            for (subline of sublines) newEncodedData.push(subline);
        } else {
            newEncodedData.push(line)
        }
    }
    return newEncodedData
}


function count(line, scsum, ss1to0) {
    var arr = []
    var arrCounted = []
    var tmp = ""

    for (index in line.split('')) {
        var char = line[index]
        if (char == "0" || char == "1") {

            if (index == 0) {
                tmp += char
            } else {
                if (char == line[index - 1]) {
                    tmp += char
                } else {
                    arr.push(tmp)
                    tmp = char
                }

                if (index == line.length - 1) arr.push(tmp)
            }

            if (line.length == 1) arr.push(tmp)
        }
    }
    if (scsum) {
        if (arr.length > 0 && arr[0][0]) {
            if (ss1to0) {
                arr = arr.sort(function (a, b) { return Number(b) - Number(a) })
            } else {
                switch (arr[0][0]) {
                    case "0":
                        arr = arr.sort(function (a, b) { return Number(a) - Number(b) })
                        break
                    case "1":
                        arr = arr.sort(function (a, b) { return Number(b) - Number(a) })
                        break
                }
            }
        }

        for (i in arr) {
            if (i > 0) {
                let value = arr[i]
                let previousValue = arr[i - 1]

                if (value[0] == previousValue[0]) {
                    arr[i - 1] = (`${previousValue}${value}`).replace(/ /g, '')
                    arr.splice(i, 1)
                }
            }
        }
    }
    for (group of arr) arrCounted.push(group.length)

    return arrCounted
}

var sLine;
var stat = true;
var nextLine = ""
var lineCount = 1;

function simplify(line, separator, down) {
    if (down) {
        console.log(`${lineCount} -> ${nextLine}`)
        if (lineCount > 1) {

            line = nextLine + line
            nextLine = "";
        }

        sLine = line.split('')
        for (index in sLine) {
            while (stat == true) {
                console.log(sLine)
                console.log(stat)

                resimplify(sLine, index)
            }
        }

        lineCount++
        stat = true;
        var line = sLine.join("")
        console.log(line)

        return line
    } else {
        if (separator) {
            return line.replace(/4/g, ' 22 ').replace(/2/g, ' 11 ').replace(/16/g, ' 88 ').replace(/8/g, ' 00 ').replace(/32/g, '').trim()
        } else {
            return line.replace(/4/g, '22').replace(/2/g, '11').replace(/16/g, '88').replace(/8/g, '00').replace(/32/g, '').trim()
        }
    }


}

function resimplify(aLine, index) {
    //console.log(sLine)

    var char = aLine[index]
    switch (char) {
        case "4":
            aLine[index] = "2"
            nextLine += "2"

            sLine = aLine
            break
        case "2":
            aLine[index] = "1"
            nextLine += "1"

            sLine = aLine
            break
        case "16":
            aLine[index] = "8"
            nextLine += "8"

            sLine = aLine
            break
        case "8":
            aLine[index] = "0"
            nextLine += "0"

            sLine = aLine
            break
        case "32":
            aLine[index] = ""
            nextLine += ""

            break
        default:
            stat = false
    }
}

function join(values, a1z26, scsum, zosep) {
    var arrJoin = []

    decodedData.value += 'Join:\n'
    for (arrValues of values) {
        if (a1z26) {
            if (scsum && zosep) {
                decodedData.value += `${String.fromCharCode(96 + Number(arrValues[0]))} `
                decodedData.value += `${String.fromCharCode(96 + Number(arrValues[1]))}\n`
                arrJoin.push(`${String.fromCharCode(96 + Number(arrValues[0]))}`)
                arrJoin.push(`${String.fromCharCode(96 + Number(arrValues[1]))}`)
            } else if (zosep == undefined) {
                decodedData.value += `${String.fromCharCode(96 + Number(arrValues.join('')))}\n`
                arrJoin.push(`${String.fromCharCode(96 + Number(arrValues.join('')))}`)
            }

        } else {
            if (scsum && zosep) {
                decodedData.value += `${arrValues.join(' ')}\n`
                arrJoin.push(`${arrValues.join(' ')} `)
            } else if (zosep == undefined) {
                decodedData.value += `${arrValues.join('')}\n`
                arrJoin.push(`${arrValues.join('')} `)
            }

        }
    }
    decodedData.value += `\n${arrJoin.join('')}\n\n`
}

function sum(values, a1z26) {
    var arrJoin = []

    decodedData.value += 'Sum:\n'
    for (arrValues of values) {
        if (a1z26) {
            decodedData.value += `${String.fromCharCode(96 + (arrValues.reduce((a, b) => a + b, 0)))}\n`
            arrJoin.push(`${String.fromCharCode(96 + (arrValues.reduce((a, b) => a + b, 0)))}`)
        } else {
            decodedData.value += `${arrValues.reduce((a, b) => a + b, 0)}\n`
            arrJoin.push(`${arrValues.reduce((a, b) => a + b, 0)} `)
        }
    }
    decodedData.value += `\n${arrJoin.join('')}\n\n`

}

function sub(values, a1z26) {
    var arrJoin = []

    decodedData.value += 'Sub:\n'
    for (arrValues of values) {
        if (a1z26) {
            decodedData.value += `${String.fromCharCode(96 + (arrValues.reduce((a, b) => a - b, 0)))}\n`
            arrJoin.push(`${String.fromCharCode(96 + (arrValues.reduce((a, b) => a - b, 0)))}`)
        } else {
            decodedData.value += `${arrValues.reduce((a, b) => a - b, 0)}\n`
            arrJoin.push(`${arrValues.reduce((a, b) => a - b, 0)} `)
        }
    }
    decodedData.value += `\n${arrJoin.join('')}\n\n`
}

function reSub(values, a1z26) {
    var arrJoin = []

    decodedData.value += 'ReSub:\n'
    for (arrValues of values) {
        if (a1z26) {
            decodedData.value += `${String.fromCharCode(96 + (arrValues.reduce((a, b) => b - a, 0)))}\n`
            arrJoin.push(`${String.fromCharCode(96 + (arrValues.reduce((a, b) => b - a, 0)))}`)
        } else {
            decodedData.value += `${arrValues.reduce((a, b) => b - a, 0)}\n`
            arrJoin.push(`${arrValues.reduce((a, b) => b - a, 0)} `)
        }
    }
    decodedData.value += `\n${arrJoin.join('')}\n\n`
}

function mul(values, a1z26) {
    var arrJoin = []

    decodedData.value += 'Mul:\n'
    for (arrValues of values) {
        if (!arrValues[1]) arrValues[1] = 1

        if (a1z26) {
            decodedData.value += `${String.fromCharCode(96 + (arrValues.reduce((a, b) => a * b)))}\n`
            arrJoin.push(`${String.fromCharCode(96 + (arrValues.reduce((a, b) => a * b)))}`)
        } else {
            decodedData.value += `${arrValues.reduce((a, b) => a * b)}\n`
            arrJoin.push(`${arrValues.reduce((a, b) => a * b)} `)
        }
    }
    decodedData.value += `\n${arrJoin.join('')}\n\n`
}

function mulSumF(values, a1z26) {
    var arrJoin = []

    decodedData.value += 'Mul + First:\n'
    for (arrValues of values) {
        if (!arrValues[1]) arrValues[1] = 1

        if (a1z26) {
            decodedData.value += `${String.fromCharCode(96 + (arrValues.reduce((a, b) => (a * b) + a)))}\n`
            arrJoin.push(`${String.fromCharCode(96 + (arrValues.reduce((a, b) => (a * b) + a)))}`)
        } else {
            decodedData.value += `${arrValues.reduce((a, b) => (a * b) + a)}\n`
            arrJoin.push(`${arrValues.reduce((a, b) => (a * b) + a)} `)
        }
    }
    decodedData.value += `\n${arrJoin.join('')}\n\n`
}

function mulSumS(values, a1z26) {
    var arrJoin = []

    decodedData.value += 'Mul + Second:\n'
    for (arrValues of values) {
        if (!arrValues[1]) arrValues[1] = 1

        if (a1z26) {
            decodedData.value += `${String.fromCharCode(96 + (arrValues.reduce((a, b) => (a * b) + b)))}\n`
            arrJoin.push(`${String.fromCharCode(96 + (arrValues.reduce((a, b) => (a * b) + b)))}`)
        } else {
            decodedData.value += `${arrValues.reduce((a, b) => (a * b) + b)}\n`
            arrJoin.push(`${arrValues.reduce((a, b) => (a * b) + b)} `)
        }
    }
    decodedData.value += `\n${arrJoin.join('')}\n\n`
}

function mulSubF(values, a1z26) {
    var arrJoin = []

    decodedData.value += 'Mul - First:\n'
    for (arrValues of values) {
        if (!arrValues[1]) arrValues[1] = 1

        if (a1z26) {
            decodedData.value += `${String.fromCharCode(96 + (arrValues.reduce((a, b) => (a * b) - a)))}\n`
            arrJoin.push(`${String.fromCharCode(96 + (arrValues.reduce((a, b) => (a * b) - a)))}`)
        } else {
            decodedData.value += `${arrValues.reduce((a, b) => (a * b) - a)}\n`
            arrJoin.push(`${arrValues.reduce((a, b) => (a * b) - a)} `)
        }
    }
    decodedData.value += `\n${arrJoin.join('')}\n\n`
}

function mulSubS(values, a1z26) {
    var arrJoin = []

    decodedData.value += 'Mul - Second:\n'
    for (arrValues of values) {
        if (!arrValues[1]) arrValues[1] = 1

        if (a1z26) {
            decodedData.value += `${String.fromCharCode(96 + (arrValues.reduce((a, b) => (a * b) - b)))}\n`
            arrJoin.push(`${String.fromCharCode(96 + (arrValues.reduce((a, b) => (a * b) - b)))}`)
        } else {
            decodedData.value += `${arrValues.reduce((a, b) => (a * b) - b)}\n`
            arrJoin.push(`${arrValues.reduce((a, b) => (a * b) - b)} `)
        }
    }
    decodedData.value += `\n${arrJoin.join('')}\n\n`
}

function div(values, a1z26) {
    var arrJoin = []

    decodedData.value += 'Div:\n'
    for (arrValues of values) {
        if (!arrValues[1]) arrValues[1] = 1

        if (a1z26) {
            decodedData.value += `${String.fromCharCode(96 + (arrValues.reduce((a, b) => a / b)).toFixed(0))}\n`
            arrJoin.push(`${String.fromCharCode(96 + (arrValues.reduce((a, b) => a / b)).toFixed(0))}`)
        } else {
            decodedData.value += `${arrValues.reduce((a, b) => a / b, 0)}\n`
            arrJoin.push(`${arrValues.reduce((a, b) => a / b)} `)
        }
    }
    decodedData.value += `\n${arrJoin.join('')}\n\n`
}

function reDiv(values, a1z26) {
    var arrJoin = []

    decodedData.value += 'ReDiv:\n'
    for (arrValues of values) {
        if (!arrValues[1]) arrValues[1] = 1

        if (a1z26) {
            decodedData.value += `${String.fromCharCode(96 + (arrValues.reduce((a, b) => b / a)).toFixed(0))}\n`
            arrJoin.push(`${String.fromCharCode(96 + (arrValues.reduce((a, b) => b / a)).toFixed(0))}`)
        } else {
            decodedData.value += `${arrValues.reduce((a, b) => b / a)}\n`
            arrJoin.push(`${arrValues.reduce((a, b) => b / a)} `)
        }
    }
    decodedData.value += `\n${arrJoin.join('')}\n\n`
}

function pow(values, a1z26) {
    var arrJoin = []

    decodedData.value += 'Pow:\n'
    for (arrValues of values) {
        if (!arrValues[1]) arrValues[1] = 1

        if (a1z26) {
            decodedData.value += `${String.fromCharCode(96 + (arrValues.reduce((a, b) => a ** b)))}\n`
            arrJoin.push(`${String.fromCharCode(96 + (arrValues.reduce((a, b) => a ** b)))}`)
        } else {
            decodedData.value += `${arrValues.reduce((a, b) => a ** b)}\n`
            arrJoin.push(`${arrValues.reduce((a, b) => a ** b)} `)
        }
    }
    decodedData.value += `\n${arrJoin.join('')}\n\n`
}

function rePow(values, a1z26) {
    var arrJoin = []

    decodedData.value += 'RePow:\n'
    for (arrValues of values) {
        if (!arrValues[1]) arrValues[1] = 1

        if (a1z26) {
            decodedData.value += `${String.fromCharCode(96 + (arrValues.reduce((a, b) => b ** a)))}\n`
            arrJoin.push(`${String.fromCharCode(96 + (arrValues.reduce((a, b) => b ** a)))}`)
        } else {
            decodedData.value += `${arrValues.reduce((a, b) => b ** a)}\n`
            arrJoin.push(`${arrValues.reduce((a, b) => b ** a)} `)
        }
    }
    decodedData.value += `\n${arrJoin.join('')}\n\n`
}

function square(values, a1z26) {
    var arrJoin = []

    decodedData.value += 'Square:\n'
    for (arrValues of values) {
        if (!arrValues[1]) arrValues[1] = 1

        if (a1z26) {
            decodedData.value += `${String.fromCharCode(96 + (arrValues.reduce((a, b) => (a + b) ** 2)))}\n`
            arrJoin.push(`${String.fromCharCode(96 + (arrValues.reduce((a, b) => (a + b) ** 2)))}`)
        } else {
            decodedData.value += `${arrValues.reduce((a, b) => (a + b) ** 2)}\n`
            arrJoin.push(`${arrValues.reduce((a, b) => (a + b) ** 2)} `)
        }
    }
    decodedData.value += `\n${arrJoin.join('')}\n\n`
}

function squareRoot(values, a1z26) {
    var arrJoin = []

    decodedData.value += 'SquareRoot:\n'
    for (arrValues of values) {
        if (!arrValues[1]) arrValues[1] = 1

        if (a1z26) {
            decodedData.value += `${String.fromCharCode(96 + (arrValues.reduce((a, b) => Math.sqrt(a + b))).toFixed(0))}\n`
            arrJoin.push(`${String.fromCharCode(96 + (arrValues.reduce((a, b) => Math.sqrt(a + b))).toFixed(0))}`)
        } else {
            decodedData.value += `${arrValues.reduce((a, b) => Math.sqrt(a + b))}\n`
            arrJoin.push(`${arrValues.reduce((a, b) => Math.sqrt(a + b))} `)
        }
    }
    decodedData.value += `\n${arrJoin.join('')}\n\n`
}

function squareRootMul(values, a1z26) {
    var arrJoin = []

    decodedData.value += 'SquareRootMul:\n'
    for (arrValues of values) {
        if (!arrValues[1]) arrValues[1] = 1

        if (a1z26) {
            decodedData.value += `${String.fromCharCode(96 + (arrValues.reduce((a, b) => Math.sqrt(a * b))).toFixed(0))}\n`
            arrJoin.push(`${String.fromCharCode(96 + (arrValues.reduce((a, b) => Math.sqrt(a * b))).toFixed(0))}`)
        } else {
            decodedData.value += `${arrValues.reduce((a, b) => Math.sqrt(a * b))}\n`
            arrJoin.push(`${arrValues.reduce((a, b) => Math.sqrt(a * b))} `)
        }
    }
    decodedData.value += `\n${arrJoin.join('')}\n\n`
}