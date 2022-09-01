class GithubView {
  constructor(model, api) {
    this.model = model;
    this.api = api;

    const submitButtonEl = document.querySelector('#submit-button');
    const repoInputEl = document.querySelector('#repo-name-input');


    submitButtonEl.addEventListener('click', () => {
      const repoName = repoInputEl.value;

      this.api.getRepoInfo(repoName, (repoData) => this.display(repoData));
    });
  }

  display(repoData) {
    document.querySelector('#repo-name').textContent = repoData.full_name
    document.querySelector('#repo-description').textContent = repoData.description
    document.querySelector('#repo-avatar').src = repoData.organization.avatar_url
  }
}

module.exports = GithubView;