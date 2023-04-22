# fresh project

This is a tutorial for [Fresh](https://fresh.deno.dev/)🍋

I have conducted a tutorial on Fresh using the following site as a reference.

<https://zenn.dev/azukiazusa/articles/fresh-tutorial>

## Requirement

- [Deno](https://deno.land/) version 1.23.0 or higher

This application uses postgres. so, you need to create `.env` file and set the following environment variables.

- `DB_USER`
- `POSTGRES_DB`
- `DB_HOST`
- `DB_PASSWORD`
- `DB_PORT`

## Usage

Start the project:

```bash
deno task start
```

This will watch the project directory and restart as necessary.
