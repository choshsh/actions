module.exports = async ({ github, context, exec, inputs }) => {
  const head = inputs.head;
  const base = inputs.base;
  const title = context.payload.head_commit.message;
  const body = "Created by DevOps bot.";

  console.log(`Create PR : ${inputs.head} -> ${inputs.base}`);

  await exec.exec(
    `gh pr create --head "${head}" --base "${base}" --title "${title}" --body "${body}" --label "ci"`
  );
};
