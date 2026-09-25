# FareSense

Uber driver profit copilot. Decide whether an offer is actually profitable after pickup miles, fuel, and wear — before you tap Accept.

**Produced by Futuret3ch and MemeTorrent.**

## Live

Deployed on Vercel from this repository.

## Use it

1. Open the site on your phone and add it to the home screen.
2. Set Vehicle: fuel price, MPG, wear per mile, hourly floor.
3. When an Uber offer appears, type payout, trip miles, pickup miles, and times.
4. Read TAKE / BORDERLINE / SKIP.
5. Optionally log accepted and declined trips for the shift.

All numbers stay in the browser (`localStorage`). No account. No upload.

## Math

```
cost_per_mile = fuel_price / mpg + wear_per_mile
total_miles   = trip_miles + pickup_miles
total_minutes = trip_minutes + pickup_minutes
net           = payout + tip - total_miles * cost_per_mile
hourly        = net / (total_minutes / 60)
```

IRS 2026 business mileage ($0.725 Jan–Jun, $0.76 Jul–Dec) is shown as a tax reference only. The verdict uses cash operating cost.

## Stack

Static HTML/CSS/JS. No build step. Suitable for Vercel static hosting.

## Disclaimer

Decision aid only. Not tax, legal, or earnings advice. Not affiliated with Uber Technologies, Inc.
