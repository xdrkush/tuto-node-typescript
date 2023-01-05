# Environement basic

Create project:
```
mkdir myProject && cd myProject
npm init -y
npm i -D typescript
```

Create "tsconfig.json":
```
{
  "compilerOptions": {
    "target": "es6"
  },
  "lib": ["es2015"]
}
```

Create "app.ts":
```
console.log('Hello World')
```

# Compile
On terminal:
compile your file .ts on .js
```
npx tsc
```
then run "app.js":
```
node app.js
```
(automation for dev in 00-intro and 02-environment)

# Source
  - https://www.digitalocean.com/community/tutorials/setting-up-a-node-project-with-typescript

# Docs
  - Official: https://www.typescriptlang.org/
  - Official CompilerOptions: https://www.typescriptlang.org/docs/handbook/compiler-options.html


