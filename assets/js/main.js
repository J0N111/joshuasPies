function addIng(ingredSel) {
   counter++;
   const obIng = document.createElement("div");
   //let clasNumAdder = counter.toString();
   let classNum = "ingred" + ingredSel;
   obIng.className = classNum;
   obIng.id = classNum;
   let classNumDiff = "ingred" + counter;
   let idName = "i" + classNumDiff;
   document.getElementById(idName).appendChild(obIng);
   pieArr.push(ingredSel);
   console.log(counter);
}// ENDS function addIng()

function addPie() {
   pieArr.sort();
   console.log(pieArr);
   delDivs();
   pieTypeNum = pieArr[0].toString() + pieArr[1].toString() + pieArr[2].toString();
   console.log(pieTypeNum);
   let finishedPie = document.createElement("div");
   finishedPie.className = "p" + pieTypeNum;
   finishedPie.id = "pie";
   document.getElementById("toppy").appendChild(finishedPie);

   counter = 0;
   pieArr = [];
}// END function addPie()

function delDivs() {
   for (let i = 0; i < 3; i++){
      let className = "ingred" + pieArr[i];
      let delDivIngredient = document.getElementById(className);
      delDivIngredient.remove(className);
      if (i == 2){
         delDivIngredient = document.getElementById("wow");
         delDivIngredient.remove("wow");
      }
   }
      piePlaced = document.querySelector("div.pie");
}

let ob1Check = document.querySelector("img.ob1");
let ob2Check = document.querySelector("img.ob2");
let ob3Check = document.querySelector("img.ob3");
let counter = 0;
let ingredSel = 0;
let pieArr = [];
let piePlaced = document.querySelector("div");
let pieTypeNum = "a";
let pageListner = document.querySelector("div.ingreds");
let tutorial = document.querySelector("div.opening");

tutorial.addEventListener("click", function(){
   tutorial.style.transform = `scale(0, 0)`;
});

ob1Check.addEventListener("click", function(){
   ingredSel = 1;
   switch (counter){
      case 0:
         addIng(ingredSel);
         break;
      case 1:
         addIng(ingredSel);
         break;
      case 2:
         addIng(ingredSel);
         break;
   };
});
ob2Check.addEventListener("click", function(){
   ingredSel = 2;
   switch (counter){
      case 0:
         addIng(ingredSel);
         break;
      case 1:
         addIng(ingredSel);
         break;
      case 2:
         addIng(ingredSel);
         break;
   };
});
ob3Check.addEventListener("click", function(){
   ingredSel = 3;
   switch (counter){
      case 0:
         addIng(ingredSel);
         break;
      case 1:
         addIng(ingredSel);
         break;
      case 2:
         addIng(ingredSel);
         break;
   };
});


// OBJECT WIGGLER
   let howLong = 10;
   let wiggle = 5;
ob1Check.addEventListener("mouseover", function(){
   let rotation = 0;
   let i = 0;
      setInterval(function () {
         if (i < howLong) {
            if (rotation <= wiggle) {
               rotation++;
               ob1Check.style.transform = `rotate(${rotation}deg)`;
               i++;
               }
            else if (rotation >= wiggle) {
               rotation--;
               ob1Check.style.transform = `rotate(${rotation}deg)`;
            }
       }// ENDS if (lol < 10)
      }, 10);
});
ob1Check.addEventListener("mouseout", function(){
   let rotation = 0;
   ob1Check.style.transform = `rotate(${rotation}deg)`;
});

ob2Check.addEventListener("mouseover", function(){
   let rotation = 0;
   let i = 0;
      setInterval(function () {
         if (i < howLong) {
            if (rotation <= wiggle) {
               rotation++;
               ob2Check.style.transform = `rotate(${rotation}deg)`;
               i++;
               }
            else if (rotation >= wiggle) {
               rotation--;
               ob2Check.style.transform = `rotate(${rotation}deg)`;
            }
       }// ENDS if (lol < 10)
      }, 10);
});
ob2Check.addEventListener("mouseout", function(){
   let rotation = 0;
   ob2Check.style.transform = `rotate(${rotation}deg)`;
});

ob3Check.addEventListener("mouseover", function(){
   let rotation = 0;
   let i = 0;
      setInterval(function () {
         if (i < howLong) {
            if (rotation <= wiggle) {
               rotation++;
               ob3Check.style.transform = `rotate(${rotation}deg)`;
               i++;
               }
            else if (rotation >= wiggle) {
               rotation--;
               ob3Check.style.transform = `rotate(${rotation}deg)`;
            }
       }// ENDS if (lol < 10)
      }, 10);
});
ob3Check.addEventListener("mouseout", function(){
   let rotation = 0;
   ob3Check.style.transform = `rotate(${rotation}deg)`;
});

// PIE WOW
pageListner.addEventListener("click", function(){
   if (counter == 3){
      console.log("dgdfg");
      let pieReady = document.createElement("div");
      pieReady.className = "wow";
      pieReady.id = "wow";
      document.body.append(pieReady);
      let pieClear = document.querySelector("div.wow");
      let scaler = 1;
      let viggle = 1;
      setInterval(function () {
            if (scaler <= viggle) {
               scaler += 0.05;
               pieClear.style.transform = `scale(${scaler})`;
               }
            else if (scaler >= viggle) {
               scaler -= 0.05;
               pieClear.style.transform = `scale(${scaler})`;
            }
      }, 150);

      pieClear.addEventListener("click", function(){
         addPie();
      });
      counter++;
   }
});
