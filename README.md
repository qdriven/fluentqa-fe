# README

fluent-qa frontend mono repo by 
- pnpm
- turbo


## Project layout

```
packages:
  - 'apps/*'
  - 'packages/*'
  - 'websites/*'
```

## package.json

```json
{
  "name": "fluentqa-fe",
  "version": "1.0.0",
  "description": "fluentqa mono repo",
  "private": true,
  "author": "fluent-qa",
  "workspaces": [
    "app/*",
    "packages/*",
    "websites/*"
  ],
  "scripts": {
    "build": "turbo run build",
    "dev": "turbo run dev",
    "start": "turbo run start",
    "lint": "turbo run lint",
    "clean": "turbo run clean"
  },
  "devDependencies": {
    "eslint": "^8.28.0",
    "eslint-config-turbo": "latest",
    "turbo": "latest"
  },
  "packageManager": "pnpm@7.26.0"
}
```

## turbo settings

```json
{
    "$schema": "https://turbo.build/schema.json",
    "pipeline": {
      "build": {
        "dependsOn": ["^build"],
        "outputs": [".next/**", "dist/**"]
      },
      "test": {
        "dependsOn": ["^build"],
        "outputs": []
      },
      "lint": {
        "outputs": []
      },
      "dev": {
        "cache": false
      },
      "start": {
        "cache": false
      },
      "clean": {
        "cache": false
      }
    }
  }
  
```

