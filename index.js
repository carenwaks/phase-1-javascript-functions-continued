// code your solution here
function saturdayFun(activity= 'roller-skate') {
    return (`This Saturday, I want to ${activity}!`)
}
saturdayFun();

const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`;
};
mondayWork();

function wrapAdjective(params) {
        
}

function wrapAdjective(result= "*") {
    return function(emphatic = "special") {
      return `You are ${result}${emphatic}${result}!`;
    };
  }
console.log(wrapAdjective("%")("a dedicated programmer"));