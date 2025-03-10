# Lupenox Systems 🌐🕵️‍♂️

**Lupenox Systems** is a cutting-edge platform offering AI-driven smart home and web solutions for a futuristic, secure experience. This project also includes a Tor hidden service for privacy-first browsing.

---

## 🌐 Live Site

- **Clearnet:** [https://www.lupenoxsystems.com](https://www.lupenoxsystems.com) *(Hosted on Vercel)*  
- **.onion:** `plfxe3vmvztzm2ngkiqzup3hlaqig25ln6wc2mdysdf3jcnhotvsanqd.onion` *(Hosted on Oracle Cloud)*

> ⚠️ The `.onion` site is accessible only through the [Tor Browser](https://www.torproject.org/).

---

## ⚙️ Features

- 🔒 **Privacy-focused**: Hosted as a Tor hidden service.  
- 🌙 **Dark Mode**: Seamless dark/light mode toggle.  
- 🕵️‍♂️ **.onion & Clearnet Switch**: Users can easily switch between the clearnet and `.onion` version.  
- 💻 **Responsive Design**: Optimized for desktop and mobile.  
- ⚡ **Fast & Lightweight**: Built with React and served with Nginx.  
- ☁️ **Always Available**: The `.onion` site is hosted on Oracle Cloud, ensuring it stays online even if the local PC is turned off.

---

## 🚀 Tech Stack

- **Frontend:** React, CSS, Bootstrap  
- **Backend:** Nginx (for static file hosting)  
- **Security:** Tor Hidden Service, Oracle Cloud Infrastructure  
- **Hosting:** 
  - **Clearnet:** Vercel  
  - **.onion:** Oracle Cloud Always Free Tier  

---

📦 Deployment Instructions

    Clearnet Deployment (Vercel):
        Link the repository to Vercel.
        Set the build command to npm run build.
        Set the output directory to build.

    .onion Deployment (Oracle Cloud):
        Use Nginx to serve the static files from the build directory.
        Ensure the Tor service is properly configured to expose the .onion domain.

---

🤝 Acknowledgments

    Tor Project for privacy-first browsing.
    Oracle Cloud for hosting the .onion site.
    Vercel for seamless clearnet deployment.
    Bootstrap for responsive design.

## 🛠️ Setup & Deployment

### Clone the Repository  
```bash
git clone https://github.com/0xlapiere3/lupenox-systems.git
cd lupenox-systems
