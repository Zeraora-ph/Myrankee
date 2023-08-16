# MyRankee: League of Legends ELO Lookup

![MyRankee Logo](https://raw.githubusercontent.com/your-username/myrankee/main/client/public/logo.png)

**MyRankee** is a web application built using React and Node.js Express that allows users to effortlessly discover the ELO (skill level) of a League of Legends player using their username. This repository contains the complete source code and resources necessary for implementing this feature-rich functionality.

## Features

- Instantly retrieve a League of Legends player's ELO by entering their username.
- Display the player's current ELO, along with a snapshot of their recent match history.
- Clean and intuitive user interface for easy navigation and interaction.

## Technologies Utilized

- **React**: Front-end user interface, providing an engaging and responsive experience.
- **Node.js Express**: Back-end server responsible for handling API requests and data processing.
- **Riot Games API**: Official League of Legends API employed to fetch comprehensive player data.

## Getting Started

Follow these steps to set up and run the project locally:

1. Clone the repository to your local environment: git clone https://github.com/Zeraora-ph/myrankee.git
2. Navigate to the project directory: cd myrankee
3. Set up the client:

- Navigate to the `client` directory: `cd client`
- Install dependencies: `npm install`
- Start the client: `npm start`

4. Set up the server:

- Navigate to the `server` directory: `cd ../server`
- Install dependencies: `npm install`
- Rename `.env.example` to `.env` and insert your Riot Games API key
- Start the server: `npm start`

5. Open your preferred web browser and access `http://localhost:3000` to utilize the MyRankee ELO lookup tool.

## Contributing

Contributions are warmly welcome! If you identify any issues or wish to contribute additional features, please don't hesitate to open an issue or submit a pull request.

## Legal Notice

This project is an independent tool and is not associated, endorsed, sponsored, or authorized by Riot Games or any other company affiliated with League of Legends. Employ at your own discretion.

## License

This project is licensed under the [MIT License](LICENSE).
