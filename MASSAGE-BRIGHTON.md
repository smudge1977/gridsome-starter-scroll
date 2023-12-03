# Test and build


## Install requirements

?????
node installed
docs talk about yarn too 
sure I just did npm install????
Add a robots.txt `npm install --save gridsome-plugin-robots`
Which uses a site map: `npm install @gridsome/plugin-sitemap`

## WebP images
https://developers.google.com/speed/webp/docs/precompiled  
`cwebp.exe -q 50 Oncology_massage_website.jpg -o Oncology_massage_website.webp`

## Development

```bash
gridsome develop
```

## Build static

```bash
npx browserslist@latest --update-db
gridsome build
```

## to server the static site

```bash
cd dist
python3 -m http.server
```