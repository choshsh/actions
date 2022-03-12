module.exports = async ({ github, context }) => {
  const res = await github.rest.issues.getComment({
    owner: context.repo.owner,
    repo: context.repo.repo,
    comment_id: context.payload.comment.id,
  });

  return res.data;
};
