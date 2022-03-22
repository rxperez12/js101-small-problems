function logInBox(string) {
  let strLength = string.length;
  console.log(`+-${"-".repeat(strLength)}-+`);
  console.log(`| ${" ".repeat(strLength)} |`);
  console.log(`| ${string} |`);
  console.log(`| ${" ".repeat(strLength)} |`);
  console.log(`+-${"-".repeat(strLength)}-+`);
}

logInBox("To boldly go where no one has gone before.");
logInBox("One small step for man, one giant leap for mankind");
