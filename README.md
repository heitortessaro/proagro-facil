# proagro-facil

Este projeto implementa uma versão simplificada da comunicação com o sistema Proagro Fácil da empresa Softfocus.

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

## Referências Utilizadas

Além da documentação das técnologias previamente cidatas, também foram utilizados guias de implementação. Abaixo são listadas as referências utilizadas:

- [Developing and Testing an Asynchronous API with FastAPI and Pytest](https://testdriven.io/blog/fastapi-crud/#get-routes)
- [Building a CRUD App with FastAPI and MongoDB](https://testdriven.io/blog/fastapi-mongo/#update)
- [The Ultimate FastAPI Tutorial](https://christophergs.com/tutorials/ultimate-fastapi-tutorial-pt-1-hello-world/)
- [Setup black, isort, flake8 in VSCode](https://medium.com/@jackklpan/auto-format-and-lint-by-black-isort-flake8-in-vs-visual-studio-code-a62a3f5d940e)
