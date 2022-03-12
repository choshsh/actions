module.exports = ({ github, context, core }) => {
  const { SHA } = process.env;

  console.log(`Print env & context\n`);

  console.log("SHA");
  console.log(SHA);

  console.log("context");
  console.log(context);

  console.log("github");
  console.log(github);

  console.log("core");
  console.log(core);
};
