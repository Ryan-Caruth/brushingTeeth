function checkIfNeedToFinishBreakfast(needBreakfast) {
  console.log("Do I need breakfast?", needBreakfast);
  if (needBreakfast) {
    console.log("Finish breakfast");
  }
}


//Expoting breakfast function to brushingTeethFunctions
const breakfastFunctions = { checkIfNeedToFinishBreakfast };

module.exports = breakfastFunctions;
 