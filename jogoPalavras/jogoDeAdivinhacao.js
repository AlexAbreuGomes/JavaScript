const puzzleData = [
    [['M', 'a', 'ç', 'ã'], ['Fruta']],
    [['S', 'o', 'l'], ['Astro']],
    [['L', 'i', 'v', 'r', 'o'], ['Leitura']],
    [['G', 'a', 't', 'o'], ['Animal']],
    [['A', 'z', 'u', 'l'], ['Cor']],
    [['P', 'i', 'a', 'n', 'o'], ['Música']],
    // Adicione mais palavras conforme necessário
  ];
  
  const puzzleContainer = document.getElementById('puzzle-container');
  const guessInput = document.getElementById('guess');
  const feedback = document.getElementById('feedback');
  
  function renderPuzzle() {
    puzzleContainer.innerHTML = '';
  
    puzzleData.forEach((word, index) => {
      const wordDiv = document.createElement('div');
      wordDiv.className = 'word-container';
      wordDiv.innerHTML = `<strong>${index + 1}.</strong> ${word[1]}: <span class="word"></span>`;
      puzzleContainer.appendChild(wordDiv);
    });
  }
  
  function checkGuess() {
    const userGuess = guessInput.value.trim().toLowerCase();
    guessInput.value = '';
  
    puzzleData.forEach((word, index) => {
      const wordString = word[0].join('').toLowerCase();
      const wordDiv = puzzleContainer.children[index];
      const wordSpan = wordDiv.querySelector('.word');
  
      if (userGuess === wordString) {
        wordSpan.textContent = word[0].join(' ');
        wordDiv.classList.add('correct');
        feedback.textContent = 'Parabéns! Palavra correta.';
      } else {
        feedback.textContent = 'Tente novamente. Palavra incorreta.';
      }
    });
  }
  
  // Chame a função para renderizar o quebra-cabeça
  renderPuzzle();
  