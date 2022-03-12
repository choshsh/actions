module.exports = ({ github, context }) => {
  github.rest.pulls.create({
    title: context.payload.head_commit.message,
    owner: context.repo.owner,
    repo: context.repo.repo,
    head: "${{ inputs.head }}",
    base: "${{ inputs.base }}",
    body: "Created by DevOps bot.",
  });
};
