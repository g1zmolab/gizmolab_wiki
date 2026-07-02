# gizmo_lab wiki

Το wiki/knowledge base του [gizmo_lab](https://github.com/g1zmolab) hacklab.  
Τεκμηρίωση workshops, projects, εξοπλισμού και ό,τι χρειάζεται να μην ξεχνάμε.

Built with [Starlight](https://starlight.astro.build) (Astro). Static site, no backend, no databases, just markdown.

---

## Δομή

```
src/content/docs/
├── workshops/         # OpSec, Privacy Tools, TailsOS, Android Debloat, Ad Blocking
├── projects/          # Hardware & software projects (TWANG, κλπ.)
├── equipment/         # Καταγραφή εξοπλισμού εργαστηρίου
├── guides/            # Οδηγοί συνεισφοράς κλπ.
└── index.mdx          # Landing page
```

Το config βρίσκεται στο `astro.config.mjs`. Τα styles στο `src/styles/custom.css`.

---

## Dev

```bash
npm install          # μια φορά
npm run dev          # localhost:4321
npm run build        # static output στο dist/
```

---

## Συνεισφορά

1. Φτιάξε ένα `.mdx` αρχείο στον κατάλληλο φάκελο
2. Πρόσθεσε frontmatter (title, description, sidebar order)
3. Μη βάζεις H1 heading στο body — το Starlight το κάνει αυτόματα από τον title
4. Push, rebuild, done

Αναλυτικά: δες τον οδηγό στο `/guides/contributing/`

---

## License

Ελεύθερο για χρήση, αντιγραφή και τροποποίηση.
