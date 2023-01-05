# Environement basic

shortcuts (on linux mint, ubuntu, ...):
  - ctrl + shift + t = open new tab
  - ctrl + t = open new terminal

# For run Source
First terminal:
```sh
git clone git@github.com:xdrkush/tuto-node-typescript.git
cd tuto-node-typescript/00-intro
nvm i 14.18.2
npm i
npm run dev:tsc
```
Second terminal:
```sh
npm run dev:node
```

# Step by Step
Create project:
```sh
mkdir myProject
cd myProject
npm init -y
npm install --save-dev typescript
```

Create "tsconfig.json":
```json
{
  "compilerOptions": {
    "module": "commonjs",
    "esModuleInterop": true,
    "target": "es6",
    "moduleResolution": "node",
    "sourceMap": true,
    "outDir": "dist"
  },
  "lib": ["es2015"]
}
```

Install express with compiler
```sh
npm install --save express
npm install -save-dev @types/express
```

Create "src/app.ts":
```js
import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
```

Compile "src/app.ts":
```sh
npx tsc
```

Run "dist/app.js":
```sh
node dist/app.js
```

# Utils
For developement with ts --watch and nodemon

Edit "package.json":
```json
  ...
  "scripts": {
    "dev:tsc": "npx tsc --watch",
    "dev:node": "nodemon dist/app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  ...
```

And run with 2 terminal:
First terminal:
```sh
npm run dev:tsc
```
Second terminal:
```sh
npm run dev:node
```

# Source
  - https://www.digitalocean.com/community/tutorials/setting-up-a-node-project-with-typescript

# Docs
  - Official: https://www.typescriptlang.org/
  - Official CompilerOptions: https://www.typescriptlang.org/docs/handbook/compiler-options.html