import posts from "./posts.js";

// change title
document.title = "Oldagram";

//create nav element | add class nav | add append to document
let navEl = document.createElement("nav");
navEl.setAttribute("class", "nav");
document.body.append(navEl);

//create section element | add class section | add append to document
let section = document.createElement("section");
section.setAttribute("class", "section");

function addNav() {
  // Create the logo image element
  const logo = document.createElement("img");
  logo.setAttribute("class", "logo");
  logo.setAttribute("src", "./images/logo.png");
  logo.setAttribute("alt", "oldagram logo.");

  // Create the avatar image element
  const avatar = document.createElement("img");
  avatar.setAttribute("class", "avatar");
  avatar.setAttribute(
    "src",
    "https://www.jorgebasilio.tech/assets/pic2-568f14cd.jpeg"
  );
  avatar.setAttribute("alt", "ai art of Jorge");

  // Append image elements to navEl
  navEl.append(logo);
  navEl.append(avatar);
}

function renderPost() {
  //create a main container that will hold all post
  let mainContainer = document.createElement("div");
  mainContainer.setAttribute("class", "mainContainer");

  //loop through all post and add to main container
  for (let i = 0; i < posts.length; i++) {
    mainContainer.innerHTML += `
    <section>
        <header>
            <img src="/${posts[i].avatar}" alt="avatar of user" class="avatar"/>
            <div class="containerHeader">
                <h2>${posts[i].name}</h2>
                <h3>${posts[i].location}</h3>
            </div>
        </header>
        <main>
            <img src="/${posts[i].post}" alt="portrait of ${posts[i].name}" class="postIMG"/>
        </main>
        <footer>
            <div class="emoji">
                <img src="/images/icon-heart.png" alt="heart icon" id="heart" data-index="${i}"/>
                <img src="/images/icon-comment.png" alt="message icon"/>
                <img src="/images/icon-dm.png" alt="dm icon"/>
            </div>
            <h2 class="likes" id="likes-${i}">${posts[i].likes} likes</h2>
            <h2 class="username">${posts[i].username}<span class="message">${posts[i].comment}</span></h2>
        </footer>
    </section>
    `;
  }

  //add main container to body
  document.body.append(mainContainer);
}

function likePost() {
  // Select all heart icons
  let heartIcons = document.querySelectorAll("#heart");

  heartIcons.forEach((heartIcon) => {
    heartIcon.addEventListener("dblclick", function () {
      // Get the index from the data attribute
      const postIndex = heartIcon.getAttribute("data-index");

      // Increment the likes in the posts array
      posts[postIndex].likes++;

      console.log(posts[postIndex].likes);

      // Update the likes in the DOM
      let likesElement = document.getElementById(`likes-${postIndex}`);
      likesElement.textContent = `${posts[postIndex].likes} likes`;
    });
  });
}

addNav();
renderPost();
likePost();
