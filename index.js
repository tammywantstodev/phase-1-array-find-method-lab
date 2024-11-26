// code your solution here
// code your solution here
//function should return year of W
//return undefined if nonne
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    //...
]
function superbowlWin(arr){
    for(const win of arr){
       if( win.result==="W"){
           return win.year
       }
    }
    return undefined
}
