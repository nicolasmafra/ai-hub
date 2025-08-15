import { ChatMistralAI } from 'https://cdn.jsdelivr.net/npm/@langchain/mistralai@0.2.1/+esm'

export function listChatModels() {
  return [
    {
      name: "MistralAI",
      code: "ChatMistralAI",
    },
  ];
}

export function listModels(chatModelCode) {
  if (chatModelCode === "ChatMistralAI") {
    return [
      {
        name: "Mistral Large",
        code: "mistral-large-latest",
      },
    ];
  }
  return [];
}

export function instanceChatModel(chatModelCode, model, apiKey) {
  if (chatModelCode === "ChatMistralAI") {
    return new ChatMistralAI({
      apiKey,
      model,
      temperature: 0,
    });
  } else {
    throw new Error(`Unknown chat model code: ${chatModelCode}`);
  }
}
