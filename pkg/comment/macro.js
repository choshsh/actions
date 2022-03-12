module.exports = async ({ github, context, comment }) => {
  console.log(`Input Comment : ${comment.body}`);
  console.log(comment);
  console.log(context.payload.issue.number);

  switch (comment.body) {
    case "/approve":
      await github.rest.pulls.merge({
        owner: context.repo.owner,
        repo: context.repo.repo,
        pull_number: context.payload.issue.number,
      });
      break;
    default:
      console.log("Command is not matched.");
      process.exit(1);
  }
};
