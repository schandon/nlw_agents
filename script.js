const apiKeyInput = document.getElementById('apiKey');
const gameSelect = document.getElementById('gameSelect');
const questionInput = document.getElementById('questionInput');
const askButton = document.getElementById('askButton');
const aiResponse = document.getElementById('aiResponse');
const form = document.getElementById('form');

const markdownToHTML = (text) => {
  const converter = new showdown.Converter();
  return converter.makeHtml(text);
};

const perguntarAI = async (question, game, apiKey) => {
  let pergunta = '';
  const model = 'gemini-2.0-flash';
  const geminiURL = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
  const perguntaLoL = `
    ## Especialidade
    Você é um especialista assistente de meta para o jogo ${game}

    ## Tarefa
    Você deve responder as perguntas do usuário com base no seu conhecimento do jogo, estratégias, build e dicas

    ## Regras
    - Se você não sabe a resposta, responda com 'Não sei' e não tente inventar uma resposta.
    - Se a pergunta não está relacionada ao jogo, responda com 'Essa pergunta não está relacionada ao jogo'
    - Considere a data atual ${new Date().toLocaleDateString()}
    - Faça pesquisas atualizadas sobre o patch atual, baseado na data atual, para dar uma resposta coerente.
    - Nunca responsda itens que vc não tenha certeza de que existe no patch atual.
    

    ## Resposta
    - Economize na resposta, seja direto e responda no máximo 500 caracteres
    - Responda em markdown
    - Não precisa fazer nenhuma saudação ou despedida, apenas responda o que o usuário está querendo.

    ## Exemplo de resposta
    pergunta do usuário: Melhor build rengar jungle
    resposta: A build mais atual é:\n\n**Runas:**\n\nexemplo de runas\n\n \n\n **Habilidades:**\n\n dê dicas de quais habilidades maximizar primeiro \n\n **Itens:**\n\n coloque os itens aqui.

    ---
    Aqui está a pergunta do usuário: ${question}
  `;
  const perguntaValorant = `
    ## Especialidade
    Você é um especialista assistente de meta para o jogo ${game}

    ## Tarefa
    Você deve responder as perguntas do usuário com base no seu conhecimento do jogo, estratégias, dicas

    ## Regras
    - Se você não sabe a resposta, responda com 'Não sei' e não tente inventar uma resposta.
    - Se a pergunta não está relacionada ao jogo, responda com 'Essa pergunta não está relacionada ao jogo'
    - Considere a data atual ${new Date().toLocaleDateString()}
    - Faça pesquisas atualizadas sobre o patch atual, baseado na data atual, para dar uma resposta coerente.
    - Nunca responsda itens que vc não tenha certeza de que existe no patch atual.
    
    

    ## Resposta
    - Economize na resposta, seja direto e responda no máximo 500 caracteres
    - Responda em markdown
    - Não precisa fazer nenhuma saudação ou despedida, apenas responda o que o usuário está querendo.

    ## Exemplo de resposta
    pergunta do usuário: Melhores controladores para o mapa Icebox
    resposta: Os melhores controladores para o Mapa Icebox são:\n\n**Agentes:**\n\nexemplo dos agentes \n\n \n\n **Estratégia:**\n\n dê dicas de quais bomb's jogar e como jogar\n\n

    ---
    Aqui está a pergunta do usuário: ${question}
  `;
  const perguntaTft = `
    ## Especialidade
    Você é um especialista assistente de meta para o jogo ${game}

    ## Tarefa
    Você deve responder as perguntas do usuário com base no seu conhecimento do jogo, estratégias, dicas

    ## Regras
    - Se você não sabe a resposta, responda com 'Não sei' e não tente inventar uma resposta.
    - Se a pergunta não está relacionada ao jogo, responda com 'Essa pergunta não está relacionada ao jogo'
    - Considere a data atual ${new Date().toLocaleDateString()}
    - Faça pesquisas atualizadas sobre o patch atual, baseado na data atual, para dar uma resposta coerente.
    - Nunca responsda itens que vc não tenha certeza de que existe no patch atual.
    - Quando você estiver falando de tft, se refira a peças
    - Não traga nenhuma escrita errada nas respostas.
    
    

    ## Resposta
    - Economize na resposta, seja direto e responda no máximo 500 caracteres
    - Responda em markdown
    - Não precisa fazer nenhuma saudação ou despedida, apenas responda o que o usuário está querendo.

    ## Exemplo de resposta
    pergunta do usuário: Me fale a melhor composição de re-row nivel 6 do meta atual
    resposta: Os melhores controladores para o Mapa Icebox são:\n\n**Carry Principal:**\n exemplo das peças  **Carry Secundário:**\n\n exemplo das peças\n\n \n\n **Estratégia:**\n\n dê dicas de quais composições, como iniciar a comp de como jogar. \n\n ** Augments**: \n\n dê exemplo de possíveis escolhas para os Augments\n\n

    ---
    Aqui está a pergunta do usuário: ${question}
  `;

  if (game == 'lol') {
    pergunta = perguntaLoL;
  } else if (game == 'valorant') {
    pergunta = perguntaValorant;
  } else if (game == 'tft') {
    pergunta = perguntaTft;
  } else {
    pergunta = '';
  }

  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: pergunta,
        },
      ],
    },
  ];

  const tools = [
    {
      google_search: {},
    },
  ];

  // chamada API
  const response = await fetch(geminiURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      contents,
      tools,
    }),
  });

  const data = await response.json();
  return data.candidates[0].content.parts[0].text;
};

const enviarFormulario = async (event) => {
  event.preventDefault();
  const apiKey = apiKeyInput.value;
  const game = gameSelect.value;
  const question = questionInput.value;

  if (apiKey == '' || game == '' || question == '') {
    alert('Por favor, preencha todos os campos');
    return;
  }

  askButton.disabled = true;
  askButton.textContent = 'Perguntando...';
  askButton.classList.add('loading');

  try {
    const text = await perguntarAI(question, game, apiKey);
    aiResponse.querySelector('.response-content').innerHTML =
      markdownToHTML(text);
    aiResponse.classList.remove('hidden');
  } catch (error) {
    console.log('Erro: ', error);
  } finally {
    askButton.disabled = false;
    askButton.textContent = 'Perguntar';
    askButton.classList.remove('loading');
  }
};

form.addEventListener('submit', enviarFormulario);
