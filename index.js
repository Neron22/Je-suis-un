const target = document.getElementById("target");
let array = ["développeur", "photographe", "créatif"];
let wordIndex = 0;
let letterIndex = 0;

const createLetter = () => {
  const letter = document.createElement("span");
  target.appendChild(letter);

  letter.textContent = array[wordIndex][letterIndex];

  setTimeout(() => {
    letter.remove();
  }, 2800);
};

const loop = () => {
  setTimeout(() => {
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
    } else if (letterIndex < array[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
    } else {
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        loop();
      }, 2800);
    }
  }, 80);
};
loop();
// let array = ["Bordeaux", "Toulouse", "Nantes"];
// // console.log(array[0][3]);

// let array2 = ["Bordeaux", 24, true, [1, 2], { nom: "Denis" }];

// // console.log(array2[4].nom);

// let objet = {
//   pseudo: "Denis",
//   age: 33,
//   technos: ["JavaScript", "React", "NodeJs"],
//   admin: false,
// };

// // objet.adresse = "22 rue du code";
// // console.log(objet);

// let data = [
//   {
//     pseudo: "Denis",
//     age: 33,
//     technos: ["JavaScript", "React", "NodeJs"],
//     admin: false,
//   },
//   {
//     pseudo: "Samia",
//     age: 24,
//     technos: ["CSS", "React", "NodeJs"],
//     admin: false,
//   },
//   {
//     pseudo: "Nikola",
//     age: 42,
//     technos: ["PHP", "React", "NodeJs"],
//     admin: true,
//   },
// ];

// // console.log(data[2].pseudo);

// //------------------------------
// // les structures de controle
// //------------------------------

// // if (data[0].age > data[1].age) {
// //   console.log(data[0].pseudo + " est plus vieux que " + data[1].pseudo + ".");
// // } else {
// //   console.log(data[1].pseudo + " est plus vieux que " + data[0].pseudo + ".");
// // }

// // valeur à tester ? si vrai tu fais ça : si faux tu fais ça
// // data[0].age > data[1].age
// //   ? console.log(data[0].pseudo + " est plus vieux que " + data[1].pseudo + ".")
// //   : console.log(data[1].pseudo + " est plus vieux que " + data[0].pseudo + ".");

// // while
// let w = 0;

// while (w < 10) {
//   w++;
//   // console.log("la valeur de w est de : " + w);
// }

// // les boucles for

// for (const user of data) {
//   //   document.body.innerHTML += `<li>${user.pseudo} - ${user.age} ans</li>`;
// }

// // on déclare la valeur de i ; jusqu'où on boucle ; on incrèmente i si la condition 2 n'est pas remplie
// for (i = 0; i < data.length; i++) {
//   // console.log(data[i].technos[0]);
//   // document.body.innerHTML += "<h2>" + data[i].technos.join(" / ") + "</h2";
// }
// //------------------------------
// // Switch
// //------------------------------

// document.body.addEventListener("click", (e) => {
//   switch (e.target.id) {
//     case "javascript":
//       document.body.style.background = "yellow";
//       break;
//     case "python":
//       document.body.style.background = "purple";
//       break;
//     case "php":
//       document.body.style.background = "blue";
//       break;
//     default:
//       null;
//   }
// });
