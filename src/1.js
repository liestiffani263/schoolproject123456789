const generateRandomJsCode = () => {
  const code = `
    // A simple school project
    const name = prompt('What is your name?');
    console.log('Hello, ' + name + '!');
  `;
  return code;
};

console.log(generateRandomJsCode());
