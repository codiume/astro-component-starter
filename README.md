# Astro Component Starter

A simple starter template to help you start coding your next amazing [astro](https://astro.build) component.

## Running locally

### Using Github interface

This repo can be used to scaffold an [astro](https://astro.build) package. Follow these steps to get started:

1. Press the "Use this template" button at the top of this repo to create a new repo with the contents of this skeleton.
2. Clone the project to your local environment.
3. Have fun creating your package.

### Using Terminal

Clone the project

```bash
  git clone git@github.com:codiume/astro-component-starter.git my-astro-component
```

Go to the project directory

```bash
  cd my-astro-component
```

## Installation

Install dependencies

```bash
  pnpm install
```

Start development server

```bash
  pnpm dev
```

Format your code

```bash
  pnpm format
```

Build your component

```bash
  pnpm build
```

## Publishing to NPM

### Setup GitHub Actions

When you're ready to publish your package to npm, this template is pre-configured with Changesets—a tool that automates versioning and package publishing. By default, the release action is disabled to prevent unintentional publishing from this template.

To enable publishing for your project, you need to modify the GitHub Actions workflow. Specifically, you'll need to update the `.github/workflows/release.yml` file by removing the following line:

```diff
- if: ${{ false }} # This ensures the workflow is skipped without any notification
```

### Creating an NPM access token

You’ll also need to set up an npm token in GitHub to authenticate with the npm registry and enable package publishing.

For guidance on creating an npm token, refer to the official documentation: [Creating and viewing access tokens](https://docs.npmjs.com/creating-and-viewing-access-tokens).

### Adding NPM Token to GitHub Secrets

Now that you have an NPM access token, you need to add it to your repository's secrets using the following key:

```ruby
NPM_TOKEN=your-npm-token
```

For guidance on adding secrets to a GitHub repository, please refer to the official documentation:[Creating secrets for a repository](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository).
