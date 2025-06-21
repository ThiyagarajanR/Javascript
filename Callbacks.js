function sayHello(name, callback) {
  console.log("Hello, " + name);
  debugger;
  callback();
}
debugger;
sayHello("Thiyagarajan", () => {
  console.log("Callback executed!");
});
