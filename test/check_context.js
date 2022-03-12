module.exports = ({ github, context, core }) => {
  const { SHA } = process.env;

  console.log(`Print env & context\n`);
  console.log(`env : ${SHA}`);
  console.log(`context : ${context}`);
  console.log(`github : ${github}`);
  console.log(`core : ${core}`);
};
