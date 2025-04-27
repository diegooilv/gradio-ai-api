import ia from "../modules/ia.js";
import gerarImagem from "../modules/generateImg.js";

export const chat = async (req, res) => {
  const prompt = req.prompt;
  const resposta = await ia(prompt);
  if (resposta) {
    return res.status(200).json({ resposta: resposta });
  } else {
    return res.status(500).json({ error: "Erro ao gerar resposta" });
  }
};

export const generateImg = async (req, res) => {
  const prompt = req.prompt;
  const resposta = await gerarImagem(prompt);
  if (resposta) {
    return res.status(200).json({ resposta });
  } else {
    return res.status(500).json({ error: "Erro ao gerar imagem" });
  }
};
