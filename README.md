# EVI Personality: a React application for determining personality types

## Description

EVI Personality is a React-based application that showcases the use of Hume AI's
Empathic Voice Interface (EVI). Utilizing a unique system prompt, EVI takes the
role of an AI assistant specialized in the Myers-Briggs Type Indicator (MBTI).

This project leverages [Hume's React SDK](https://github.com/HumeAI/empathic-voice-api-js/tree/main/packages/react), a straightforward React interface, designed to seamlessly integrate EVI capabilities into React applications.

## Table of Contents

- [EVI brainstorming team example](#evi-brainstorming-team-example)
  - [Description](#description)
  - [Table of Contents](#table-of-contents)
  - [Setup](#setup)
  - [Usage](#usage)

## Setup

### Configuring Environment Variables

Start by setting up your environment variables. Create a .env file and add your [API Key and your Client Secret](https://beta.hume.ai/settings/keys):

```bash
echo "VITE_HUME_API_KEY= <YOUR HUME API KEY>" >> .env
echo "VITE_HUME_CLIENT_SECRET = <YOUR HUME CLIENT SECRET>" >> .env
```

### Installing Dependencies

Install all required dependencies by running:

```bash
pnpm install
```

## Usage

### Running the Application

Start the application locally with:

```bash
pnpm dev
```

Visit [http://localhost:5173/](http://localhost:5173/) in your browser to interact with the project.
