let button = document.querySelector('button') //выносим кнопку в переменную


button.addEventListener('click', wordToBox);

function wordToBox(){
  var word = document.querySelector('input').value; //значение из инпута
  let newDiv = document.createElement('div'); // новый элемент див
  let boxRus = document.querySelector('.boxRus'); // бокс с русскими словами
  // newDiv.style.marginLeft = '30px';
  // newDiv.style.marginRight = '30px';
  
  boxRus.appendChild(newDiv); //новый див в бокс с русскими словами
  newDiv.innerText = word;

  if (word){                               //делаем ... если длинное слово
    newDiv.style.overflow = 'hidden';
    newDiv.style.textOverflow = 'ellipsis';
    newDiv.style.whiteSpace = 'nowrap';
    newDiv.setAttribute('title', word)    // чтоб слово показывалось при наведении
  }

  var wordSplit = word.split('');
  var engWord = "";

for(let i = 0; i < wordSplit.length; i++){
  if (wordSplit[i] in chars)
    engWord = engWord + chars[wordSplit[i]];
  else
    engWord = engWord + wordSplit[i];
}

  let newDiv1 = document.createElement('div');        
  let boxEng = document.querySelector('.boxEng');
  newDiv1.innerText = engWord;
  boxEng.appendChild(newDiv1);



  if (engWord){                               //делаем ... если длинное слово
    newDiv1.style.overflow = 'hidden';
    newDiv1.style.textOverflow = 'ellipsis';
    newDiv1.style.whiteSpace = 'nowrap';
    newDiv1.setAttribute('title', word)    // чтоб слово показывалось при наведении
  }
}

  var chars = {'а': 'a', 'б': 'b' , 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo', 'ж': 'zh',
  'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r',
  'с': 's', 'т' : 't', 'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch',
  'ы': 'y', 'э': 'e', 'ю': 'yu', 'я': 'ya',}
    
