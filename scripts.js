const space = document.getElementById("output")

function input(i){
    if(i == 'c'){
        space.value = ''
    }else{
    space.value = space.value + i
     
    }
}
function result(){
    if( space.value == Infinity){
        space.value = 0
    }
    space.value = eval(space.value)
}
