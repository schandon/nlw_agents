# NLW Agents

## Descrição

NLW Agents é um projeto que visa fornecer builds do meta, dicas de estratégia, posicionamento e itens para jogos populares como League of Legends (LOL), Teamfight Tactics (TFT) e Valorant. O objetivo é auxiliar jogadores a aprimorar suas habilidades e tomarem decisões mais informadas durante o jogo.

## Funcionalidades Principais

*   **Geração de Builds do Meta:** Acesso às builds mais recentes e eficazes para diversos campeões e agentes.
*   **Dicas de Estratégia:** Orientações sobre as melhores estratégias a serem adotadas em diferentes situações de jogo.
*   **Posicionamento:** Sugestões de posicionamento para maximizar o desempenho em combate.
*   **Itens:** Recomendações de itens ideais para cada personagem, otimizando o seu potencial.

## Como Usar
1. Para a utilização da aplicação, você precisa fornecer a 
   1. Chave da API
   2. Selecionar o jogo que o usuário quer as informações
   3. Fazer a pergunta de fato que o usuário deseja saber
   4. Clicando em Buscar e esperar `Buscar`

## Requisitos

*   JavaScript
*   HTML
*   CSS
*   Conhecimento de Engenharia de Prompt para IA

## Instalação

1.  Clone o repositório:

    ```bash
    git clone https://github.com/schandon/nlw_agents.git
    ```

2.  Navegue até o diretório do projeto:

    ```bash
    cd nlw_agents
    ```

3.  Instale as dependências:

    ```bash
    npm install
    ```

4. Gere a chave do API no Gemini, é necessário ter uma conta google, entre no Link [Console Google](https://cloud.google.com/apis?utm_source=google&utm_medium=cpc&utm_campaign=latam-BR-all-pt-dr-SKWS-all-all-trial-p-dr-1710136-LUAC0015755&utm_content=text-ad-none-any-DEV_c-CRE_534667502760-ADGP_Hybrid+%7C+SKWS+-+PHR+%7C+Txt_API+Management-General-KWID_43700065166693636-kwd-152051905&utm_term=KW_api-ST_API&gclsrc=aw.ds&gad_source=1&gad_campaignid=13965755271&gclid=CjwKCAjwprjDBhBTEiwA1m1d0uqND3rzNoCxfpaT4Cx8HHgA3muyPxnkAl1Cf3laai0YRPdUVLuNrRoC1-0QAvD_BwE&authuser=1)
5. Procure pela opção de `Console`, crie um novo projeto, de um nome para esse projeto.
6. Acesse o link a seguir do [Gemini Docs](https://aistudio.google.com/apikey?_gl=1*cn37qf*_ga*MTU1NzEwMjgyMS4xNzUyMTAxNDc5*_ga_P1DBVKWT6V*czE3NTIxMDE0NzgkbzEkZzAkdDE3NTIxMDE0NzgkajYwJGwwJGg2MzQ3NDIyOTk.), clique na opção de `Criar uma cahve de API em um novo projeto` e guarde essa informação da Chave.
   
7.  Para facilitar a utilização, recomenda-se instalar a extensão "Live Server" no Visual Studio Code ou você pode usar o código a seguir:
    ````bash
    start index.html
    ````

## Contribuição

Contribuições são bem-vindas! Se você deseja contribuir para o projeto, siga estas etapas:

1.  Faça um fork do repositório.
2.  Crie uma branch com a sua feature:

    ```bash
    git checkout -b feature/sua-feature
    ```

3.  Faça commit das suas alterações:

    ```bash
    git commit -m 'Adiciona uma nova feature'
    ```

4.  Faça push para a sua branch:

    ```bash
    git push origin feature/sua-feature
    ```

