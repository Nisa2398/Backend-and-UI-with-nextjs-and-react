# tilla-tech
# React-map
## Overview
React-map is a Next.js project built with TypeScript, focused on rendering maps and working with geospatial data. It includes data files like `airports.json` and corresponding TypeScript interfaces such as `airport.ts` for handling airport-related information.
## Features
- **Next.js Framework:** Server-side rendering and static site generation.
- **TypeScript:** Strong typing for reliable development.
- **Tailwind CSS:** Utility-first CSS for styling.
- **Geospatial Data:** Work with airport data using JSON and TypeScript interfaces.

## Usage
- **Maps:** Rendering interactive maps with airport data.
- **Geospatial Queries:** Perform operations on geospatial data using Typescript.

## Improvement Points

1.What are some edge cases you would take care of before shipping this to production?
Answer: Its better to have a separate env for staging to do Unit testing, Load testing and the devloper has to make sure of all prod and dev environments before pushing them and ensure the code quality is good and clean

2.How would you scale this to handle high amounts of traffic?
Answer:Using load balancers, there are a lot of types of loadbalancers e.g, Round robin, weighted loadbalancer, which is to handle high amout of traffic,
If we are using Nodejs as backend framework we can have NGINx and PM2 for scaling the applications applevel and for extending Cpu Cores
