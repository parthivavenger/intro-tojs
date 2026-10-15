// fetch("https://api.github.com/users/parthivavenger")
// .then(() => console.log("10: Food is ready! (response came back"));

fetch("github.json")
    .then(response => {
        console.log("10: Food is ready! (response came back)");
        return response;
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        console.log(data.name)
        console.log(data.email)
        console.log(data.age)
    })
     
console.log("1: ordering Food...")
console.log("2: while waiting, do other things......")
console.log("3: while waiting, do other things......")
console.log("4: while waiting, do other things......")
console.log("5: while waiting, do other things......")
console.log("6: while waiting, do other things......")
console.log("7: while waiting, do other things......")
console.log("8: while waiting, do other things......")
console.log("9: while waiting, do other things......")

async function fetchData() {
    // execution pauses here until the promise resolves
    const response = await fetch ("https://api.github.com/users/parthivavenger")
    // execution pauses here until the JSON is parsed
    const data = await response.json();
    console.log(data);
}

fetchData();



async function fetchGitHubUserProfile(name) {
    const response = await fetch(`https://api.github.com/users/${name}`);
    const user = await response.json();
    console.log(user)
    renderGithubCard(user)
}

fetchGitHubUserProfile("parthivavenger");

function renderGithubCard(user) {
    const container = document.querySelector("#githubCard")
    container.innerHTML = `
    <div class="abcd">
    <div class="github-Card">
    <img src="${user.avatar_url}" alt="my github profile image" class="github-avatar">
    </div>
    <h3>${user.name ? user.name : user.login}</h3>
   
    <div class="abc">
    <p>repos:${user.public_repos}</p>
    <p>Followers:${user.followers}</p>
    <p>Following:${user.following}</p>
    </div>
    <a href="https://github.com/parthivavenger" target="_blank" > view on Github</a>
  
    </div>
    `
}

async function fetchGithubUserProfile(name) {
  try {
    const response = await fetch(`https://api.github.com/users/${name}`);
    if (!response.ok) {
      throw new error("Git user not found.");
    }
    const user = await response.json();
    console.log(user)
    renderGithubCard(user);
  } catch (error) {
    console.error("Could not load GitHub activity.");
    const container = document.querySelector("#githubCard");
    container.innerHTML = `<p>Could not load GitHub right now.</p>`;
  }
}

fetchGithubUserProfile("Tej")