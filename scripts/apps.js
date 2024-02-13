import {saveToLocalStorage, getLocalStorage, removeFromLocalStorage } from "./localStorage.js";

// let names = localStorage.getItem('names') ? JSON.parse(localStorage.getItem('names')) : [];

const slider = document.getElementById("myRange");
const output = document.getElementById("demo");
output.innerHTML = slider.value;
slider.oninput = function() {
  output.innerHTML = this.value;
}

let RemoveId = document.getElementById("RemoveId")
let NameInput = document.getElementById("NameInput")
let NameDiv = document.getElementById("NameDiv")
let TotalNames = document.getElementById("TotalNames")
let GroupsGeneratorDiv = document.getElementById("GroupsGeneratorDiv")
let GetRandomGroupBtn = document.getElementById("GetRandomGroupBtn")
let ButtonAddMe = document.getElementById("ButtonAddMe")
let result = document.getElementById("result")

// function NameGenerator () {
//     GroupsGeneratorDiv.innerText = '';
//     names.forEach((name, index) => {
//         const li = document.createElement('p');
//         li.textContent = name;
//         const deleteButton = document.createElement('button');
//         deleteButton.textContent = 'Delete';
//         RemoveId.addEventListener('click', () => {
//           names.splice(index, 1);
//         //   localStorage.setItem('names', JSON.stringify(names));
//           saveToLocalStorage(names);
//           NameGenerator();
//         });
//         li.appendChild(RemoveId);
//         nameList.appendChild(li);
//       });
//     }


ButtonAddMe.addEventListener("click", () => {
        saveToLocalStorage(NameInput.value);
        Display();
});

function Display() {
    let favorites = getLocalStorage();
        console.log(favorites);
        NameDiv.textContent = "";

        favorites.map((NameInput) => {
        let p = document.createElement("p");
        p.textContent = NameInput;
        p.className = "text-lg font-medium text-gray-900 dark:text-white";

        let button = document.createElement("button");

        button.type = "button";
        button.textContent = "remove";
        button.classList.add(
            "btn",
            "btn-danger",
          );
          button.addEventListener("click", () => {
            removeFromLocalStorage(NameInput);
            p.remove();
          });
          p.append(button);
          NameDiv.append(p);
        })
}








// // Second code
// let names = localStorage.getItem('names') ? JSON.parse(localStorage.getItem('names')) : [];

//     const nameForm = document.getElementById('nameForm');
//     const nameInput = document.getElementById('nameInput');
//     const nameList = document.getElementById('nameList');
//     const randomizeButton = document.getElementById('randomizeButton');
//     const resultDiv = document.getElementById('result');

//     // Function to render names
//     function renderNames() {
//       nameList.innerHTML = '';
//       names.forEach((name, index) => {
//         const li = document.createElement('li');
//         li.textContent = name;
//         const deleteButton = document.createElement('button');
//         deleteButton.textContent = 'Delete';
//         deleteButton.addEventListener('click', () => {
//           names.splice(index, 1);
//           localStorage.setItem('names', JSON.stringify(names));
//           renderNames();
//         });
//         li.appendChild(deleteButton);
//         nameList.appendChild(li);
//       });
//     }

//     // Add name event listener
//     nameForm.addEventListener('submit', function(event) {
//       event.preventDefault();
//       const newName = nameInput.value.trim();
//       if (newName !== '') {
//         names.push(newName);
//         localStorage.setItem('names', JSON.stringify(names));
//         renderNames();
//         nameInput.value = '';
//       }
//     });

//     // Randomize button event listener
//     randomizeButton.addEventListener('click', function() {
//       const numberOfGroups = parseInt(prompt("How many groups do you want?"));
//       const peoplePerGroup = parseInt(prompt("How many people per group?"));

//       const totalPeople = names.length;
//       const totalGroups = Math.ceil(totalPeople / peoplePerGroup);

//       if (totalPeople < numberOfGroups * peoplePerGroup) {
//         alert("There are not enough people for this grouping!");
//         return;
//       }

//       let shuffledNames = [...names];
//       shuffledNames.sort(() => Math.random() - 0.5);

//       const groups = [];
//       let currentGroup = [];

//       shuffledNames.forEach(name => {
//         currentGroup.push(name);
//         if (currentGroup.length === peoplePerGroup) {
//           groups.push(currentGroup);
//           currentGroup = [];
//         }
//       });

//       while (currentGroup.length > 0) {
//         const lastGroupIndex = groups.length - 1;
//         if (groups[lastGroupIndex].length + currentGroup.length === peoplePerGroup) {
//           groups[lastGroupIndex] = groups[lastGroupIndex].concat(currentGroup);
//           currentGroup = [];
//         } else {
//           currentGroup.push(groups[lastGroupIndex].pop());
//         }
//       }

//       resultDiv.innerHTML = '';
//       groups.forEach((group, index) => {
//         const groupDiv = document.createElement('div');
//         groupDiv.innerHTML = `<strong>Group ${index + 1}:</strong> ${group.join(', ')}`;
//         resultDiv.appendChild(groupDiv);
//       });
//     });

//     // Initial render
//     renderNames();