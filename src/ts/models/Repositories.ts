export interface IRepositories {
    id: string;
    name: string;
    description: string;
    owner: {
        html_url: string;
    }
    git_url: string;
}