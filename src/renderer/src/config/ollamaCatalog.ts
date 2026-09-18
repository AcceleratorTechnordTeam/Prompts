export const ollamaCatalog: OllamaCatalog[] = [
  // Alibaba Qwen
  {
    family: 'Alibaba Qwen',
    id: 'qwen2.5:7b',
    description: 'Qwen 2.5 (7B) - excellent généraliste multilingue, très bon en français/chinois'
  },
  {
    family: 'Alibaba Qwen',
    id: 'qwen2.5-coder:14b',
    description: 'Qwen 2.5 Coder (14B) - spécialisé génération et revue de code'
  },
  {
    family: 'Alibaba Qwen',
    id: 'qwen3:8b',
    description: 'Qwen 3 (8B) - nouvelle génération, raisonnement et contexte améliorés'
  },
  {
    family: 'Alibaba Qwen',
    id: 'qwen3.5:9b',
    description: 'Qwen 3.5 (9B) - itération récente, meilleur raisonnement et contexte'
  },
  {
    family: 'Alibaba Qwen',
    id: 'qwen3.6:35b',
    description: 'Qwen 3.6 (35B) - version large, excellente cohérence sur tâches complexes'
  },

  // Mistral AI
  {
    family: 'Mistral AI',
    id: 'mistral:7b',
    description: 'Mistral (7B) - rapide et fiable, bon choix par défaut open-source européen'
  },
  {
    family: 'Mistral AI',
    id: 'mistral-small3.2:24b',
    description: 'Mistral Small 3.2 (24B) - bon compromis qualité/vitesse pour production'
  },

  // Google Gemma
  {
    family: 'Google Gemma',
    id: 'gemma4:12b',
    description: 'Gemma 4 (12B) - nouvelle génération, multimodal et contexte étendu'
  },
  {
    family: 'Google Gemma',
    id: 'gemma4:31b',
    description: 'Gemma 4 (31B) - version large, meilleure qualité multimodale'
  },

  // DeepSeek
  {
    family: 'DeepSeek',
    id: 'deepseek-r1:14b',
    description: 'DeepSeek R1 (14B) - spécialisé raisonnement chaîne de pensée (CoT)'
  },

  // NVIDIA Nemotron
  {
    family: 'NVIDIA Nemotron',
    id: 'nemotron-3.5-lightning:30b',
    description:
      'Nemotron 3.5 Lightning (30B) - contexte ultra-étendu 1M, optimisé vitesse et entreprise'
  },

  // IBM Granite
  {
    family: 'IBM Granite',
    id: 'granite3.3:8b',
    description: 'Granite 3.3 (8B) - orienté entreprise, sécurité et conformité'
  },
  {
    family: 'IBM Granite',
    id: 'granite4:tiny-h',
    description: 'Granite 4 Tiny-H (6.9B) - très efficace en inférence, faible coût de calcul'
  },
  {
    family: 'IBM Granite',
    id: 'granite4:small-h',
    description: 'Granite 4 Small-H (32.2B) - version large, meilleure qualité en entreprise'
  },
  {
    family: 'IBM Granite',
    id: 'granite4.2:3b',
    description: 'Granite 4.2 (3B) - compact, efficace en inférence, contexte 128K'
  },
  {
    family: 'IBM Granite',
    id: 'granite4.2:8b',
    description: 'Granite 4.2 (8B) - bon équilibre perf/taille, orienté entreprise, contexte 128K'
  },
  {
    family: 'IBM Granite',
    id: 'granite4.2:30b',
    description: 'Granite 4.2 (30B) - version large, meilleure qualité en entreprise, contexte 128K'
  },

  // OpenAI GPT-OSS
  {
    family: 'OpenAI GPT-OSS',
    id: 'gpt-oss:20b',
    description: "GPT-OSS (20B) - premier modèle open-weight d'OpenAI, bon raisonnement général"
  },

  // Embeddings
  {
    family: 'Embeddings',
    id: 'nomic-embed-text:latest',
    description: "Nomic Embed Text - modèle d'embedding léger pour RAG et recherche sémantique"
  },

  // Ornith
  {
    family: 'Ornith',
    id: 'ornith-1.5:9b',
    description: 'Ornith 1.5 (9B) - multimodal texte/image, contexte étendu 256K'
  },
  {
    family: 'Ornith',
    id: 'ornith-1.5:35b',
    description:
      'Ornith 1.5 (35B) - version large multimodale, contexte étendu 256K, meilleure qualité'
  }
]
