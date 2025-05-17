export const validatePrompt = (req, res, next) => {
  const { prompt } = req.body || {};
  const promptQuery = req.query.prompt || null;
  const promptParams = req.params.prompt || null;
  // Check if prompt is provided in the request body, query, or params
  if (promptQuery) {
    req.prompt = promptQuery;
  } else if (promptParams) {
    req.prompt = promptParams;
  } else if (prompt) {
    req.prompt = prompt;
  } else {
    return res.status(400).json({ error: "Prompt is required" });
  }
  next();
};
