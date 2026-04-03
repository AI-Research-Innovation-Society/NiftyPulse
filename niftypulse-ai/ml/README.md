## Project Structure

```
.
├── data/
│   ├── raw/                # Raw ingested market data (immutable source)
│   └── processed/          # Cleaned, transformed, model-ready datasets
│
├── features/               # Feature engineering modules and transformations
│
├── models/                 # Individual model training scripts
│
├── pipelines/              # End-to-end ML pipelines (data → features → model)
│
├── notebooks/              # Exploratory Data Analysis (EDA) and research work
│
├── drift/                  # Data & model drift reports (Evidently)
```

---

## Folder Details

### data/raw/

* Contains original, unprocessed data
* Acts as the single source of truth
* Should never be modified directly

### data/processed/

* Cleaned and transformed datasets
* Used directly for model training and evaluation

### features/

* Scripts for feature creation and transformation
* Ensures consistent feature engineering across pipelines

### models/

* Contains training logic for different models
* Useful for experimentation and comparison

### pipelines/

* Combines preprocessing, feature engineering, and modeling
* Represents production-ready workflows

### notebooks/

* Jupyter notebooks for:

  * EDA
  * hypothesis testing
  * prototyping

### drift/

* Stores data and model drift reports of Evidently
* Helps monitor model performance over time
