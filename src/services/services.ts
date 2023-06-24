import octokit from "./index";

const getRepoByNameService = (repoName:string) => octokit.request(`GET /search/repositories?q=${repoName}`);

const githubApi = {
    getRepoByNameService
}
export default githubApi;