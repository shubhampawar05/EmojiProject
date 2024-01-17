function filterEmoji() {
  let input = document.getElementById("emoji").value;
  displayEmoji(input);
}

function displayEmoji(searchQuery = "") {
  let filteredData = emojiList.filter((e) => {
    if (e.description.indexOf(searchQuery) != -1) {
      return true;
    }
    if (e.tags.some((ele) => ele.startsWith(searchQuery))) {
      return true;
    }
    if (e.aliases.some((ele) => ele.startsWith(searchQuery))) {
      return true;
    }
  });


  let tbody = document.getElementById("tabelData");
 

//   is line lo kyo likha hai kyoki already jo phle se pura data UI pr hai uso remoe kr rhe hai 
  tbody.innerHTML= "";

  filteredData.forEach((single) => {
    // creating single row and 3 td
    let new_row = document.createElement("div");
    let new_emoji = document.createElement("p");
    let new_alice = document.createElement("p");
    let new_disc = document.createElement("p");

    // filling this td with values form emojilist data list
    new_emoji.innerText = single.emoji;
    new_alice.innerText = single.aliases;
    new_disc.innerText = single.description;

    new_row.classList.add("emojibox");
    new_emoji.classList.add("emojiline");
    new_alice.classList.add("aliceline");
    new_disc.classList.add("discline");
    new_row.append(new_emoji,new_alice,new_disc);
    tbody.appendChild(new_row);
  });
}

let inputValue = document.getElementById("emoji");
inputValue.addEventListener("keyup", filterEmoji);

window.onload = () => displayEmoji();
