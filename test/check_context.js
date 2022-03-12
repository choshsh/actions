module.exports = ({ github, context, core }) => {
  console.log(`Print env & context\n`);

  console.log("context");
  console.log(context);

  console.log("github");
  console.log(github);

  console.log("github.repo");
  console.log(github.repo);

  console.log("core");
  console.log(core);
};
