export const ollamaCatalog: OllamaCatalog[] = [
  // Meta Llama
  {
    family: 'Meta Llama',
    id: 'llama3.2:3b',
    description:
      'Llama 3.2 (1B/3B) - polyvalent, excellent rapport perf/taille pour hardware limité'
  },
  {
    family: 'Meta Llama',
    id: 'llama3.1:8b',
    description: "Llama 3.1 (8B) - bon équilibre raisonnement général et suivi d'instructions"
  },
  {
    family: 'Meta Llama',
    id: 'llama3.3:70b',
    description: 'Llama 3.3 (70B) - référence généraliste haute qualité, disponible en quantized'
  },

  // Microsoft Phi
  {
    family: 'Microsoft Phi',
    id: 'phi4:14b',
    description: 'Phi4 (14B) - spécialisé raisonnement logique et mathématiques, très fort en STEM'
  },
  {
    family: 'Microsoft Phi',
    id: 'phi3.5:3.8b',
    description: 'Phi3.5 (3.8B) - optimisé edge computing, rapide et léger'
  },
  {
    family: 'Microsoft Phi',
    id: 'phi4-mini:3.8b',
    description: 'Phi4 Mini (3.8B) - version compacte de Phi4, garde le raisonnement à moindre coût'
  },

  // Alibaba Qwen
  {
    family: 'Alibaba Qwen',
    id: 'qwen2.5:7b',
    description: 'Qwen 2.5 (7B) - excellent généraliste multilingue, très bon en français/chinois'
  },
  {
    family: 'Alibaba Qwen',
    id: 'qwen2.5:14b',
    description: 'Qwen 2.5 (14B) - version intermédiaire, meilleure cohérence sur tâches complexes'
  },
  {
    family: 'Alibaba Qwen',
    id: 'qwen2.5:32b',
    description: 'Qwen 2.5 (32B) - version large, meilleure cohérence sur tâches complexes'
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
    id: 'qwen3:14b',
    description: 'Qwen 3 (14B) - nouvelle génération, meilleur raisonnement'
  },
  {
    family: 'Alibaba Qwen',
    id: 'qwen3:30b',
    description: 'Qwen 3 (30B) - nouvelle génération, contexte étendu'
  },
  {
    family: 'Alibaba Qwen',
    id: 'qwq:32b',
    description: 'QwQ (32B) - spécialisé raisonnement type o1, chaîne de pensée explicite'
  },

  // Mistral AI
  {
    family: 'Mistral AI',
    id: 'mistral:7b',
    description: 'Mistral (7B) - rapide et fiable, bon choix par défaut open-source européen'
  },
  {
    family: 'Mistral AI',
    id: 'mistral-nemo:12b',
    description: 'Mistral Nemo (12B) - contexte étendu 128K, idéal pour longs documents'
  },
  {
    family: 'Mistral AI',
    id: 'mistral-small3.2:24b',
    description: 'Mistral Small 3.2 (24B) - bon compromis qualité/vitesse pour production'
  },

  // Google Gemma
  {
    family: 'Google Gemma',
    id: 'gemma2:9b',
    description: 'Gemma 2 (9B) - solide compréhension texte et sécurité, bon pour prod'
  },
  {
    family: 'Google Gemma',
    id: 'gemma2:27b',
    description: 'Gemma 2 (27B) - version large, meilleure qualité de génération'
  },
  {
    family: 'Google Gemma',
    id: 'gemma3:12b',
    description: 'Gemma 3 (12B) - nouvelle génération, multimodal et contexte étendu'
  },
  {
    family: 'Google Gemma',
    id: 'gemma3:27b',
    description: 'Gemma 3 (27B) - nouvelle génération, meilleure qualité multimodale'
  },

  // DeepSeek
  {
    family: 'DeepSeek',
    id: 'deepseek-r1:14b',
    description: 'DeepSeek R1 (14B) - spécialisé raisonnement chaîne de pensée (CoT)'
  },
  {
    family: 'DeepSeek',
    id: 'deepseek-r1:32b',
    description: 'DeepSeek R1 (32B) - version large, raisonnement CoT renforcé'
  },
  {
    family: 'DeepSeek',
    id: 'deepseek-v3:latest',
    description: 'DeepSeek V3 - généraliste performant en analyse et synthèse'
  },

  // 01.AI Yi
  {
    family: '01.AI Yi',
    id: 'yi:9b',
    description: 'Yi (9B) - bon en compréhension bilingue chinois/anglais, compact'
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

  // OpenAI GPT-OSS
  {
    family: 'OpenAI GPT-OSS',
    id: 'gpt-oss:20b',
    description: "GPT-OSS (20B) - premier modèle open-weight d'OpenAI, bon raisonnement général"
  },
  {
    family: 'OpenAI GPT-OSS',
    id: 'gpt-oss:120b',
    description: 'GPT-OSS (120B) - version large, meilleure qualité mais très gourmande'
  },

  // NVIDIA Nemotron
  {
    family: 'NVIDIA Nemotron',
    id: 'nemotron-mini:4b',
    description: 'Nemotron Mini (4B) - optimisé roleplay et function calling, léger'
  },
  {
    family: 'NVIDIA Nemotron',
    id: 'nemotron:70b',
    description: 'Nemotron (70B) - fine-tuné pour usage entreprise et assistants'
  },

  // Moonshot AI Kimi
  {
    family: 'Moonshot AI Kimi',
    id: 'kimi-k2:latest',
    description: 'Kimi K2 - très fort en contexte long et agentique, tâches multi-étapes'
  },

  // Cohere
  {
    family: 'Cohere',
    id: 'command-r7b:latest',
    description: 'Command R7B - orienté RAG et tool use, bon pour recherche augmentée'
  },
  {
    family: 'Cohere',
    id: 'aya-expanse:8b',
    description: 'Aya Expanse (8B) - spécialisé multilingue (23 langues)'
  },
  {
    family: 'Cohere',
    id: 'aya-expanse:32b',
    description: 'Aya Expanse (32B) - version large, meilleure qualité multilingue'
  },

  // Autres généralistes
  {
    family: 'Autres généralistes',
    id: 'falcon3:10b',
    description: 'Falcon 3 (10B) - TII Abu Dhabi, généraliste efficace multilingue'
  },
  {
    family: 'Autres généralistes',
    id: 'exaone3.5:7.8b',
    description: 'EXAONE 3.5 (7.8B) - LG AI, généraliste coréen, bon équilibre perf/taille'
  },
  {
    family: 'Autres généralistes',
    id: 'olmo2:13b',
    description: 'OLMo 2 (13B) - Allen AI, focus transparence, entraînement entièrement open'
  },
  {
    family: 'Autres généralistes',
    id: 'internlm2.5:20b',
    description: 'InternLM 2.5 (20B) - Shanghai AI Lab, fort en raisonnement mathématique'
  },

  // Embeddings (utilitaire courant)
  {
    family: 'Embeddings',
    id: 'nomic-embed-text:latest',
    description: "Nomic Embed Text - modèle d'embedding léger pour RAG et recherche sémantique"
  }
]
