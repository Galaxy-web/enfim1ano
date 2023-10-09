<script>
    const meuAudio = document.getElementById('meu-audio');
    const status = document.getElementById('status');
    const playPauseButton = document.getElementById('play-pause');

    // Função para alternar entre reprodução e pausa
    function togglePlayPause() {
      if (meuAudio.paused) {
        meuAudio.play();
        status.textContent = 'Áudio está sendo reproduzido.';
        playPauseButton.textContent = 'Pausar';
      } else {
        meuAudio.pause();
        status.textContent = 'Áudio está pausado.';
        playPauseButton.textContent = 'Reproduzir';
      }
    }

    // Adicionar evento de clique ao botão de reprodução/pausa
    playPauseButton.addEventListener('click', togglePlayPause);

  // Função para exibir a mensagem de surpresa após um certo tempo (por exemplo, 10 segundos)
  function mostrarSurpresa() {
    const surpresa = document.getElementById('surpresa');
    surpresa.style.display = 'block';
  }

  // Chamar a função após um atraso (por exemplo, 10 segundos)
  setTimeout(mostrarSurpresa, 5000); // 5000 milissegundos = 5 segundos
</script>


<!DOCTYPE html>
<html>
<head>
  <title>Meu Projeto com Bootstrap</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
</head>
<body>
  <h1>Meu Projeto com Bootstrap</h1>
  
  <button class="btn btn-primary">Botão Bootstrap</button>

  <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@2.11.6/dist/umd/popper.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>
</body>
</html>
