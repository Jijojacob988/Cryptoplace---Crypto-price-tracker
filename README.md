# **Cryptocurrency Tracker Web App**

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://aesthetic-mousse-2eec31.netlify.app/)

This is a **React-based Cryptocurrency Tracking Website** that allows users to view real-time cryptocurrency data, including price, market cap, and historical trends. The application fetches data using the **CoinGecko API** and includes a user-friendly UI with search and filtering features.

## 🚀 **Features**
- 🔍 **Search Functionality** – Find any cryptocurrency using the search bar
- 📊 **Real-Time Market Data** – Displays price, 24-hour change, and market cap
- 🔄 **Currency Selector** – View prices in USD, EUR, and INR
- 📈 **Historical Price Chart** – Visualize price trends using Google Charts
- 📋 **Top 10 Cryptocurrencies** – Displayed on the homepage
- 📑 **Detailed Coin Page** – Shows coin-specific details with images and rankings
- 🌍 **Fully Responsive Design** – Works on all screen sizes

## 🛠️ **Tech Stack**
- **Frontend:** React, Tailwind CSS
- **State Management:** React Context API
- **Routing:** React Router
- **API:** CoinGecko API
- **Charting Library:** React Google Charts
- **Deployment:** Vercel

## 📂 **Project Structure**
```
crypto-tracker
├── src
│   ├── components (Navbar, Footer, CoinList, Search, Chart)
│   ├── pages (Home, CoinDetail)
│   ├── context (Global state management)
│   ├── assets (Icons, Images)
│   ├── App.jsx (Main App Component)
│   ├── index.js (Entry Point)
│   ├── styles.css (Global Styles)
├── public (Static Files)
├── package.json
├── README.md
├── LICENSE
```

## 🏗️ **Installation & Setup**
### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/jijojacob988/crypto-tracker.git
cd crypto-tracker
```
### 2️⃣ **Install Dependencies**
```sh
npm install
```
### 3️⃣ **Set Up Environment Variables**
Create a `.env` file in the root folder and add your CoinGecko API key:
```env
REACT_APP_COINGECKO_API_KEY=your_api_key_here
```

### 4️⃣ **Run the Application**
```sh
npm run dev
```
Now open **http://localhost:5173** to use the app.

## 🌐 **Deployment**
The frontend can be accessed live here:
🔗 **[Live Demo](https://aesthetic-mousse-2eec31.netlify.app/)**

The project can be deployed using **Vercel**:
1. Push your project to GitHub.
2. Deploy the frontend using [Vercel](https://vercel.com/).

## 🤝 **Contributing**
Pull requests are welcome! Feel free to open issues for improvements or bug fixes.

## 📜 **License**
This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

Made with ❤️ by **Jijo Jacob**
