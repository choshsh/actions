module.exports = async ({ github, context, exec, inputs }) => {
  // github.rest.pulls.create({
  //   title: context.payload.head_commit.message,
  //   owner: context.repo.owner,
  //   repo: context.repo.repo,
  //   head: "${{ inputs.head }}",
  //   base: "${{ inputs.base }}",
  //   body: "Created by DevOps bot.",
  // });
  console.log(context);
  console.log(inputs);
  const head = inputs.head;
  const base = inputs.base;
  const title = context.payload.head_commit.message;
  const body = "Created by DevOps bot.";
  const owner = context.repo.owner;
  const repo = context.repo.repo;

  await exec.exec(`pwd`);
  await exec.exec(`ls -al`);

  await exec.exec(
    `gh pr create --head "${head}" --base "${base}" --title "${title}" --body "${body}" --label "ci"`
  );
};
