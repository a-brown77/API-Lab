fetch("https://www.reddit.com/r/aww/.json")
  .then((response) => response.json())
  .then((response) => {
    let children = response.data.children;
    console.log(children);
    for (let i = 0; i < children.length; i++) {
      //create div, add to DOM
      let postContainer = document.createElement("div");
      document.querySelector("body").appendChild(postContainer);

      //create header, add to div
      let title = document.createElement("h2");
      title.innerText = children[i].data.title;
      postContainer.appendChild(title);

      //create image, add to div
      let image = document.createElement("img");
      image.src = children[i].data.thumbnail;
      postContainer.appendChild(image);

      //create author, add to div
      let author = document.createElement("p");
      author.innerText = `Posted By: ${children[i].data.author}`;
      postContainer.appendChild(author);

      //create link, add to div
      let link = document.createElement("a");
      link.href = `https://www.reddit.com${children[i].data.permalink}`;
      link.target = "_blank";
      link.innerText = "Visit post here";
      postContainer.appendChild(link);
    }
  });
