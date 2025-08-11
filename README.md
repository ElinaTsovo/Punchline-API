# API de Piadas em TypeScript

Esta API foi desenvolvida em Node.js, Express e TypeScript, permite:  

- Buscar uma piada pela introdução exata 
- Retornar uma piada aleatória  

---

## Estrutura do Projeto

src/
├── jokes.ts # Array com as piadas (introdução + remate)
├── Jokes.ts # Controller com os métodos para buscar e retornar piadas
└── server.ts # Configuração do servidor Express e rotas


---

## Endpoints

### `POST /jokes/introduction`

Busca uma piada pelo texto exato da introdução enviado no corpo da requisição (JSON):

**Request Body:**

```json
{
  "introduction": "Texto da introdução da piada"
}

Respostas possíveis:

200 OK
Retorna a piada correspondente:

{
  "joke": {
    "introduction": "Por que o livro foi ao médico?",
    "remate": "Porque estava com muitas histórias para contar."
  }
}

400 Bad Request
Quando a introdução não for informada:

{
  "status": 400,
  "message": "Introduction is mandatory.",
  "error": "Bad Request"
}

404 Not Found
Quando a introdução não for encontrada:

{
  "status": 404,
  "message": "The introduction provided was not found.",
  "error": "Not Found"
}

GET /jokes/random

Retorna uma piada aleatória.

Resposta:

200 OK
Exemplo de retorno:

{
  "joke": {
    "introduction": "Qual é o cúmulo do azar?",
    "remate": "Ser atropelado por uma ambulância."
  }
}

---
Como Executar
Clone o repositório

Instale as dependências com:
npm install

Inicie o servidor:
npm run dev

Teste os endpoints usando ferramentas como Postman ou Insomnia

## **Sobre o Projeto**
O método de busca verifica se a introdução enviada pelo usuário corresponde exatamente (ignorando maiúsculas/minúsculas) a uma piada cadastrada.

O método de piada aleatória utiliza o array de piadas para retornar uma delas de forma aleatória.

O código está escrito em TypeScript, garantindo tipagem estática e melhor manutenção.

## **Autor**

### **Elina Simione Tsovo**

---
