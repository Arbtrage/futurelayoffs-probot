![futurelayoffs-probot](https://socialify.git.ci/Arbtrage/futurelayoffs-probot/image?description=1&descriptionEditable=GitHub%20Bot%20for%20future%20layoffs&language=1&name=1&owner=1&pattern=Solid&theme=Dark)
> A GitHub App built with [Probot](https://github.com/probot/probot) that A Probot app

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t flbot .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> flbot
```

## Contributing

If you have suggestions for how flbot could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2024 Sayantan
