# Osebna stran — nelihevir

Statična osebna spletna stran v slovenščini. Datoteke za objavo so v `site/`; odpri `site/index.html` za lokalni ogled. Ni namestitve odvisnosti ali koraka gradnje.

## GitHub Pages

Ciljni osebni repozitorij: `nelihevir/nelihevir.github.io`. Pred ustvarjanjem preveri, ali že obstaja, in ohrani obstoječo vsebino.

Po povezavi GitHuba potisni te datoteke na vejo `main`. V repozitoriju izberi **Settings → Pages → Build and deployment → Source → GitHub Actions**. Workflow `.github/workflows/pages.yml` nato objavi mapo `site/` ob vsakem pushu na `main`.

Predvideni naslov po uspešni objavi: https://nelihevir.github.io/

## Urejanje

Vsebina: `site/index.html`. Oblikovanje: `site/style.css`. Spremembe v glavni veji sprožijo samodejno objavo. Stran trenutno vsebuje samo potrjeno uporabniško ime in povezave na GitHub; biografijo in posamezne projekte dodaj po potrditvi vsebine.

## Trenutno stanje

Repozitorij: https://github.com/nelihevir/nelihevir.github.io

Objavo in njeno stanje spremljaj v zavihku Actions. Lokalna orodja v `.tools/` so izključena iz različic.
