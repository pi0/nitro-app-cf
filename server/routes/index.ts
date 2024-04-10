import { AsyncLocalStorage } from "node:async_hooks";

export default eventHandler((event) => {
  return testAls();
});

async function testAls() {
  return new Promise((resolve) => {
    try {
      const ctx = new AsyncLocalStorage();
      const rand = Math.random();
      ctx.run(rand, async () => {
        await new Promise((resolve) => {
          setTimeout(resolve, 100);
        });
        if (ctx.getStore() !== rand) {
          throw new Error("AsyncLocalStorage not working");
        }
        resolve("AsyncLocalStorage works!");
      });
    } catch (error) {
      resolve(`Error: ${error}`);
    }
  });
}
