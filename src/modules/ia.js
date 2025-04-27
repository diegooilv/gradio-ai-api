import { Client } from "@gradio/client";

export default async function ia(message) {
  if (!message) {
    return "Não deixe o prompt em branco!";
  }
  try {
    // Conecta ao modelo Qwen2.5-Max-Demo
    const client = await Client.connect("Qwen/Qwen2.5-Max-Demo");

    const systemMessage =
      "Responda a pergunta de forma clara e objetiva, sem rodeios. Se não souber a resposta, diga que não sabe. Siga as leis de segurança e privacidade. Não faça perguntas ou comentários pessoais. Não use emojis ou formatação especial. Não use linguagem ofensiva ou inapropriada. Não faça suposições sobre o usuário ou o contexto da pergunta. Não forneça informações falsas ou enganosas. Não faça julgamentos ou críticas sobre a pergunta ou o usuário.";
    const result = await client.predict("/model_chat", {
      query: message,
      history: [],
      system: systemMessage,
    });

    return result.data[1][0][1];
  } catch (error) {
    console.error("Erro ao conectar ou enviar requisição:", error);
    return "Erro ao conectar ou enviar requisição.";
  }
}
