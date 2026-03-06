# BITA

A full-stack starter app: **AdonisJS** backend with **React** (Inertia.js), auth, and real-time (Socket.io).

---

## Quick start

```sh
git clone <repository-url> new-project
cd new-project
npm i
cp .env.example .env
```

**Database:** Use SQLite (default) or MySQL.

- **SQLite** (no extra setup): `DB_CONNECTION=sqlite` in `.env`. Then:
  ```sh
  node ace migration:run
  node ace db:seed
  ```
- **MySQL:** Set `DB_CONNECTION=mysql` and `MYSQL_*` in `.env`, then run the same commands.

```sh
npm run dev
```

Open **http://localhost:3333**. Log in with `admin@example.com` / `adminadmin`.

---

## Optional: Docker (Sail)

With [Docker](https://www.docker.com/) you can run MySQL, Redis, and Mailhog:

```sh
docker-compose up -d
```

Configure `.env` for MySQL and run migrations as above.

---

## What’s included

| Area | Details |
|------|--------|
| **Auth** | Email/password, GitHub, Google (Ally). Seeded admin user. |
| **Frontend** | React + Inertia, TypeScript types in `resources/js/lib/types.tsx`. |
| **Real-time** | Socket.io; backend in `start/socket.ts`, frontend via `SocketContext` in `resources/js/context/socket.tsx`. |
| **Authorization** | `auth` and `admin` middleware; React components: `<Admin>`, `<Guest>`, `<Authenticated>`, `<User>`. |

---

## Commands

| Command | Description |
|---------|-------------|
| `node ace make:page <name>` | Create a new page (e.g. `auth/login`, `dashboard`). |
| `node ace create:user` | Create a user from the CLI. |
| `npm run dev` | Start dev server with watch. |
| `npm run build` | Production build. |

---

## Key files

- **Shared Inertia data:** `start/inertia.ts` and `IPageProps` in `resources/js/lib/types.tsx`
- **Auth (social):** `app/Http/Controllers/SocialAuthController.ts`
- **Middleware:** `app/Middleware`
- **Linting/formatting:** `.eslintrc.js`, `.prettierrc`
