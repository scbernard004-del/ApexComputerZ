# Add a product in one place

The storefront pages are data-driven. Products, prices, specifications and media are stored in `data/catalog.json`; the same catalogue powers the home page, shop, product pages and photos/flyers page.

## Add or update a listing

1. Open `data/catalog.json`.
2. Add a product object to the `products` array with a unique `id`, `name`, `brand`, `category`, `price`, `cpu`, `ram`, `storage`, `screen`, `features`, and `image` media id. Add `variants` when one model has multiple configurations.
3. Add the matching image, flyer or video object to the `media` array and place the file in `media-01`, `media-02`, `media-03` or `media-04`. Keep the `src` and `thumb` paths relative, for example `media-04/new-product.webp`.
4. Run `node scripts/sync-catalog.mjs` when Node.js is available. This updates the browser-ready `catalog.js` from the JSON source. The optional command is only for catalogue editing; customers and GitHub/Vercel deployment do not need Node.js.
5. Commit `data/catalog.json`, `catalog.js` and the new media file together. Open `products.html` and the new `product.html?id=your-id` link to check it.

## GitHub-only editing

If you edit directly in GitHub, keep `data/catalog.json` and `catalog.js` in sync by making the same small product/media change in both files, or ask Apex Computers’ developer to run the sync command before publishing. Never put Gmail passwords or API keys in either file.

Prices are supplied-listing prices. Keep the on-page reminder to confirm current stock, condition and final price before payment.
