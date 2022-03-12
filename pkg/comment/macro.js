module.exports = async ({ github, context, comment }) => {
  console.log(`Input comment : ${comment.body}`);
  console.log(`Issue number : ${context.payload.issue.number}`);

  switch (comment.body) {
    case "/approve":
      await github.rest.pulls.merge({
        owner: context.repo.owner,
        repo: context.repo.repo,
        pull_number: context.payload.issue.number,
      });
      break;
    default:
      console.error("Command is not matched.");
      process.exit(1);
  }
};
