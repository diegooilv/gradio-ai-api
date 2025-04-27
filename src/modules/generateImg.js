import { Client } from "@gradio/client";

export default async function gerarImagem(prompt) {
  if (!prompt) {
    return "Por favor, forneça um prompt para a imagem!";
  }
  try {
    // Conecta ao Space público de imagem
    const client = await Client.connect("stabilityai/stable-diffusion");

    // Parâmetros para o endpoint
    const params = {
      prompt: prompt,
      negative: "bad anatomy, blurry, low resolution", // Exemplo de prompt negativo
    };

    // Chama o endpoint com os parâmetros
    const result = await client.predict("/infer", params);

    // Retorna a primeira imagem gerada
    const list = result.data[0].map(item => ({ url: item.image.url }));
    return list;
    
  } catch (error) {
    console.error("Erro ao gerar imagem:", error);
    return "Erro ao gerar imagem.";
  }
}
