var numbers = document.getElementById('numbers')
var output = document.getElementById('output')
var buttons = document.getElementsByClassName('btn')
var value_1 = ""
var value_2 = ''
var res
var operation

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        value_1 += buttons[i].innerHTML
        output.value = value_1
    })
}

document.getElementById('sum').onclick = function(){
    value_2 = value_1
    value_1 = ''
    output.value = 0
    operation = "+"

}
document.getElementById('subtraction').onclick = function(){
    value_2 = value_1
    value_1 = ''
    output.value = 0
    operation = "-"
}
document.getElementById('multiplication').onclick = function(){
    value_2 = value_1
    value_1 = ''
    output.value = 0
    operation = "*"
}
document.getElementById('division').onclick = function(){
    value_2 = value_1
    value_1 = ''
    output.value = 0
    operation = "/"
}
document.getElementById("clear").onclick = function(){
    value_1 = 0
    value_2 = 0
    output.value = ''
}

var func = document.getElementById('result').onclick = function(){
    if(operation == "+"){
        res = Number(value_2) + Number(value_1)
        output.value = res
        value_1 = res
        value_2 = ''
        temp = 0
    }
    if(operation == "-"){
        
        res = Number(value_2) - Number(value_1)
        output.value = res
        value_1 = res
        value_2 = ''
        temp = 0
    }
    if(operation == "*"){
        res = Number(value_2) * Number(value_1)
        output.value = res
        value_1 = res
        value_2 = ''
    }
    if(operation == "/"){
        res = Number(value_2) / Number(value_1)
        output.value = res
        value_1 = res
        value_2 = ''
    }
}