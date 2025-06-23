# Eventos jQuery: on, keyup e keydown

Este repositório tem como objetivo demonstrar de forma simples e prática como funcionam os eventos `on`, `keyup` e `keydown` utilizando jQuery.

## 🔹 1. Evento `.on()`

O método `.on()` é usado para **vincular eventos a elementos HTML**. Ele é muito útil para escutar interações como clique, digitação, foco, entre outros.

### Exemplo:
```javascript
$('#meuBotao').on('click', function() {
  alert('Botão clicado!');
});
🔹 2. Evento keyup
O evento keyup é acionado quando o usuário solta uma tecla no teclado. É ideal para capturar valores enquanto o usuário digita, como em campos de busca.

Exemplo:
javascript
Copiar
Editar
$('#campoTexto').on('keyup', function() {
  console.log('Tecla solta: ' + $(this).val());
});
🔹 3. Evento keydown
O evento keydown é disparado quando uma tecla é pressionada. Pode ser útil para detectar comandos de atalho, navegação, entre outros.

Exemplo:
javascript
Copiar
Editar
$('#campoTexto').on('keydown', function() {
  console.log('Tecla pressionada');
});
🔸 Uso do this
Dentro dos eventos, this se refere ao elemento que acionou o evento. No jQuery, normalmente usamos $(this) para manipular o elemento.

Exemplo:
javascript
Copiar
Editar
$('button').on('click', function() {
  $(this).hide(); // Esconde apenas o botão clicado
});
📁 Estrutura básica HTML para testes
html
Copiar
Editar
<input type="text" id="campoTexto" placeholder="Digite algo aqui..." />
<button id="meuBotao">Clique aqui</button>
✅ Requisitos
jQuery incluído no HTML:

html
Copiar
Editar
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
🧠 Conclusão
Esses eventos são fundamentais para tornar sua página interativa e responsiva às ações do usuário. Com eles, é possível capturar e reagir às interações de forma eficaz.
