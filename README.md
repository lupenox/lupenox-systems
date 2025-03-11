Lupenox Systems 🌐🕵️‍♂️

Lupenox Systems is a privacy-first platform offering AI-driven smart home and web solutions. This project is designed with security, efficiency, and user-centric customization in mind. It also includes a Tor hidden service for anonymous and private browsing.
🌐 Live Site

    Clearnet: www.lupenoxsystems.com (Hosted on Vercel)
    .onion: plfxe3vmvztzm2ngkiqzup3hlaqig25ln6wc2mdysdf3jcnhotvsanqd.onion (Hosted on Oracle Cloud)

⚠️ The .onion site is accessible only through the Tor Browser.

⚙️ Features

    🔒 Privacy-focused: Hosted as a Tor hidden service.
    🌙 Dark Mode: Seamless dark/light mode toggle.
    🔄 .onion & Clearnet Switch: Users can easily switch between the clearnet and .onion version.
    💻 Responsive Design: Optimized for desktop and mobile.
    ⚡ Fast & Lightweight: Built with React and served with Nginx.
    ☁️ Always Available: .onion version hosted on Oracle Cloud for continuous uptime.
    🔧 Custom Configuration: Manual adjustments in .json config files and deployment settings for optimal performance.

🚀 Tech Stack

    Frontend: React, CSS, Bootstrap, HTML, JavaScript
    Backend: Nginx (for static file hosting)
    Config & Scripting: JSON, Nano (for Linux-based file editing), Bash, Zsh
    Security: Tor Hidden Service, Oracle Cloud Infrastructure
    Deployment:
        Clearnet: Vercel
        .onion: Oracle Cloud Always Free Tier

📦 Deployment Instructions
Clearnet Deployment (Vercel)

    Link the repository to Vercel.
    Set the build command to npm run build.
    Set the output directory to build.

.onion Deployment (Oracle Cloud)

    Use Nginx to serve the static files from the build directory.
    Configure the Tor service to expose the .onion domain.

🛠️ Setup & Local Development

    Clone the Repository

git clone https://github.com/0xlapiere3/lupenox-systems.git
cd lupenox-systems

    Install Dependencies

npm install

    Run Development Server

npm start

    Build for Production

npm run build

🤝 Acknowledgments

    Tor Project for privacy-first browsing.
    Oracle Cloud for hosting the .onion site.
    Vercel for seamless clearnet deployment.
    Bootstrap for responsive design.
