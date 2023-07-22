# Job Tracker Frontend
This is the frontend of the job tracker application.

## Running the code

1. Ensure you have `.env` file set up

```markdown
VITE_AUTH0_DOMAIN=dev-jslwhcad.us.auth0.com
VITE_AUTH0_CLIENT_ID=tArBeqfjLlQX6udmJy2K1h2BnFSn4cUQ
VITE_AUTH0_CALLBACK_URL=http://localhost:4040/callback
VITE_API_SERVER_URL=http://localhost:5050
VITE_AUTH0_AUDIENCE=https://job-tracker-frontend-green.vercel.app/
```

2. Install dependencies - `npm install`
3. Run in develop mode - `npm run dev`

## File Structure
- `main.tsx` - the entry point of our application with `Context Providers`
- `App.tsx` - routes are defined here
- `api` - API calls
  - `config.ts` - base config
- `auth` - authentication involving Auth0
- `common`
  - `types` - defining types for API and components used client-side
  - `utils` - formatting data or performing basic calculations
- `components`
  - `common` - common components used in various places in the application
  - `layout` - for overall layout of the page
  - `domain` - components used in various pages for a domain
- `routes` - page components
- `styles` - for global styling, including palette
