# AVIC Client Portal

AVIC Client Portal is a React-based logistics client dashboard built for freight and shipping operations. It provides a streamlined front-end interface for tracking recent shipments, reviewing active shipment records, submitting quote requests, and confirming quote submissions.

This project is a front-end prototype and uses mock data to simulate a client-facing shipping portal.

## Overview

The portal includes:

- A dashboard with key shipment statistics
- A recent shipments panel with shipment detail previews
- A full shipments listing page with search and status-style filtering UI
- A quote request form for customer shipment enquiries
- A quote summary view before submission
- A confirmation page for successfully submitted quotes

## Tech Stack

- React 19
- Vite
- React Router
- Tailwind CSS
- Heroicons

## Project Structure

```text
AVIC-CLIENT-PORTAL/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── App.jsx
│   ├── Dashboard.jsx
│   ├── DashboardPage.jsx
│   ├── Header.jsx
│   ├── Quote.jsx
│   ├── ShipmentsPage.jsx
│   ├── SideNav.jsx
│   ├── SuccessPage.jsx
│   ├── Summary.jsx
│   ├── index.css
│   ├── main.jsx
│   └── NotFound.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md
```

## Features

### Dashboard
The main dashboard gives users an overview of shipment activity and key metrics such as:

- Number of shipments
- Number of quotes
- Current status indicator

It also includes a recent shipment list and a detail panel for selected shipments.

### Shipments
The shipments page displays a list of shipment records and includes a search field and multiple status filter buttons to mimic a logistics operations view.

### Quote Request Flow
Users can submit a quote request with fields including:

- Full name
- Company name
- Email
- Phone number
- Origin and destination
- Weight
- Shipment type
- Service type
- Additional message

The form navigates through a summary step before the final submission confirmation page.

## Getting Started

### Prerequisites

Before running the app, make sure you have the following installed:

- Node.js (18 or newer recommended)
- npm

### Install dependencies

```bash
npm install
```

### Run the app locally

```bash
npm run dev
```

Then open the local Vite URL displayed in the terminal, typically:

```text
http://localhost:5173
```

### Production build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Notes

- The application uses mock shipment and notification data stored in `src/data/MockData.js`.
- This is a front-end UI prototype and does not include backend persistence or authentication.
- Navigation is handled with `react-router-dom` and all primary sections are routed from `App.jsx`.

## License

This project is provided for demonstration and educational use.

