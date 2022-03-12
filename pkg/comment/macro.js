module.exports = async ({ github, context, comment }) => {
  switch (comment.body) {
    case "/approve":
      console.log(`Input comment : ${comment.body}`);
      console.log(`PR number : ${context.payload.issue.number}`);
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
