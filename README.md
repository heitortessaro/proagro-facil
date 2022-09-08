# Proagro Fácil

Este projeto implementa uma versão simplificada da comunicação com o sistema Proagro Fácil da empresa Softfocus.

A documentação da API implementada está sendo construída utilizando a ferramenta Postman. Você pode acessar a última versão através dest [link](https://documenter.getpostman.com/view/21397186/VVBUy7HF). Você também pode acessar a documentação gerada automaticamente pelo FastAPI utilizando esse [link](https://proagro-facil-backend.herokuapp.com/docs).

Na próxima seção são apresentados os passos para rodar as aplicações front e back end localmente. No entanto, você também pode acessar o deploy da aplicação do [Front End]() e do [Back End](https://proagro-facil-backend.herokuapp.com/).

## Rodando o Projeto na sua máquina

Na sua máquina você deve ter:

- Sistema Operacional Distribuição Unix
- Node versão 16 (versão igual ou superior à `16.15.0 LTS`)
- Docker
- Docker-compose versão >=1.29.2

A seguir você encontra um guia de como instalar e rodar o projeto localmente. Em caso de dúvidas, problemas ou feedbacks, entre em contato.

Passo 1. Crie o repositório local utilizando `mkdir`:

```bash
mkdir project-proagro-facil
```

Passo 2. Mude para o repositório criado:

```bash
cd project-proagro-facil
```

Passo 3. Clone o projeto:

```bash
git clone git@github.com:heitortessaro/proagro-facil.git
```

Passo 4. Mude para o diretório clonado:

```bash
cd proagro-facil
```

Passo 5. Inslate todas as dependências:

```bash
npm install
```

Step 6. Rode os containers da aplicação

```bash
docker-compose up -d --build
```

### Acessando a Aplicação Localmente

Depois de subir os container da aplicação, você pode acessar o front end utilizando o endereço http://localhost:3000.

Em funções da limitação de tempo no desenvolvimento, alguns pontos foram indicados na seção de **Melhorias Futuras** para esse projeto. Uma delas é a utilização de variáveis de ambiente no front end. No momento, se por alguma razão for necessário alterar a URL base para comunicação com a api, por favor, edite o arquivo _app/frontend/src/services/baseURL.js_.

### Comandos Complementares

Caso você queira reiniciar a aplicação local, você pode desmontar os containers utilizando:

```bash
docker-compose down
```

E depois reiniciar a aplicação com:

```bash
docker-compose up -d --build
```

## Tecnologias utilizadas

Na sequeência são listadas as principais tecnologias utilizadas para a implementação do projeto.

### Front End

- [React](https://reactjs.org/): biblioteca JavaScript para construir interfaces de usuário.
- [Tailwind](https://tailwindcss.com/): estrutura CSS que fornece um catálogo classes e ferramentas CSS para facilitar a estilização da aplicação.

### Back End

- [Fastapi](https://fastapi.tiangolo.com/): web framework para construir APIs com Python.
- [Uvicorn](https://www.uvicorn.org/): é uma implementação de servidor web ASGI para Python.
- [Motor](https://motor.readthedocs.io/en/stable/): é um driver Python assíncrono para interação com o MongoDB.
- [Pydantic](https://pydantic-docs.helpmanual.io/): usado para a validação de dados e gerenciamento de configurações usando anotações de tipo em Python.
- [Geopy](https://geopy.readthedocs.io/en/stable/index.html?highlight=geodesic#): biblioteca para obtenção e tratamentos de dados geográficos. Neste projeto, foi utilizada a função para calcular a distância entre duas coordenadas do globo.

### Database

Para a implementação do banco de dados se utilizou o [MongoDB](https://www.mongodb.com/), tomando proveito do serviço Atlas.

## Organização

A seguir é apresentada a estrutura de pastas utilizada no front end:

```
src
 ┣ components
 ┃ ┣ Delete.jsx
 ┃ ┣ Navbar.jsx
 ┃ ┣ Register.jsx
 ┃ ┣ RegisterCard.jsx
 ┃ ┣ Search.jsx
 ┃ ┣ Select.jsx
 ┃ ┣ SelectService.jsx
 ┃ ┗ Update.jsx
 ┣ services
 ┃ ┣ fetches
 ┃ ┃ ┣ fakeResponse.js
 ┃ ┃ ┣ fetchAtualizacao.js
 ┃ ┃ ┣ fetchBuscaCpf.js
 ┃ ┃ ┣ fetchBuscaId.js
 ┃ ┃ ┣ fetchCadastro.js
 ┃ ┃ ┗ fetchDelete.js
 ┃ ┣ validations
 ┃ ┃ ┣ validateCPF.js
 ┃ ┃ ┣ validateCoordnates.js
 ┃ ┃ ┣ validateForms.js
 ┃ ┃ ┗ validateId.js
 ┃ ┣ baseURL.js
 ┃ ┗ eventTypes.js
 ┣ App.css
 ┣ App.js
 ┣ App.test.js
 ┣ index.css
 ┣ index.js
 ┣ reportWebVitals.js
 ┗ setupTests.js
```

A seguir é apresentada a estrutura de pastas do back end:

```
backend
 ┣ .pytest_cache
 ┃ ┣ v
 ┃ ┃ ┗ cache
 ┃ ┃ ┃ ┣ lastfailed
 ┃ ┃ ┃ ┣ nodeids
 ┃ ┃ ┃ ┗ stepwise
 ┃ ┣ .gitignore
 ┃ ┣ CACHEDIR.TAG
 ┃ ┗ README.md
 ┣ app
 ┃ ┣ model
 ┃ ┃ ┣ database.py
 ┃ ┃ ┗ proagro.py
 ┃ ┣ routes
 ┃ ┃ ┣ __init__.py
 ┃ ┃ ┣ ping.py
 ┃ ┃ ┗ register.py
 ┃ ┣ schemas
 ┃ ┃ ┗ proagro.py
 ┃ ┣ services
 ┃ ┃ ┣ __init__.py
 ┃ ┃ ┗ validations.py
 ┃ ┣ __init__.py
 ┃ ┗ main.py
 ┣ test
 ┃ ┣ __init__.py
 ┃ ┣ conftest.py
 ┃ ┗ test_main.py
 ┣ DEPLOY_Dockerfile.txt
 ┣ Dockerfile
 ┣ heroku.yml
 ┗ requirements.txt
```

## Melhorias Futuras

Aqui são apresentadas possíveis melhorias que ainda não foram implementadas no projeto.

- Utilizar variáveis de ambiente para definir a url da api para o front end e para fornecer a string de acesso ao banco de dados no back end.
- Aprimorar a componentização do front end, principalmente para os componentes Update e Register.
- Implementar testes unitários para font e back end.
- Implementar testes E2E para o front e back end.
- Adicionar um sistema de login e autenticação ao sistema. Uma opção seria utilizar JWT, de modo a liberar acesso as funcionalidades das rotas apenas a usuários autorizados.
  - Adicionar rota de login e criação de usuário.
- Aprimorar a estrutura organizacional do back end
- Aplicar conceitos SOLID em ambas as aplicações, front end e back end.

## Referências Utilizadas

Além da documentação das técnologias previamente cidatas, também foram utilizados guias de implementação. Abaixo são listadas as referências utilizadas:

- [Developing and Testing an Asynchronous API with FastAPI and Pytest](https://testdriven.io/blog/fastapi-crud/#get-routes)
- [Building a CRUD App with FastAPI and MongoDB](https://testdriven.io/blog/fastapi-mongo/#update)
- [The Ultimate FastAPI Tutorial](https://christophergs.com/tutorials/ultimate-fastapi-tutorial-pt-1-hello-world/)
- [Setup black, isort, flake8 in VSCode](https://medium.com/@jackklpan/auto-format-and-lint-by-black-isort-flake8-in-vs-visual-studio-code-a62a3f5d940e)
