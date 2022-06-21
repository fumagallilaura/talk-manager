# Boas-vindas ao repositório do projeto Talker Manager!

Este é um projeto desenvolvido por _Laura Fumagalli_!

É uma simulação da vida real, bem _baby steps_, que vai mostrar um pouco como eu gosto da estruturação quando desenvolvo aplicações utilizando _node express_!

Sinta-se a vontade para navegar pelos diretórios ou até mesmo clonar o repositório e rodar o projeto na sua máquina! #vqv 🚀

A seguir você vai encontrar todos os detalhes sobre a aplicação.

# Talker Manager

<details>
  <summary><strong>👨‍💻 Desenvolvimento</strong></summary><br />

Encontrará apenas o Back-end aqui, podendo ser executado dentro de um container criado pelo Docker Compose 🐳.

É uma aplicação de cadastro de talkers (palestrantes) em que será possível cadastrar, visualizar, pesquisar, editar e excluir informações.

1. Uma API de um `CRUD` (**C**reate, **R**ead, **U**pdate e **D**elete) de palestrantes (talkers) e;
2. Alguns endpoints que irão ler e escrever em um arquivo utilizando o módulo `fs`.

</details>

<details>
  <summary><strong>🧰 Desenvolvido com</strong></summary><br />
  
  - Debug
  - Node.js
  - Express
  - Docker
  - Jest
  - Frisby
</details>

<details>
  <summary><strong>🗓 Tempo de execução</strong></summary><br />
  
  * Este projeto é individual
  * Foi desenvolvido em `3` dias
  * Data da conclusão do projeto: `18/06/2022 22:00`

</details>

# Orientações

<details>
  <summary><strong>🔧 Instalação: Docker vs Localmente</strong></summary><br />
  
  ## Com Docker

> ⚠️ É necessário ter o [Docker](https://docs.docker.com/engine/install/ubuntu/) e o [Docker Compose](https://docs.docker.com/compose/install/) instalados na sua máquina para executar esse projeto em containers.

- Clone este repositório:

```
git clone git@github.com:fumagallilaura/talker-manager.git
```

- Acesse a pasta do projeto:

```
cd talker-manager
```

- Suba os containers da aplicação usando o comando do Docker Compose:

> 📌 O processo de instalação das dependências é feito durante a construção do container de cada ambiente.

```
docker-compose up
```

> Rode o serviço `node` com o comando `docker-compose up -d`.

- Esse serviço irá inicializar um container chamado `talker_manager`.
- A partir daqui você pode rodar o container via CLI ou abri-lo no VS Code.

> Use o comando `docker exec -it talker_manager bash`.

- Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.

> Instale as dependências com `npm install`

:eyes: **De olho na dica:**

A extensão `Remote - Containers` do VS Code (que estará na seção de extensões recomendadas do programa) é indicada para que você possa desenvolver sua aplicação no container Docker direto no VS Code, como você faz com seus arquivos locais.

  <img src="images/remote-container.png" width="800px" >

> ⚠️ O ambiente de desenvolvimento é criado através do arquivo `docker-compose.yml`! Com ele os containers de Back são atualizados a cada mudança feita nos arquivos do projeto.

---

## Sem Docker

> Instale as dependências com `npm install`

:eyes: **De olho nas dicas:**

1. Para rodar o projeto desta forma, **obrigatoriamente** você deve ter o `node` instalado em seu computador.
2. A versão do `node` utilizada durante o desenvolvimento do projeto foi a 16.

</details>

<details>
  <summary><strong>💡 Dica</strong></summary><br />
  
  - No projeto há um diretório `.vscode`. Nele encontra-se a configuração do _debug_ utilizado durante o desenvolvimento do projeto.
</details>

<details>
  <summary><strong>⌨️ Durante o desenvolvimento</strong></summary><br />

- Foram feitos `commits` das alterações no código regularmente;

- Commits seguem as mesmas regras de _conventional commits_ utilizadas na _lib_ [`git-commit-msg-linter`](https://www.npmjs.com/package/git-commit-msg-linter);

- Para utilização dos comandos abreviados `git c`, `git s` e `git l`, foi configurado um arquivo `.gitconfig` utilizado globalmente com o seguinte conteúdo:

  ```
  [user]
    email = <MY_GITHUB_EMAIL>
    name = <MY_GITHUB_USERNAME>
  [core]
    editor = code --wait
  [alias]
    s = !git status -s
    c = !git add --all && git commit -m
    l = !git log --pretty=format:'%C(yellow)%h %C(red)%d %C(white)%s - %C(cyan)%cn, %C(green)%cr'
  ```

</details>

<details>
  <summary><strong>🎛 Linter</strong></summary><br />

É utilizado o [ESLint](https://eslint.org/) para fazer a análise estática do código.

Este projeto vem com as dependências relacionadas ao _linter_ configuradas nos arquivos `package.json`.

Para poder rodar o `ESLint` em um projeto basta executar o comando `npm install` dentro do projeto e depois `npm run lint`. Se a análise do `ESLint` encontrar problemas no código, tais problemas serão mostrados no seu terminal. Se não houver problema no seu código, nada será impresso no seu terminal.

Você pode também instalar o plugin do `ESLint` no `VSCode`. Para isso, basta fazer o download do [plugin `ESLint`](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) e instalá-lo.

</details>

<details>
  <summary><strong>🔁 Live reload</strong></summary><br />

É utilizado o [Nodemon](https://nodemon.io) para monitorar as mudanças nos arquivos e reiniciar o servidor automaticamente.

Este projeto já vem com as dependências relacionadas ao _nodemon_ configuradas no arquivo `package.json`.

Para iniciar o servidor em modo de desenvolvimento basta executar o comando `npm run dev`. Este comando fará com que o servidor reinicie de forma automática ao salvar uma modificação realizada nos arquivos do projeto.

</details>

<details>
  <summary><strong>🛠 Testes</strong></summary><br />

É usado o [Jest](https://jestjs.io/pt-BR/) e o [Frisby](https://docs.frisbyjs.com/) para fazer os testes de API.

Este projeto já vem configurado e com suas dependências

### Executando todos os testes

Para poder executar os testes, inicie a aplicação com `npm run dev`, em seguida, basta executar o comando `npm test` e **todos** os testes serão executados.

### Executando um teste específico

Para executar um teste expecífico, inicie sua aplicação com `npm run dev`, em seguida, basta executar o comando `npm test nome-do-teste`.

Ex: Para executar o teste referente ao **login**, basta digitar `npm test login`.

:warning: **Importante:** os comandos de testes podem ser executados tanto no terminal do computador quanto do **_Docker_**.

</details>

# Rotas

<details>
  <summary><strong>⚠️ Observações importantes!</strong></summary><br />

1. Com exceção do item 3, todos os outros requisitos são feitos utilizando o módulo `fs`.

2. O arquivo `talker.json` será utilizado como base para fazer as requisições da API. As operações de leitura e escrita são feitas nesse arquivo usando os métodos da biblioteca `fs`.

3. Pode-se usar o comando `npm run restore` para restaurar o arquivo `talker.json` para seu estado inicial.

4. Ao se deparar com o erro de que a porta já está em uso: `EADDRINUSE: address already in use 0.0.0.0:3000`, execute em seu terminal `killall -9 node` isso finalizá todas as execuções do node.

</details>

---

## 1 - Endpoint GET `/talker`

<details>
  <summary>A requisição Retorna o <code>status 200</code> e um array com todas as pessoas palestrantes cadastradas. Exemplo: </summary><br />

```json
[
  {
    "name": "Henrique Albuquerque",
    "age": 62,
    "id": 1,
    "talk": { "watchedAt": "23/10/2020", "rate": 5 }
  },
  {
    "name": "Heloísa Albuquerque",
    "age": 67,
    "id": 2,
    "talk": { "watchedAt": "23/10/2020", "rate": 5 }
  },
  {
    "name": "Ricardo Xavier Filho",
    "age": 33,
    "id": 3,
    "talk": { "watchedAt": "23/10/2020", "rate": 5 }
  },
  {
    "name": "Marcos Costa",
    "age": 24,
    "id": 4,
    "talk": { "watchedAt": "23/10/2020", "rate": 5 }
  }
]
```

</details>

<details>
  <summary>Caso não exista nenhuma pessoa palestrante cadastrada a requisição retorna o <code>status 200</code> e um array vazio. Exemplo:</summary><br />

```json
[]
```

</details>

## 2 - Endpoint GET `/talker/:id`

<details>
  <summary>A requisição deve retornar o <code>status 200</code> e uma pessoa palestrante com base no <code>id</code> da rota. Por exemplo, ao fazer uma requisição <code>/talker/1</code>, a resposta deve ser:</summary><br />

```json
{
  "name": "Henrique Albuquerque",
  "age": 62,
  "id": 1,
  "talk": { "watchedAt": "23/10/2020", "rate": 5 }
}
```

</details>

<details>
  <summary>Caso não seja encontrada uma pessoa palestrante com base no <code>id</code> da rota, a requisição deve retornar o <code>status 404</code> com o seguinte corpo:</summary><br />
  
  ```json
  {
    "message": "Pessoa palestrante não encontrada"
  }
  ```
</details>

## 3 - Crie o endpoint POST `/login`

O endpoint deverá receber no corpo da requisição os campos `email` e `password` e retornar um token aleatório de 16 caracteres. Este token será utilizado pelas requisições dos próximos requisitos do projeto.

<details>
  <summary>O <strong>corpo da requisição</strong> deverá ter seguinte formato:</summary><br />

```json
{
  "email": "email@email.com",
  "password": "123456"
}
```

</details>
  
<details>
  <summary>Os seguintes pontos serão avaliados:</summary><br />
  
  - O endpoint deverá retornar um código de `status 200` com o token gerado e o seguinte corpo:

```json
{
  "token": "7mqaVRXJSp886CGr"
}
```

- O endpoint deve retornar um token aleatório a cada vez que for acessado.

</details>

## 4 - Adicione as validações para o endpoint `/login`

Os campos recebidos pela requisição devem ser validados e, caso os valores sejam inválidos, o endpoint deve retornar o código de `status 400` com a respectiva mensagem de erro ao invés do token.

<details>
  <summary>As regras de validação são:</summary><br />

- o campo `email` é obrigatório;
- o campo `email` deve ter um email válido;
- o campo `password` é obrigatório;
- o campo `password` deve ter pelo menos 6 caracteres.

</details>
  
<details>
  <summary>Os seguintes pontos serão avaliados:</summary><br />

- Caso o campo `email` não seja passado ou esteja vazio, retorne um código de `status 400` com o seguinte corpo:

```json
{
  "message": "O campo \"email\" é obrigatório"
}
```

- Caso o email passado não seja válido, retorne um código de `status 400` com o seguinte corpo:

```json
{
  "message": "O \"email\" deve ter o formato \"email@email.com\""
}
```

- Caso o campo `password` não seja passado ou esteja vazio retorne um código de `status 400` com o seguinte corpo:

```json
{
  "message": "O campo \"password\" é obrigatório"
}
```

- Caso a senha não tenha pelo menos 6 caracteres retorne um código de `status 400` com o seguinte corpo:

```json
{
  "message": "O \"password\" deve ter pelo menos 6 caracteres"
}
```

</details>

## 5 - Crie o endpoint POST `/talker`

<details>
  <summary>Os seguintes pontos serão avaliados:</summary><br />

- O endpoint deve ser capaz de adicionar uma nova pessoa palestrante ao seu arquivo;

- O corpo da requisição deverá ter o seguinte formato:

  ```json
  {
    "name": "Danielle Santos",
    "age": 56,
    "talk": {
      "watchedAt": "22/10/2019",
      "rate": 5
    }
  }
  ```

- A requisição deve ter o token de autenticação nos headers, no campo `authorization`.

  - Caso o token não seja encontrado retorne um código de `status 401`, com o seguinte corpo:

    ```json
    {
      "message": "Token não encontrado"
    }
    ```

  - Caso o token seja inválido retorne um código de `status 401`, com o seguinte corpo:

    ```json
    {
      "message": "Token inválido"
    }
    ```

- O campo `name` deverá ter no mínimo 3 caracteres. Ele é obrigatório.

  - Caso o campo não seja passado ou esteja vazio retorne um código de `status 400`, com o seguinte corpo:

    ```json
    {
      "message": "O campo \"name\" é obrigatório"
    }
    ```

  - Caso o nome não tenha pelo menos 3 caracteres retorne um código de `status 400`, com o seguinte corpo:

    ```json
    {
      "message": "O \"name\" deve ter pelo menos 3 caracteres"
    }
    ```

- O campo `age` deverá ser um inteiro e apenas pessoas maiores de idade (pelo menos `18 anos`) podem ser cadastrados. Ele é obrigatório.

  - Caso o campo não seja passado ou esteja vazio retorne um código de `status 400`, com o seguinte corpo:

    ```json
    {
      "message": "O campo \"age\" é obrigatório"
    }
    ```

  - Caso a pessoa palestrante não tenha pelo menos 18 anos retorne `status 400`, com o seguinte corpo:

    ```json
    {
      "message": "A pessoa palestrante deve ser maior de idade"
    }
    ```

  - O campo `talk` deverá ser um objeto com as chaves `watchedAt` e `rate`:

  - O campo `talk` é obrigatório.

    - Caso o campo não seja informado retorne `status 400`, com o seguinte corpo:

      ```json
      {
        "message": "O campo \"talk\" é obrigatório"
      }
      ```

  - A chave `watchedAt` é obrigatória.

    - Caso a chave não seja informada ou esteja vazia retorne `status 400`, com o seguinte corpo:

      ```json
      {
        "message": "O campo \"watchedAt\" é obrigatório"
      }
      ```

  - A chave `watchedAt` deve ser uma data no formato `dd/mm/aaaa`.

    - Caso a data não respeite o formato `dd/mm/aaaa` retorne `status 400`, com o seguinte corpo:

      ```json
      {
        "message": "O campo \"watchedAt\" deve ter o formato \"dd/mm/aaaa\""
      }
      ```

  - O campo `rate` é obrigatório.

    - Caso o campo não seja informado ou esteja vazio retorne `status 400`, com o seguinte corpo:

      ```json
      {
        "message": "O campo \"rate\" é obrigatório"
      }
      ```

  - A chave `rate` deve ser um inteiro de 1 à 5.

    - Caso a nota não seja um inteiro de 1 à 5 retorne `status 400`, com o seguinte corpo:

      ```json
      {
        "message": "O campo \"rate\" deve ser um inteiro de 1 à 5"
      }
      ```

- Caso esteja tudo certo, retorne o `status 201` e a pessoa cadastrada.
- O endpoint deve retornar o `status 201` e a pessoa palestrante que foi cadastrada, da seguinte forma:

  ```json
  {
    "id": 1,
    "name": "Danielle Santos",
    "age": 56,
    "talk": {
      "watchedAt": "22/10/2019",
      "rate": 5
    }
  }
  ```

</details>

## 6 - Crie o endpoint PUT `/talker/:id`

<details>
  <summary>Os seguintes pontos serão avaliados:</summary><br />

- O endpoint deve ser capaz de editar uma pessoa palestrante com base no id da rota, sem alterar o id registrado.

- O corpo da requisição deverá ter o seguinte formato:

  ```json
  {
    "name": "Danielle Santos",
    "age": 56,
    "talk": {
      "watchedAt": "22/10/2019",
      "rate": 5
    }
  }
  ```

- A requisição deve ter o token de autenticação nos headers, no campo `authorization`.

  - Caso o token não seja encontrado retorne um código de `status 401`, com o seguinte corpo:

    ```json
    {
      "message": "Token não encontrado"
    }
    ```

  - Caso o token seja inválido retorne um código de `status 401`, com o seguinte corpo:

    ```json
    {
      "message": "Token inválido"
    }
    ```

- O campo `name` deverá ter no mínimo 3 caracteres. Ele é obrigatório.

  - Caso o campo não seja passado ou esteja vazio retorne um código de `status 400`, com o seguinte corpo:

    ```json
    {
      "message": "O campo \"name\" é obrigatório"
    }
    ```

  - Caso o nome não tenha pelo menos 3 caracteres retorne um código de `status 400`, com o seguinte corpo:

    ```json
    {
      "message": "O \"name\" ter pelo menos 3 caracteres"
    }
    ```

- O campo `age` deverá ser um inteiro e apenas pessoas maiores de idade (pelo menos `18 anos`) podem ser cadastrados. Ele é obrigatório.

  - Caso o campo não seja passado ou esteja vazio retorne um código de `status 400`, com o seguinte corpo:

    ```json
    {
      "message": "O campo \"age\" é obrigatório"
    }
    ```

  - Caso a pessoa palestrante não tenha pelo menos 18 anos retorne `status 400`, com o seguinte corpo:

    ```json
    {
      "message": "A pessoa palestrante deve ser maior de idade"
    }
    ```

- O campo `talk` deverá ser um objeto com as chaves `watchedAt` e `rate`:

  - O campo `talk` é obrigatório.

    - Caso o campo não seja informado retorne `status 400`, com o seguinte corpo:

      ```json
      {
        "message": "O campo \"talk\" é obrigatório"
      }
      ```

  - A chave `watchedAt` é obrigatória.

    - Caso a chave não seja informada ou esteja vazia retorne `status 400`, com o seguinte corpo:

      ```json
      {
        "message": "O campo \"watchedAt\" é obrigatório"
      }
      ```

  - A chave `watchedAt` deve ser uma data no formato `dd/mm/aaaa`.

    - Caso a data não respeite o formato `dd/mm/aaaa` retorne `status 400`, com o seguinte corpo:

      ```json
      {
        "message": "O campo \"watchedAt\" deve ter o formato \"dd/mm/aaaa\""
      }
      ```

  - O campo `rate` é obrigatório.

    - Caso o campo não seja informado ou esteja vazio retorne `status 400`, com o seguinte corpo:

      ```json
      {
        "message": "O campo \"rate\" é obrigatório"
      }
      ```

  - A chave `rate` deve ser um inteiro de 1 à 5.

    - Caso a nota não seja um inteiro de 1 à 5 retorne `status 400`, com o seguinte corpo:

      ```json
      {
        "message": "O campo \"rate\" deve ser um inteiro de 1 à 5"
      }
      ```

- Caso esteja tudo certo, retorne o `status 200` e a pessoa editada.
- O endpoint deve retornar o `status 200` e a pessoa palestrante que foi editada, da seguinte forma:

  ```json
  {
    "id": 1,
    "name": "Danielle Santos",
    "age": 56,
    "talk": {
      "watchedAt": "22/10/2019",
      "rate": 4
    }
  }
  ```

</details>

## 7 - Crie o endpoint DELETE `/talker/:id`

<details>
  <summary>Os seguintes pontos serão avaliados:</summary><br />

- A requisição deve ter o token de autenticação nos headers, no campo `authorization`.

  - Caso o token não seja encontrado retorne um código de `status 401`, com o seguinte corpo:

    ```json
    {
      "message": "Token não encontrado"
    }
    ```

  - Caso o token seja inválido retorne um código de `status 401`, com o seguinte corpo:

    ```json
    {
      "message": "Token inválido"
    }
    ```

- O endpoint deve deletar uma pessoa palestrante com base no id da rota. Devendo retornar o `status 204`, sem conteúdo na resposta.

</details>
  
## 8 - Crie o endpoint GET `/talker/search?q=searchTerm`

<details>
  <summary>Os seguintes pontos serão avaliados:</summary><br />

- O endpoint deve retornar um array de palestrantes que contenham em seu nome o termo pesquisado no queryParam da URL. Devendo retornar o `status 200`, com o seguinte corpo:

  ```
  /search?q=Da
  ```

  ```json
  [
    {
      "id": 1,
      "name": "Danielle Santos",
      "age": 56,
      "talk": {
        "watchedAt": "22/10/2019",
        "rate": 5
      }
    }
  ]
  ```

- A requisição deve ter o token de autenticação nos headers, no campo `authorization`.

  - Caso o token não seja encontrado retorne um código de `status 401`, com o seguinte corpo:

    ```json
    {
      "message": "Token não encontrado"
    }
    ```

  - Caso o token seja inválido retorne um código de `status 401`, com o seguinte corpo:

    ```json
    {
      "message": "Token inválido"
    }
    ```

- Caso `searchTerm` não seja informado ou esteja vazio, o endpoint deverá retornar um array com todos as pessoas palestrantes cadastradas, assim como no endpoint GET `/talker`, com um `status 200`.

- Caso nenhuma pessoa palestrante satisfaça a busca, o endpoint deve retornar o `status 200` e um array vazio.

**Dica** é importante ter atenção se essa rota não entra em conflito com as outras, já que a ordem das rotas faz diferença na interpretação da aplicação

</details>
