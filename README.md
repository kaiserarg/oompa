# Oompa: Secure Patient Data Management (proof-of-concept)

Oompa is a full-stack web and mobile cross-platform application designed to securely store and verify patient data using blockchain technology. It offers an innovative solution for healthcare providers to manage patient information with enhanced security, privacy, and integrity.

## Features

- **Web and Mobile Application**: Accessible via web and mobile platforms, catering to different user preferences.
- **Blockchain-Enabled Verification**: Utilizes blockchain technology for the immutable verification of patient data.
- **Smart Contract Integration**: Manages access and permissions for patient data through Ethereum smart contracts.
- **Secure Data Storage**: Stores patient data off-chain with references on the blockchain, ensuring efficiency and privacy.
- **Compliance with Regulations**: Designed to meet healthcare standards, including HIPAA compliance for data privacy and security.

## System Architecture

Oompa consists of the following key components:

- **Frontend**: Developed using React for the web app and React Native for the mobile app.
- **Backend**: Node.js server with an Express.js framework, handling API requests and interactions with the blockchain and database.
- **Blockchain**: Ethereum blockchain for storing hashes and executing smart contracts.
- **Database**: MongoDB for efficient off-chain data storage.

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- Ethereum Blockchain setup (Ganache, for local development)

### Installation

1. Clone the repository
   ```
   git clone [repository_url]
   ```
2. Install dependencies for the backend
   ```
   cd backend
   npm install
   ```
3. Install dependencies for the client
   ```
   cd ../client
   npm install
   ```
4. Set up your environment variables in a `.env` file based on the provided `.env.example`.

### Running the Application

1. Start the backend server:
   ```
   cd backend
   npm start
   ```
2. Run the client application:
   ```
   cd ../client
   npm start
   ```
3. Access the web application at `localhost:3000`.

## Contributing

Contributions to Oompa are welcome. Please ensure to follow the contributing guidelines.

## License

N/A
