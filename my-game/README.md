# Space Trader - A Gazillionaire-Inspired Game

A space trading game built with Phaser 3 and React, inspired by the classic game Gazillionaire.

## Features

- **Space Navigation**: Fly your ship between planets using arrow keys
- **Trading System**: Buy and sell goods at different planets
- **Planet Exploration**: Visit different planets with unique characteristics
- **Resource Management**: Manage your credits, fuel, and inventory
- **Dynamic Economy**: Prices fluctuate between planets

## Game Structure

### Scenes
- **MainMenuScene**: Game title screen and start button
- **GameScene**: Main space navigation with planets and ship movement
- **PlanetScene**: Planet interaction screen with trading, refueling, and info
- **TradingScene**: Buy and sell goods interface

### Game Mechanics
- **Credits**: Your currency for buying goods
- **Fuel**: Required for space travel (consumed when moving between planets)
- **Inventory**: Goods you can carry and trade
- **Planets**: Each has unique specialties and trade goods

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

The game will be available at `http://localhost:5173`

### Building for Production
```bash
npm run build
```

## Controls

- **Arrow Keys**: Move your ship in space
- **Mouse**: Click on planets to visit them
- **Click**: Interact with UI buttons and trading interface

## Game Assets

The game currently uses placeholder graphics. To add your own assets, place them in the `public/assets/` directory:

- `ship.png` - Player's spaceship
- `planet.png` - Planet graphics
- `space-background.png` - Space background
- `trading-background.png` - Trading interface background
- `planet-background.png` - Planet surface background
- `game-logo.png` - Game logo for main menu

## Project Structure

```
src/
├── game/
│   ├── Game.ts              # Main game configuration
│   ├── GameState.ts         # Game state management
│   └── scenes/
│       ├── MainMenuScene.ts # Main menu
│       ├── GameScene.ts     # Space navigation
│       ├── TradingScene.ts  # Trading interface
│       └── PlanetScene.ts   # Planet interaction
├── App.tsx                  # React app with Phaser integration
└── main.tsx                # React entry point
```

## Development Notes

- The game uses Phaser 3 for the game engine
- React is used for the application wrapper
- TypeScript provides type safety
- Vite handles the build process and development server

## Future Enhancements

- Add proper game assets and sprites
- Implement more complex trading mechanics
- Add space events and encounters
- Include sound effects and music
- Add save/load game functionality
- Implement more planets and trade routes
