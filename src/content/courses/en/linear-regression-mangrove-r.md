---
title: 'Linear Regression in R: A Mangrove Example'
description: 'A short, hands-on introduction to fitting and interpreting a linear regression in R, using an illustrative mangrove diameter-and-height example.'
lang: en
access: free
tags: ['R', 'statistics', 'mangrove']
draft: false
---

Linear regression is one of the most commonly used tools in mangrove and
forestry research — for example, to build allometric equations that predict
tree height, biomass, or carbon stock from an easy-to-measure variable like
stem diameter. This mini-course walks through fitting a simple linear
regression in R, step by step.

## What you need

- [R](https://cran.r-project.org/) installed on your computer.
- Optionally, [RStudio](https://posit.co/download/rstudio-desktop/) as a
  more convenient editor — not required, base R works fine for this lesson.

No prior statistics background is assumed beyond knowing what a scatter plot
is.

## The example data

To keep this lesson self-contained, we'll use a small **illustrative**
dataset relating stem diameter at breast height (DBH, in cm) to tree height
(in m) for ten hypothetical mangrove trees. This is teaching data only — not
a real field survey — but the code below works the same way once you
replace it with your own measurements.

```r
mangrove <- data.frame(
  dbh_cm = c(4.2, 6.1, 7.8, 9.0, 10.5, 12.3, 13.7, 15.1, 16.8, 18.2),
  height_m = c(3.1, 4.0, 4.8, 5.3, 6.0, 6.7, 7.2, 7.9, 8.5, 9.1)
)
mangrove
```

## Step 1: Look at the data first

Always plot before you model.

```r
plot(
  height_m ~ dbh_cm,
  data = mangrove,
  xlab = "Diameter at breast height (cm)",
  ylab = "Height (m)",
  pch = 19
)
```

A roughly straight-line pattern like this is what makes linear regression a
reasonable choice here.

## Step 2: Fit the model

In R, a linear regression is fit with `lm()`. The formula `height_m ~
dbh_cm` reads as "height explained by diameter":

```r
model <- lm(height_m ~ dbh_cm, data = mangrove)
summary(model)
```

The `summary()` output gives you, among other things:

- **Coefficients** — the intercept and slope of the fitted line. The slope
  tells you how much height increases, on average, for each 1 cm increase
  in diameter.
- **Pr(>|t|)** — the p-value for each coefficient; a small value (typically
  < 0.05) suggests the relationship is unlikely to be due to chance alone.
- **Multiple R-squared** — the proportion of variation in height explained
  by diameter (0 to 1; closer to 1 means a tighter fit).

## Step 3: Draw the fitted line

```r
plot(
  height_m ~ dbh_cm,
  data = mangrove,
  xlab = "Diameter at breast height (cm)",
  ylab = "Height (m)",
  pch = 19
)
abline(model, col = "forestgreen", lwd = 2)
```

## Step 4: Check the residuals

Before trusting the model, it's good practice to glance at the residual
plots — they help you spot patterns the straight line missed:

```r
par(mfrow = c(2, 2))
plot(model)
par(mfrow = c(1, 1))
```

Look especially at "Residuals vs Fitted": if the points scatter randomly
around the horizontal zero line with no obvious curve, a straight-line fit
is reasonable.

## Using your own field data

Once you're comfortable with the steps above, swap the example `data.frame`
for your own measurements — typically imported from a CSV file:

```r
mangrove <- read.csv("my_field_data.csv")
```

As long as your CSV has a `dbh_cm` and `height_m` column (or you adjust the
column names in the code above to match yours), everything else works the
same way.

## Where to go next

This lesson covers a single predictor variable. Real allometric models
often use a log-transformed diameter, or add a second predictor (like wood
density), which is where multiple regression (`lm(y ~ x1 + x2)`) comes in —
a natural next topic for a future mini-course.
