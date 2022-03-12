module.exports = async ({ github, context, issueNumber }) => {
  console.log(`Input Command : ${issueNumber}`);

  switch (res.data.body) {
    case "/approve":
      await github.rest.pulls.merge({
        owner: context.repo.owner,
        repo: context.repo.repo,
        pull_number: issueNumber,
      });
      break;
    default:
      console.log("Command is not matched.");
      process.exit(1);
  }
};
