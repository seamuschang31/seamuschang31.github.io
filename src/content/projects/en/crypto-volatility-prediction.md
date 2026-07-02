---
title: "Crypto High-Volatility Prediction Model"
summary: "ML models predicting 1-second volatility spikes in the ETH/USD market from 725k+ tick-by-tick observations, reaching 89% accuracy."
date: 2025-10-01
tags: ["Machine Learning", "Python", "Quant Finance", "Market Microstructure"]
featured: true
order: 1
---

A course project for **IE 498: Machine Learning in Finance** at UIUC (Aug – Oct 2025), focused on predicting short-horizon volatility spikes for crypto market making.

## What I built

- Developed machine learning models — Logistic Regression, Random Forest, and Gradient Boosting — to predict **1-second volatility spikes** in the ETH/USD market.
- Trained on **over 725,000 tick-by-tick observations**, achieving **89% accuracy and 86% precision**.
- Engineered **11 market microstructure features**, including bid-ask spreads and order book imbalances.
- Tuned hyperparameters to reach **ROC-AUC scores of 0.81–0.83**, outperforming the random baseline of 79% accuracy.

## Why it matters

For market makers, anticipating volatility spikes even one second ahead helps manage inventory risk and avoid adverse selection. This project demonstrates that microstructure signals carry real predictive power at ultra-short horizons.
