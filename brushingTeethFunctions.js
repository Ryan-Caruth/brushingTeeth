// const breakfastFunctions = require("./breakfastFunctions");
// //Need to create a variable to be able to call the object
// const checkIfNeedToFinishBreakfast = breakfastFunctions.checkIfNeedToFinishBreakfast
// //Time to condense into line be creating a variables that is using the object in breakfastFunctions.js

const { checkIfNeedToFinishBreakfast } = require("./breakfastFunctions");
const { checkIfNeedToothbrush, toothpasteOnToothbrush, brushTeeth, spitInSink, rinseWithWater } = require("./toothbrushFunctions");

function startProcess() {
  console.log("Start Process");
}

function walkDownstairs() {
  console.log("Walk downstairs");
}

function endProcess() {
  console.log("End Process");
}

function brushTeethProcess(needBreakfast, needToothbrush) {
  startProcess();
  checkIfNeedToFinishBreakfast(needBreakfast);
  walkDownstairs();
  checkIfNeedToothbrush(needToothbrush);
  toothpasteOnToothbrush();
  brushTeeth();
  spitInSink();
  rinseWithWater();
  endProcess();
}

console.log("\n");
console.log(
  "I require no breakfast and I need to get a toothbrush from the store"
);
console.log("\n");
brushTeethProcess(false, true);
console.log("\n");
console.log("I require breakfast and I already have a toothbrush");
console.log("\n");
brushTeethProcess(true, false);
console.log("\n");
console.log("I require no breakfast and I already have a toothbrush");
console.log("\n");
brushTeethProcess(false, false);
console.log("\n");
console.log("I requre breakfast and I need to get a toothbrush");
console.log("\n");
brushTeethProcess(true, true);
