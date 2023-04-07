<h1 align="center">TO-DO List API 📃</h1>
<p align="center">
  <img align="center" src="./src/.github/readme-banner.jpg" width="70%">
</p>
<br>
<h2>📑 Sobre</h2>
<p>API de uma To-do list, que permite criar, alterar ou excluir uma determinada tarefa, e marca-las como feitas ou não. Os registros ficam salvos em um arquivo JSON (simulando um banco de dados).</p>
<br>
<h2>🎯 Objetivo</h2>
<p>Criar uma API utilizando NodeJS puro, ou seja, sem nenhuma biblioteca ou framework. O objetivo final foi entender como alguns frameworks como Express e Fastify funcionam por de baixo dos panos, e como o NodeJS lida com coisas como Rotas, Stream, Status Code, Crypto, etc.</p>
<br>
<h2>🛠️ Tecnologias e ferramentas/bibliotecas utilizadas</h2>
<ul>
  <li><a href="https://pt-br.reactjs.org/">NodeJS</a></li>
  <li><a href="https://www.typescriptlang.org/">Javascript</a></li>
</ul>
<br>
<h2>💻 Como executar o projeto </h2>
  <ol>
    <li>Faça fork ou baixe o projeto na sua máquina</li>
    <li>Abra o projeto em um editor de códigos, e execute o comando <strong>npm install</strong> no terminal, para baixar as dependências do projeto</li>
    <li>Rode o comando <strong>npm run dev</strong>, que irá subir o servidor localmente no seu computador, na porta 3333</li>
    <li>Pronto. O servidor já estará sendo executado no endereço http://localhost:3333.</li>
  </ol>
<br>
<h2>🚊 Rotas e métodos </h2>
  <ul>
    <li>Listar as tarefas cadastradas: <strong>Rota:</strong> /tasks | <strong>Método:</strong> GET</li>
    <li>Criar uma nova tarefa: <strong>Rota:</strong> /tasks | <strong>Método:</strong> POST | <strong>Body da Requisição:</strong> title e description</li>
    <li>Deletar uma tarefa: <strong>Rota:</strong> /tasks/:id | <strong>Método:</strong> DELETE</li>
    <li>Alterar uma tarefa: <strong>Rota:</strong> /tasks/:id | <strong>Método:</strong> PUT | <strong>Body da Requisição:</strong> title e/ou description</li>
    <li>Marcar ou desmarcar uma tarefa como feita: <strong>Rota:</strong> /tasks/:id | <strong>Método:</strong> PATCH</li>
  </ul>
<br>
<br>
<p align="center">Made by Matheus Pazinati 🛸</p>