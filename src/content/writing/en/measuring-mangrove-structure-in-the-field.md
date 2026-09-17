---
title: 'Measuring Mangrove Structure in the Field'
description: 'Ground surveys and drone mapping are complementary, not competing, methods for measuring mangrove structure.'
date: 2026-09-07
lang: en
tags: ['mangrove', 'research methods', 'remote sensing']
cover: '/images/field-mangrove-1.webp'
draft: false
---

Fieldwork in mangrove forests means working from stilt roots as often as solid ground. Structural surveys — diameter at breast height (DBH), canopy height, stem density — still have to be measured by hand, tree by tree, even when a drone survey covers the wider stand in a fraction of the time.

## What actually gets measured

A structural plot usually starts with a fixed-radius circle staked out at low tide, since the same plot has to be relocatable on the next visit months later. Inside it, every stem above a minimum DBH threshold gets tagged, measured with a diameter tape at breast height (adjusted upward on trees with stilt roots, since "breast height" on a *Rhizophora* prop root is not the same reference point as on a straight trunk), and identified to species. Canopy height is read with a clinometer or laser hypsometer from the nearest solid footing, which in practice often means from a boat or from another tree's prop roots rather than flat ground.

None of these numbers are useful on their own. DBH feeds into species-specific allometric equations to estimate above-ground biomass; stem density and species composition describe stand structure; canopy height helps validate what a drone's photogrammetric surface model is actually seeing from above.

## Why pair it with a drone survey

A field team can realistically cover a handful of plots in a working day, limited by tide windows and how far the substrate allows walking. A drone survey extends coverage across an entire stand in the same time, but it only sees canopy — it cannot measure DBH, cannot see understory stems, and cannot identify species reliably from imagery alone. Ground measurements are what calibrate a drone-based canopy height or biomass model in the first place: without a set of plots where both were measured on the same trees, the imagery is just a nice picture, not a defensible estimate.

The actual workflow after a field campaign runs through QGIS for the spatial side — georeferencing plots, building the sampling grid, overlaying drone orthomosaics — and R for the statistical side: fitting the allometric and calibration models, checking residuals, and producing the density or carbon-stock estimate that goes into a report or a grant deliverable.

## The same protocol, different sites

None of this is unique to one location. The same plot-and-drone protocol travels with the research team from the permanent monitoring sites in Bengkalis and Dumai — visited on a repeating cycle precisely so that structural change can be tracked over time, not just captured once — to shorter, project-specific engagements elsewhere in Riau and beyond. What changes from site to site is the species mix and the local hazards (deeper mud in some spots, denser prop roots in others); what stays constant is the measurement protocol, because a density or carbon estimate is only comparable across sites and across years if it was collected the same way each time.
