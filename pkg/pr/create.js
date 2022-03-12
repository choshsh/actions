module.exports = ({ github, context }) => {
  // github.rest.pulls.create({
  //   title: context.payload.head_commit.message,
  //   owner: context.repo.owner,
  //   repo: context.repo.repo,
  //   head: "${{ inputs.head }}",
  //   base: "${{ inputs.base }}",
  //   body: "Created by DevOps bot.",
  // });
  const head = "${{ inputs.head }}";
  const base = "${{ inputs.base }}";
  const title = context.payload.head_commit.message;
  const body = "Created by DevOps bot.";
  const owner = context.repo.owner;
  const repo = context.repo.repo;

  await exec.exec(
    `gh pr create --head ${head} --base ${base} --title ${title} --body ${body} --owner ${owner} --repo ${repo}`
  );
};
