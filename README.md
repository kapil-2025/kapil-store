# 🛒 Kapil Store — my own e-commerce rebuild (🚧 work in progress)

I run **Kapil Store**, a small stationery business that delivers to Jamia Millia Islamia students. The current live store was built by someone else. This repo is **my own rebuild of the store from scratch**, so I can learn how a real e-commerce backend works and eventually run my business on code I wrote myself.

## Planned stack

- **Backend:** Node.js + Express 5 + TypeScript
- **Database:** MongoDB (Mongoose)
- **Frontend:** Next.js (planned)

## Progress

- [x] Express 5 + TypeScript server setup
- [x] MongoDB connection with Mongoose (fails fast if `MONGO_URI` is missing)
- [x] Health-check endpoint: `GET /api/health`
- [ ] Product catalogue API (categories, stock, prices)
- [ ] Cart and order API (COD + UPI)
- [ ] Order notification email to the store owner
- [ ] Admin panel to manage products and orders
- [ ] Next.js storefront
- [ ] Deploy and move real orders to this version

## Run locally

```bash
cd server
npm install
cp .env.example .env   # add your MONGO_URI
npm run dev
```

Then open http://localhost:5000/api/health

---

Author: [Kapil Gupta](https://github.com/kapil-2025) · B.Tech ECE, Jamia Millia Islamia
