# Up And Running Test

## Stack

-   React
-   Redux
-   Redux Thunk

## Installation

Install dependencies via

```
yarn install
```

## Environment tasks

| Environment |    Command     | Description                                                      |
| ----------- | :------------: | ---------------------------------------------------------------- |
| Local       | **yarn start** | Run local Webpack Dev Server / React with hot reloading enabled. |
| Production  | **yarn build** | Run production build.                                            |

Build will create new directory name `dist` and all files will be there

## Other tasks

| Task   |    Command     | Description                     |
| ------ | :------------: | ------------------------------- |
| Clean  | **yarn clean** | Clean `dist` project directory. |
| ESLint | **yarn lint**  | Run ES6 error linter.           |

## Environment variable

All env variable start can be found globally under **_window.com.upandrunning.[name of variable]_**

| Variable    | Description                                         |
| ----------- | :-------------------------------------------------- |
| API_URL     | Base url of REST interface                          |

### Repository structure

```
/
├─ config/           # Project build
│  ├─ webpack/       # Build
│  │  ├─ common.js   # Build related for all environment (env, devtool, manifest, etc...)
│  │  ├─ dev.js      # Local build
│  │  ├─ prop.js     # Production build
|  |─ postcss.con    # PostCSS preprocessor configuration
|
├─ src/
│  ├─ common/        # All common raleted properties
│  │  ├─ history/    # Application history
│  │  ├─ rest/       # Rest clas that encapsulate all needed method / services
│  │  ├─ routes/     # Application routes
│  │  └─ utils/      # utility functions
│  │
│  ├─ components/    # Components
│  │  ├─ layout/     # layout component ( Header, Footer, ... )
│  │  ├─ view/       # Class / Container component
│  │  ├─ widget/     # Small / dumb component
|  |
│  ├─ container/     # Connecting data to smart component
|  |
│  ├─ router/        # Route HOC
|  |
│  ├─ service/
│  │  ├─ action/     # Actions
│  │  ├─ actionCr/   # Creator of actions
│  │  ├─ reducer/    # reducer
│  │
│  ├─ style-helpers/ # Style
│  │  ├─ base/       # Layout foundation
│  │  └─ helper/     # Breakpoint, Functions, Mixins, ...
│  │  └─ theme/      # Project specific component style
│  │
│  └─ www/           # All static related files
│
│─ test/             # Tests
│
├─ .editorconfig     # Code style definitions
├─ .eslintignore     # Ignore style linting
├─ .eslinrc          # Code style rule
├─ manifest.json     # Manifest
├─ Dockerfile        # Container definition
├─ .gitignore        # List of files and folders not tracked by Git
├─ .eslintrc         # Linting preferences for JavasScript
├─ package.json      # Project manifest
├─ yarn.lock         # Project manifest with locked version
├─ server.js         # Node server
└─ README.md         # This file
```
