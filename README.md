# SupportDesk

## Overview

SupportDesk is a customer support dashboard that lets a support team view, search, filter, inspect, and update customer tickets. Built as a frontend developer assessment project with a focus on clean architecture, a polished SaaS-style interface, and realistic data.

## Features

- Dashboard statistics (Total, Open, In Progress, Resolved) calculated dynamically from ticket data
- Searchable, filterable ticket list (by customer name, subject, ticket ID, status, and priority — combinable)
- Responsive table on desktop, card list on mobile/tablet
- Ticket details drawer with customer info, ticket metadata, full issue description, and message thread
- Inline ticket status updates with optimistic UI and automatic stat recalculation
- Skeleton loading states, error state with retry, and empty states for no data / no filter matches
- Accessible markup: labeled inputs, semantic elements, keyboard focus states, aria-labels on icon buttons

## Tech Stack

- React 18 + Vite
- Tailwind CSS
- Zustand (state management)
- React Router
- Axios
- Lucide React (icons)
- JSON Server (mock REST API)

## Getting Started

Install dependencies:

```
npm install
```

This project reads ticket data from a mock REST API, so run two processes in separate terminals:

```
npm run server   # starts json-server on http://localhost:4000
npm run dev      # starts the Vite dev server
```

Then open the URL Vite prints (typically http://localhost:5173).

## Project Structure

```
src/
  components/
    layout/      Sidebar, Header, MobileHeader
    dashboard/    StatsCard, StatsGrid
    tickets/      Toolbar, Table, Card, Row, Badges, Details drawer, Conversation
    common/       Button, Input, Select, EmptyState, ErrorState, Skeleton
  store/          useTicketStore.js (Zustand store + derived selectors)
  services/       ticketService.js (API layer, called only from the store)
  data/           tickets.json (mock dataset served by json-server)
  pages/          Dashboard.jsx
```

## API

Ticket data is served locally via `json-server` reading `src/data/tickets.json`, exposing standard REST endpoints (`GET /tickets`, `GET /tickets/:id`, `PATCH /tickets/:id`). All requests go through `services/ticketService.js` — no API calls live inside components.

## Key Implementation Decisions

- **Zustand** was chosen over Context/Redux for its minimal boilerplate and because ticket state, filters, and the selected ticket all need to update independently without re-render overhead.
- **Filtering** runs as a derived selector (`selectFilteredTickets`) rather than duplicated state — search, status, and priority filters compose over the full `tickets` array on every render, so there's a single source of truth.
- **Statistics** are derived from the complete dataset (`selectTicketStats`), not the filtered results, so the numbers stay meaningful regardless of active filters.
- **Responsive layout** swaps a table (desktop) for a card list (mobile/tablet) rather than letting the table overflow — each is a separate, focused component.
- **Status updates** apply optimistically in the store, then persist via a `PATCH` request; a failed request rolls the local state back.

## Future Improvements

- Pagination for large ticket volumes
- Authentication and role-based access for agents vs. admins
- Ticket assignment to specific agents
- A real backend instead of json-server
- Real-time notifications for new tickets or replies
