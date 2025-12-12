const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function runTest() {
  console.log("test running");
  await delay(3000);
  console.log("test completed");
}

runTest();
