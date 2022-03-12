module.exports = ({ github, context }) => {
  github.rest.pulls.merge({
    owner: context.repo.owner,
    repo: context.repo.repo,
    pull_number: context.payload.issue.number,
  });
};
