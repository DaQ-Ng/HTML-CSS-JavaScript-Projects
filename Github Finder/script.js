const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("search-btn");
const profileContainer = document.getElementById("profile-container");
const errorContainer = document.getElementById("error-container");
const avatar = document.getElementById("avatar");
const nameElement = document.getElementById("name");
const usernameElement = document.getElementById("username");
const bioElement = document.getElementById("bio");
const locationElement = document.getElementById("location");
const joinedDateElement = document.getElementById("joined-date");
const profileLink = document.getElementById("profile-link");
const followers = document.getElementById("followers");
const following = document.getElementById("following");
const repos = document.getElementById("repos");
const companyElement = document.getElementById("company");
const blogElement = document.getElementById("blog");
const twitterElement = document.getElementById("twitter");
const companyContainer = document.getElementById("company-container");
const blogContainer = document.getElementById("blog-container");
const twitterContainer = document.getElementById("twitter-container");
const reposContainer = document.getElementById("repos-container");

searchBtn.addEventListener("click", searchUser);
searchInput.addEventListener("keypress", (e) => {
  if (e.key == "Enter") searchUser();
});

async function searchUser() {
  const username = searchInput.value.trim();

  if (!username) return alert("Please enter a username");

  try {
    //reset the ui
    profileContainer.classList.add("hidden");
    errorContainer.classList.add("hidden");
    //https://api.github.com/users/DaQ-Ng
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
      throw new Error("User not found");
    }

    const userData = await response.json();
    console.log("user data is here", userData);

    displayUserData(userData);
  } catch (error) {
    console.log(error);
    showError();
  }
}

function displayUserData(user) {
  avatar.src = user.avatar_url;
  nameElement.textContent = user.name || user.login;
  usernameElement.textContent = `@${user.login}`;
  bioElement.textContent = user.bio || "No bio available";

  locationElement.textContent = user.location || "Not specified";
  //todo: format the date
  joinedDateElement.textContent = user.created_at;

  profileLink.href = user.html_url;
  followers.textContent = user.followers;
  following.textContent = user.following;
  repos.textContent = user.public_repos;

  if (user.company) {
    companyElement.textContent = user.company;
  } else companyElement.textContent = "Not specified";

  //Notice blogElement.href it's using dot notation to create new attribute
  if (user.blog) {
    blogElement.textContent = user.blog;
    blogElement.href = user.blog.startsWith("http") //if blog start with http
      ? user.blog // if true
      : `https://${user.blog}`; // else add https
  } else {
    blogElement.textContent = "No website";
    blogElement.href = "#";
  }
}

function showError() {
  errorContainer.classList.remove("hidden");
  profileContainer.classList.add("hidden");
}

searchInput.value = "DaQ-Ng";
searchUser();
