// code your solution here
// Function Declaration
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Function Expression
  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  // Closure / Function Returning Function
  function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  // Example calls (for testing purposes)
  console.log(saturdayFun()); // "This Saturday, I want to roller-skate!"
  console.log(saturdayFun("hike")); // "This Saturday, I want to hike!"
  
  console.log(mondayWork()); // "This Monday, I will go to the office."
  console.log(mondayWork("work from home")); // "This Monday, I will work from home."
  
  const encouragingPrompt = wrapAdjective("!!!");
  console.log(encouragingPrompt("a dedicated coder")); // "You are !!!a dedicated coder!!!"
  
  const result = wrapAdjective("%")("a genius");
  console.log(result); // "You are %a genius%"

module.exports = {
    saturdayFun,
    mondayWork,
    wrapAdjective
};
  