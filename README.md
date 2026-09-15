# Search & Contact App

React (Vite) + Tailwind CSS + Framer Motion frontend, connected to a Node.js + Express (ESM) backend.

## Structure

```
project/
├── backend/                # Node.js + Express (type: module)
│   ├── server.js
│   └── routes/
│       ├── paragraph.js    # GET /api/paragraph  -> paragraph for the Search page
│       └── contact.js      # POST /api/contact   -> validates + "submits" contact form
└── frontend/                # React + Vite + Tailwind + Framer Motion
    └── src/
        ├── pages/
        │   ├── Searchtxt.jsx   # Task 1: search box + live yellow highlight
        │   └── ContactUs.jsx   # Task 2: validated contact form
        ├── components/Navbar.jsx
        ├── api/client.js       # axios instance (reads VITE_API_URL)
        └── App.jsx              # routes, blue theme, page transitions
```

## Run it

**Backend**

```bash
cd backend
npm install
npm start          # http://localhost:5000
```

**Frontend** (in a second terminal)

```bash
cd frontend
cp .env.example .env     # VITE_API_URL=http://localhost:5000
npm install
npm run dev         # http://localhost:5173
```

> Note: this project was written and syntax-checked in a sandbox that has no access to the public npm
> registry, so `npm install` could not be executed here — run it on your own machine.

## Task 1 — Search Page (`Searchtxt.jsx`)

- A search input box with an English paragraph below it (fetched from `GET /api/paragraph`, with a local
  fallback if the backend isn't running).
- Every case-insensitive match of the typed text inside the paragraph gets a **yellow background**
  (`<mark class="search-highlight">`), updated on every keystroke.
- If the typed text has no match anywhere in the paragraph, a **"no text found"** message appears.

## Task 2 — Contact Us Page (`ContactUs.jsx`)

- Built with `useState` for form data, field errors, and submit status.
- Fields: **Full Name**, **Email Address**, **Message** — each with client-side validation
  (required, minimum length, email format) and inline error messages.
- On submit, the form calls `POST /api/contact`. The backend validates again and returns
  `{ success: true, message }` — no real email is sent, but the full validate → submit → success flow
  works end to end.
- A success screen (with a Framer Motion check-mark animation) is shown after a successful submit, with a
  "Send another message" button to reset the form.

## Theme

Tailwind's config (`frontend/tailwind.config.js`) defines a `brand` blue color scale plus an animated
`brand-gradient` used across the navbar, buttons, and focus rings — change the `brand` shades there to
retheme the whole app.
