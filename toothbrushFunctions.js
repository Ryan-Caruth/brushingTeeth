function checkIfNeedToothbrush(needToothbrush) {
  console.log("Do I need a toothbrush?", needToothbrush);
  if (needToothbrush) {
    console.log("Get toothbrush from store");
  }
}

function toothpasteOnToothbrush() {
  console.log("Put toothpaste on toothbrush");
}

function brushTeeth() {
  console.log("Begin brushing teeth");
}

function spitInSink() {
  console.log("Spit toothpaste in sink");
}

function rinseWithWater() {
  console.log("Rinse mouth with water");
}

const toothbrushFunctions = { checkIfNeedToothbrush, toothpasteOnToothbrush, brushTeeth, spitInSink, rinseWithWater };

module.exports = toothbrushFunctions;