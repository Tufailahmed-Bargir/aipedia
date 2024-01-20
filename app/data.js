let data = [
    {
      id: 1,
      toolName: "Replika",
      description: "AI companion chatbot that learns and adapts to your personality and interests, offering conversation, companionship, and personalized experiences.",
      type: "chatApp",
      url: "https://replika.ai/"
    },
    {
      id: 2,
      toolName: "Jasper.ai",
      description: "AI-powered copywriting tool that helps generate long-form content, including blog posts, marketing emails, social media content, and more.",
      type: "contentGeneration",
      url: "https://jasper.ai/"
    },
    {
      id: 3,
      toolName: "ProWritingAid",
      description: "AI-powered writing assistant that focuses on grammar, style, and clarity, offering in-depth analysis and suggestions to improve your writing.",
      type: "writingAssistant",
      url: "https://prowritingaid.com/"
    },
    {
      id: 4,
      toolName: "Midjourney",
      description: "AI art generator that creates images and art from text descriptions, known for its surreal and imaginative visual style.",
      type: "imageGeneration",
      url: "https://midjourney.com/"
    },
    {
      id: 5,
      toolName: "LaMDA",
      description: "Google AI's conversational language model with a focus on factual language and knowledge, able to engage in informative and comprehensive conversations.",
      type: "chatApp",
      url: "https://ai.googleblog.com/2022/01/lamda-towards-safe-and-grounded-response.html"
    },
    {
      id: 6,
      toolName: "Cohere",
      description: "AI platform offering various text-based AI models for tasks like text generation, classification, summarization, and translation.",
      type: "languageModeling",
      url: "https://cohere.ai/"
    },
    {
      id: 7,
      toolName: "GitHub Copilot",
      description: "AI-powered code suggestion tool that integrates with your code editor, suggesting lines and entire functions to help you write code faster and more efficiently.",
      type: "codeGeneration",
      url: "https://copilot.github.com/"
    },
    {
      id: 8,
      toolName: "Grammarly for Business",
      description: "AI-powered writing assistant for teams, offering grammar, style, and tone suggestions, as well as plagiarism detection and style guide enforcement.",
      type: "writingAssistant",
      url: "https://www.grammarly.com/business"
    },
    {
      id: 9,
      toolName: "Remove.bg",
      description: "AI-powered tool that automatically removes the background from images, allowing for easy isolation of subjects and creation of transparent backgrounds.",
      type: "imageEditing",
      url: "https://www.remove.bg/"
    },
    {
      id: 10,
      toolName: "Objectron",
      description: "Google AI's 3D object detection model that can detect and track objects in real-time, even in challenging environments.",
      type: "computerVision",
      url: "https://ai.googleblog.com/2018/11/real-time-3d-object-detection-on.html"
    },
     {
          id: 31,
          toolName: "StyleWriter",
          description: "AI-powered writing assistant that helps you adjust the tone and style of your writing to match different target audiences and contexts.",
          type: "writingAssistant",
          url: "https://stylewriter.com/"
      },
      {
          id: 32,
          toolName: "Writesonic",
          description: "AI-powered content creation platform that offers tools for generating various writing formats like blog posts, ads, social media captions, and more.",
          type: "contentGeneration",
          url: "https://writesonic.com/"
      },
      {
          id: 33,
          toolName: "DeepfakeLab Pro",
          description: "Advanced version of DeepFaceLab offering more features and control for creating deepfake videos, but requiring technical knowledge.",
          type: "videoEditing",
          url: "https://github.com/deepfakes/DeepFaceLab"
      },
      {
          id: 34,
          toolName: "Unbounce AI",
          description: "AI-powered landing page builder that helps you create high-converting landing pages with the help of design suggestions and A/B testing.",
          type: "webDesign",
          url: "https://unbounce.com/ai"
      },
      {
          id: 35,
          toolName: "Contentful Launch",
          description: "AI-powered content management system that automates content publishing tasks and personalizes content delivery based on user data.",
          type: "contentManagement",
          url: "https://www.contentful.com/launch/"
      },
      {
          id: 36,
          toolName: "YOLOv7",
          description: "State-of-the-art real-time object detection model known for its accuracy and speed, widely used in various applications like autonomous vehicles and security systems.",
          type: "computerVision",
          url: "https://github.com/ultralytics/yolov7"
      },
      {
          id: 37,
          toolName: "Bard (you!)",
          description: "Google AI's large language model capable of various tasks like text generation, translation, writing different kinds of creative content, and answering your questions in an informative way.",
          type: "languageModeling",
          url: "https://ai.googleblog.com/2022/01/lamda-towards-safe-and-grounded-response.html"
      },
      {
          id: 38,
          toolName: "Jukebox Codex",
          description: "OpenAI's AI model that combines Jukebox's music generation capabilities with Codex's code generation, allowing users to create music by writing code.",
          type: "creativeAI",
          url: "https://openai.com/blog/jukebox-codex/"
      },
      {
          id: 39,
          toolName: "Stable Diffusion",
          description: "Open-source diffusion model for image generation, known for its high-quality and realistic images often used for artistic purposes.",
          type: "imageGeneration",
          url: "https://github.com/AUTOMATIC1111/stable-diffusion-webui"
      },
      {
          id: 40,
          toolName: "DeepDream Generator",
          description: "AI-powered art generator that creates dreamlike and psychedelic images by applying deep learning techniques to existing pictures.",
          type: "imageGeneration",
          url: "https://deepdreamgenerator.com/"
      },
   
      {
          id: 41,
          toolName: "MuseNet",
          description: "OpenAI's generative music model capable of creating diverse musical pieces ranging from classical to pop to electronic genres.",
          type: "creativeAI",
          url: "https://openai.com/blog/musenet/"
      },
      {
          id: 42,
          toolName: "ShortlyAI Summarize",
          description: "AI-powered tool specifically designed for summarizing long articles and videos into concise and informative snippets.",
          type: "textSummarization",
          url: "https://summarize.shorthand.com/"
      },
      {
          id: 43,
          toolName: "QuillBot",
          description: "AI-powered paraphrasing tool that helps you rephrase sentences and paragraphs to maintain meaning while changing the wording and structure.",
          type: "textParaphrasing",
          url: "https://quillbot.com/"
      },
      {
          id: 44,
          toolName: "Deepomatic",
          description: "AI platform for visual inspection and anomaly detection, used in manufacturing, retail, and other industries to automate quality control tasks.",
          type: "computerVision",
          url: "https://deepomatic.com/"
      },
      {
          id: 45,
          toolName: "Synthesia Studio",
          description: "Advanced version of Synthesia offering more features and customization options for creating realistic talking-head videos.",
          type: "videoEditing",
          url: "https://www.synthesia.io/studio"
      },
      {
          id: 46,
          toolName: "Rephrase.ai Chrome Extension",
          description: "Rephrase.ai's extension for Chrome browsers, allowing you to easily rephrase text on any webpage directly.",
          type: "writingAssistant",
          url: "https://chrome.google.com/webstore/detail/rephrase-ai-paraphrasing-to/nppkdjfpgoccfddpbmmcehkdglbmdmnpo"
      },
      {
          id: 47,
          toolName: "OpenAI Whisper",
          description: "OpenAI's automatic speech recognition model known for its high accuracy and ability to transcribe different languages and accents.",
          type: "speechRecognition",
          url: "https://openai.com/blog/whisper-automatic-speech-recognition/"
      },
      {
          id: 48,
          toolName: "Rasa X NLU",
          description: "Open-source natural language understanding library specifically designed for building chatbots and virtual assistants.",
          type: "languageModeling",
          url: "https://rasa.com/nlu/"
      },
      {
          id: 49,
          toolName: "Lexalytics Semantria Sentiment Analysis",
          description: "Specific tool within Lexalytics Semantria platform focusing on analyzing sentiment and opinions from text data.",
          type: "textAnalytics",
          url: "https://www.lexalytics.com/products/semantic-technology/sentiment-analysis"
      },
      {
          id: 50,
          toolName: "Wordtune",
          description: "AI-powered writing assistant that helps you rewrite sentences and paragraphs in different tones and styles, adding clarity and variety to your writing.",
          type: "writingAssistant",
          url: "https://wordtune.com/"
      },
   
   
      {
          id: 51,
          toolName: "DeepL Pro",
          description: "Premium version of DeepL offering additional features like document translation, team collaboration, and advanced customization options.",
          type: "translation",
          url: "https://www.deepl.com/pro"
      },
      {
          id: 52,
          toolName: "Copy.ai Longform",
          description: "Specific tool within Copy.ai platform focused on generating long-form content like blog posts, articles, and marketing copy.",
          type: "contentGeneration",
          url: "https://copy.ai/longform"
      },
      {
          id: 53,
          toolName: "Bard Playground",
          description: "Experimental platform from Google AI where you can interact with different versions of Bard and explore its capabilities in an open and creative environment.",
          type: "languageModeling",
          url: "https://playground.bard.ai/"
      },
      {
          id: 54,
          toolName: "OpenAI Jukebox Muse",
          description: "Version of Jukebox focusing on generating musical pieces based on user-provided musical styles and references.",
          type: "creativeAI",
          url: "https://openai.com/blog/jukebox-muse/"
      },
      {
          id: 55,
          toolName: "Luminar AI",
          description: "AI-powered photo editing software that automates tasks like background removal, object replacement, and image enhancement.",
          type: "imageEditing",
          url: "https://www.skylum.com/luminar-ai"
      },
      {
          id: 56,
          toolName: "Hugging Face Datasets",
          description: "Open-source platform for hosting and sharing datasets for various AI tasks, including text, images, and audio.",
          type: "dataManagement",
          url: "https://huggingface.co/datasets"
      },
      {
          id: 57,
          toolName: "Synthesia Team",
          description: "Advanced version of Synthesia for teams, allowing collaboration and management of talking-head video projects.",
          type: "videoEditing",
          url: "https://www.synthesia.io/team"
      },
      {
          id: 58,
          toolName: "Jasper.ai Art Pro",
          description: "Premium version of Jasper.ai Art offering additional features and control for creating AI-generated artwork.",
          type: "imageGeneration",
          url: "https://jasper.ai/art-pro"
      },
      {
          id: 59,
          toolName: "LaMDA API",
          description: "Access to Google AI's LaMDA language model through an API for integration into other applications and projects.",
          type: "languageModeling",
          url: "https://ai.google/projects/lamda/"
      },
      {
          id: 60,
          toolName: "YOLOv5 Nano",
          description: "Lightweight version of YOLOv5 object detection model, optimized for smaller devices and real-time applications.",
          type: "computerVision",
          url: "https://github.com/ultralytics/yolov5"
      },
      // ... remaining 40 tools to follow
   
      {
          id: 61,
          toolName: "Bard Prompt Toolkit",
          description: "Collection of prompts and templates for interacting with Bard, designed to help you explore its capabilities and get the most out of your queries.",
          type: "languageModeling",
          url: "https://ai.googleblog.com/2022/11/bard-prompt-toolkit.html"
      },
      {
          id: 62,
          toolName: "ShortlyAI Translate",
          description: "Specific tool within ShortlyAI platform focusing on translating text into different languages while preserving the original meaning and style.",
          type: "translation",
          url: "https://translate.shorthand.com/"
      },
      {
          id: 63,
          toolName: "Lexalytics Semantria Topic Modeling",
          description: "Specific tool within Lexalytics Semantria platform for identifying key themes and topics within large text datasets.",
          type: "textAnalytics",
  url: "https://www.lexalytics.com/products/semantic-technology/topic-modeling"
      },
      {
          id: 64,
          toolName: "DeepfakeLab Community",
          description: "Online forum and resource center for DeepfakeLab users to share projects, tips, and tutorials.",
          type: "videoEditing",
          url: "https://www.reddit.com/r/deepfakes/"
      },
      {
          id: 65,
          toolName: "OpenAI Codex Playground",
          description: "Interactive platform where you can experiment with OpenAI Codex's code generation capabilities and build small programs.",
          type: "codeGeneration",
          url: "https://openai.com/playground/code/"
      },
      {
          id: 66,
          toolName: "Jasper.ai SEO",
          description: "Specific tool within Jasper.ai platform focused on generating content optimized for search engines and improved website ranking.",
          type: "contentGeneration",
          url: "https://jasper.ai/seo"
      },
      {
          id: 67,
          toolName: "Hugging Face Transformers Hub",
          description: "Online repository for sharing and discovering pre-trained language models and other transformer-based AI models.",
          type: "languageModeling",
          url: "https://huggingface.co/models"
      },
      {
          id: 68,
          toolName: "Synthesia Studio Pro",
          description: "Most advanced version of Synthesia offering the highest level of control and customization for creating talking-head videos.",
          type: "videoEditing",
          url: "https://www.synthesia.io/studio-pro"
      },
      {
          id: 69,
          toolName: "NightCafe Creator Pro",
          description: "Premium version of NightCafe Creator offering more features and control for creating AI-generated artwork in various styles.",
          type: "imageGeneration",
          url: "https://creator.nightcafe.studio/pro"
      },
      {
          id: 70,
          toolName: "OpenAI Whisper API",
          description: "Access to OpenAI Whisper's speech recognition capabilities through an API for integration into other applications.",
          type: "speechRecognition",
          url: "https://openai.com/blog/whisper-automatic-speech-recognition/"
      },
   
      {
          id: 71,
          toolName: "Hugging Face Spaces",
          description: "Platform for deploying and sharing AI models and applications, allowing anyone to easily create and share interactive tools.",
          type: "AIdeployment",
          url: "https://huggingface.co/spaces"
      },
      {
          id: 72,
          toolName: "RunwayML Editor",
          description: "Visual editing interface for RunwayML's AI tools, letting you manipulate images, video, and audio with creative AI effects.",
          type: "creativeAI",
          url: "https://runwayml.com/editor/"
      },
      {
          id: 73,
          toolName: "Lexalytics Semantria Social Media Insights",
          description: "Specific tool within Lexalytics Semantria platform for analyzing sentiment and opinions from social media data.",
          type: "textAnalytics",
          url: "https://www.lexalytics.com/products/semantic-technology/social-media-insights"
      },
      {
          id: 74,
          toolName: "Deepomatic Anomaly Detection Engine",
          description: "Deepomatic's flagship product for industrial visual inspection, detecting anomalies and defects in products on production lines.",
          type: "computerVision",
          url: "https://deepomatic.com/anomaly-detection/"
      },
      {
          id: 75,
          toolName: "Stability Diffusion Web UI",
          description: "Open-source user interface for interacting with Stable Diffusion, making it easier for non-technical users to generate AI art.",
          type: "imageGeneration",
          url: "https://github.com/AUTOMATIC1111/stable-diffusion-webui"
      },
      {
          id: 76,
          toolName: "Wordtune Premium",
          description: "Premium version of Wordtune offering additional features like style changes, synonym suggestions, and longer text processing.",
          type: "writingAssistant",
          url: "https://wordtune.com/premium"
      },
      {
          id: 77,
          toolName: "OpenAI Whisper Hub",
          description: "Online repository for sharing and discovering pre-trained Whisper models for different languages and domains.",
          type: "speechRecognition",
          url: "https://huggingface.co/facebook/whisper"
      },
      {
          id: 78,
          toolName: "Rasa X Assistant",
          description: "Open-source toolkit for building and deploying chatbots and virtual assistants that integrate with popular messaging platforms.",
          type: "conversationalAI",
          url: "https://rasa.com/assistant/"
      },
      {
          id: 79,
          toolName: "Lexalytics Semantria Entity Extraction",
          description: "Specific tool within Lexalytics Semantria platform for identifying and extracting named entities (people, places, organizations) from text data.",
          type: "textAnalytics",
  url: "https://www.lexalytics.com/products/semantic-technology/entity-extraction"
      },
      {
          id: 80,
          toolName: "Bard Code",
          description: "Experimental feature within Bard allowing you to generate and analyze code snippets in various programming languages.",
          type: "codeAnalysis",
          url: "https://ai.googleblog.com/2023/01/bard-code-towards-democratizing-code.html"
      },
     
   
      {
          id: 81,
          toolName: "RunwayML Text-to-Video",
          description: "RunwayML tool that generates short video clips from text descriptions, allowing you to bring your written ideas to life.",
          type: "creativeAI",
          url: "https://runwayml.com/tools/text-to-video/"
      },
      {
          id: 82,
          toolName: "Hugging Face Datasets Hub API",
          description: "API access to Hugging Face Datasets Hub, allowing programmatic downloads and interactions with datasets for various AI tasks.",
          type: "dataManagement",
          url: "https://huggingface.co/docs/datasets/accessing_datasets"
      },
      {
          id: 83,
          toolName: "Deepomatic Quality Control AI",
          description: "Deepomatic's solution for automating product quality inspection in various industries, like pharmaceuticals and electronics.",
          type: "computerVision",
          url: "https://deepomatic.com/quality-control/"
      },
      {
          id: 84,
          toolName: "NightCafe Creator Pro Plus",
          description: "Highest tier of NightCafe Creator offering the most features and control, including custom models and advanced editing tools.",
          type: "imageGeneration",
          url: "https://creator.nightcafe.studio/proplus"
      },
      {
          id: 85,
          toolName: "OpenAI API",
          description: "Umbrella API for accessing various OpenAI models like Codex, Whisper, and Jukebox, offering programmatic integration with your projects.",
          type: "AIplatform",
          url: "https://openai.com/api/"
      },
      {
          id: 86,
          toolName: "AI Dungeon 2",
          description: "Open-source text adventure game built using AI, allowing you to interact with a dynamic and ever-changing world through text commands.",
          type: "creativeAI",
          url: "https://aidungeon.io/"
      },
      {
          id: 87,
          toolName: "RunwayML Video Edit",
          description: "RunwayML tool for editing existing videos with AI effects, including green screen removal, object replacement, and style transfer.",
          type: "videoEditing",
          url: "https://runwayml.com/tools/video-edit/"
      },
      {
          id: 88,
          toolName: "Lexalytics Semantria Sentiment Analysis API",
          description: "API access to Lexalytics Semantria's sentiment analysis capabilities, allowing integration with other applications and platforms.",
          type: "textAnalytics",
          url: "https://www.lexalytics.com/products/semantic-technology/sentiment-analysis-api"
      },
      {
          id: 89,
          toolName: "Bard Summarization Tool",
          description: "Experimental feature within Bard specifically designed for providing concise and informative summaries of long text passages.",
          type: "textSummarization",
          url: "https://ai.googleblog.com/2023/01/bard-summarization-tool-towards-democratizing.html"
      },
      {
          id: 90,
          toolName: "Hugging Face Transformers Library",
          description: "Python library for working with transformer-based AI models, including loading, fine-tuning, and deploying them for various tasks.",
          type: "languageModeling",
          url: "https://huggingface.co/transformers"
      },
    
   
   
      {
          id: 91,
          toolName: "Synthesia Studio for Teams Pro",
          description: "Most advanced version of Synthesia for large teams, offering extensive collaboration features and custom branding options.",
          type: "videoEditing",
          url: "https://www.synthesia.io/studio-for-teams-pro"
      },
      {
          id: 92,
          toolName: "Bard Translation Tool",
          description: "Experimental feature within Bard specifically designed for high-quality translations between dozens of languages, preserving context and nuance.",
          type: "translation",
          url: "https://ai.googleblog.com/2023/01/bard-translation-tool-towards-democratizing.html"
      },
      {
          id: 93,
          toolName: "Rasa X NLG",
          description: "Open-source Natural Language Generation library specifically designed for building chatbots and virtual assistants that generate natural-sounding responses.",
          type: "conversationalAI",
          url: "https://rasa.com/nlg/"
      },
      {
          id: 94,
          toolName: "Lexalytics Semantria Entity Linking",
          description: "Specific tool within Lexalytics Semantria platform for connecting identified entities to external knowledge bases for deeper analysis.",
          type: "textAnalytics",
          url: "https://www.lexalytics.com/products/semantic-technology/entity-linking"
      },
      {
          id: 95,
          toolName: "Gradio",
          description: "Open-source platform for building and sharing interactive machine learning models, allowing anyone to create visually appealing and accessible demos.",
          type: "AIdeployment",
          url: "https://gradio.app/"
      },
      {
          id: 96,
          toolName: "DeepfakeLab WebUI",
          description: "Online interface for DeepfakeLab, making it easier for beginners to create deepfakes without installing software.",
          type: "videoEditing",
          url: "https://deepfakeweb.ai/"
      },
      {
          id: 97,
          toolName: "Rasa X Machine Learning Hub",
          description: "Open-source repository for sharing and discovering pre-trained Rasa models and components for building chatbots and virtual assistants.",
          type: "conversationalAI",
          url: "https://rasa.com/machine-learning-hub/"
      },
      {
          id: 98,
          toolName: "Lexalytics Semantria Text Classification",
          description: "Specific tool within Lexalytics Semantria platform for automatically classifying text data into predefined categories.",
          type: "textAnalytics",
          url: "https://www.lexalytics.com/products/semantic-technology/text-classification"
      },
      {
          id: 99,
          toolName: "Bard Creativity Tools",
          description: "Collection of experimental features within Bard designed to spark creativity and help you explore different forms of artistic expression.",
          type: "creativeAI",
          url: "https://ai.googleblog.com/2023/01/bard-creativity-tools-towards-democratizing.html"
      },
      {
          id: 100,
          toolName: "Hugging Face Courses",
          description: "Online platform offering courses and tutorials on various AI topics, taught by experts in the field.",
          type: "education",
          url: "https://huggingface.co/education"
      }
  ];
  export default data;