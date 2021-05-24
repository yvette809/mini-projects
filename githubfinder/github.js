// class Github {
//   constructor() {
//     this.client_id = "dc3372db4b03a6d663ee";
//     this.client_secret = " 54eb6a8aa80e25c40b4ed8db1a77a4bf6186ef08";
//   }

//   async getUser(user) {
//     const profileResponse = await fetch(
//       `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
//     );

//     const profileData = await profileResponse.json()
//     return{
//         profile:profileData
//     }
//   }
// }

class Github {
    constructor() {
        this.client_id = "dc3372db4b03a6d663ee";
        this.client_secret = " 54eb6a8aa80e25c40b4ed8db1a77a4bf6186ef08";
        this.repos_count = 5;
        this.repos_sort = 'created:asc'
    }

    async getUser(user) {
        const profileResponse = await fetch(
            `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
        );

        const reposResponse = await fetch(
            `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
        );
        const profileData = await profileResponse.json()
        const repos = await reposResponse.json()
        return {
            profile: profileData,
            repos
        }
    }
}

