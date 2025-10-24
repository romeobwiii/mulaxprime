// js/main.js

const username = "romeobwiii";
const repo = "https://github.com/romeobwiii"; // Replace with your actual repo name

async function fetchGitHubStats() {
  const url = `https://github.com/romeobwiii/MULAA-XMD`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("GitHub API error");

    const data = await response.json();

    const statsHTML = `
      <div class="stat-box">
        <h3>${data.stargazers_count}</h3>
        <p>Stars</p>
      </div>
      <div class="stat-box">
        <h3>${data.forks_count}</h3>
        <p>Forks</p>
      </div>
      <div class="stat-box">
        <h3>${data.watchers_count}</h3>
        <p>Watchers</p>
      </div>
      <div class="stat-box">
        <h3>${data.open_issues_count}</h3>
        <p>Issues</p>
      </div>
    `;

    document.getElementById("githubStats").innerHTML = statsHTML;
  } catch (error) {
    console.error("Error fetching GitHub stats:", error);
    document.getElementById("githubStats").innerHTML = `
      <p style="color: red;">Unable to load GitHub stats. Check your repo name.</p>
    `;
  }
}

fetchGitHubStats();
