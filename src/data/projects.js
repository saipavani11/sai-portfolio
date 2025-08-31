import mindforestImg from "../assets/background.jpeg";
import portfolioImg from "../assets/background.jpeg";
import restaurantImg from "../assets/sizzle-savour.png";
import tcpUdp from "../assets/tcp-udp.png"
import knn from "../assets/data-mining.png"
import snakeGameImg from "../assets/snake.png"
import clarity from "../assets/summary.png"


export const projects = [
  {
  id: "clarity-ai",
  title: "Clarity AI – Summarization & QA Platform",
  shortDescription: "A full-stack application for AI-powered summarization and Q&A with dual access levels.",
  longDescription: `
    Clarity AI is a full-stack platform that allows users to upload PDFs, text, or audio files 
    and receive AI-generated summaries. It also supports chat-based question answering (QA), 
    history tracking, and dual access modes for guest and authenticated users. 

    Free users can upload text/PDFs and ask one question per file, while authenticated users 
    gain access to unlimited chat-based QA, audio summarization, and personalized dashboards. 
    The backend is built with FastAPI and MongoDB for authentication, file summaries, and chat history, 
    while the frontend uses React for a modern, chat-like interface.
  `,
  image: clarity, // screenshot of your dashboard or chat UI
  technologies: ["FastAPI", "React", "MongoDB", "JWT Auth", "OpenRouter API", "Node.js"],
  github: "https://github.com/saipavani11/summary-generator",
  demo: "https://summary-generator-six.vercel.app/"
},

  {
  id: "snake-game-csharp",
  title: "Snake Byte",
  shortDescription: "A desktop implementation of the classic Snake game built with C# and WPF.",
  longDescription: `
    This project is a recreation of the classic Snake game using C# and Windows 
    Presentation Foundation (WPF). The implementation emphasizes clean object-oriented 
    design, with classes handling game state, grid management, snake movement, and 
    collision detection. 
    
    The game features dynamic snake movement, real-time collision handling, score 
    tracking, and randomized food spawning. Visual elements (head, body, food, 
    dead snake states) are rendered with images for an engaging UI. Direction 
    buffering ensures responsive controls, and the game gracefully handles 
    game-over conditions.
    
    This project provided hands-on experience with event-driven programming, 
    grid-based logic, and resource management in WPF while reinforcing 
    object-oriented design principles in C#.
  `,
  image: snakeGameImg,
  technologies: ["C#", "WPF", "OOP", "Game Development"],
  github: "https://github.com/saipavani11/snake-game",
  demo: "https://github.com/user-attachments/files/21075334/snake-game.zip"
},
  {
  id: "knn-iris",
  title: "KNN Classification on Iris Dataset",
  shortDescription: "Implemented K-Nearest Neighbors algorithm to classify iris flower species using R.",
  longDescription: `
    This project demonstrates the use of the K-Nearest Neighbors (KNN) algorithm
    for supervised classification using the well-known Iris dataset. The workflow
    includes data preprocessing, normalization, train-test splitting, and model
    evaluation using a confusion matrix. Visualizations in both 2D and 3D were
    generated to better understand feature distribution and classification boundaries.
    
    Key outcomes include high accuracy in classifying Setosa, while overlaps
    between Versicolor and Virginica highlighted challenges in feature similarity.
    The project provided practical insights into distance-based classification,
    model evaluation, and visualization techniques in R.
  `,
  image: knn, 
  technologies: ["R", "Machine Learning", "KNN", "Data Visualization"],
  github: "https://github.com/saipavani11/knn-iris",
  demo: ""
},

  {
  id: "tcp-udp-communication",
  title: "TCP & UDP Communication System",
  shortDescription: "A Python-based client-server system demonstrating reliable (TCP) and unreliable (UDP) communication.",
  longDescription: `
    This project implements both TCP and UDP communication models in Python using the socket library.  
    - The TCP module provides reliable, connection-oriented communication between client and server.  
      It supports message exchange, file transfer, and round-trip time measurement.  
    - The UDP module demonstrates connectionless transmission, packet sequencing, 
      simulated packet drops, and delay measurements, helping visualize the differences between TCP and UDP.  
    
    This project is useful for understanding how data is transmitted over networks, 
    the trade-offs between TCP reliability vs. UDP speed, and how packet loss and delay can be measured.
  `,
  image: tcpUdp, // replace with a screenshot or diagram of your project
  technologies: ["Python", "Socket Programming", "Networking"],
  github: "https://github.com/saipavani11/tcp-udp-rtt-analysis",
  demo: "" // (not deployable, but you can leave blank or link to a demo video/README)
},
  {
  id: "sizzle-savour",
  title: "Sizzle & Savour",
  shortDescription: "A restaurant website with a clean and modern UI design.",
  longDescription: `
    Sizzle & Savour is a basic restaurant website project focused on UI/UX design. 
    It showcases an elegant landing page with a stylish layout, menu sections, 
    and responsive design. The project is primarily a front-end implementation 
    to demonstrate creativity in web design and structuring.
  `,
  image: restaurantImg, // replace with your actual screenshot/image import
  technologies: ["HTML", "CSS", "JavaScript"],
  github: "https://github.com/saipavani11/projectify",
  demo: "https://sizzleandsavour.vercel.app/"
}
];
