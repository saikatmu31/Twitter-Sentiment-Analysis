# Getting Started with the ML Model for the Project

Here we are building a ML Model to predict the sentiments of a sentences wheather it is positive or negative 

### For building the model we are using this algorithm:
-   Regression
    - Linear Regression 
- Classification
    - KNN
    - Random Forest
    - Logistic Regression

## Now set up a virtual enviroment in python
Setting up the virtual enviroment using `venv` , activating the enviroment and linking it with the jupyter notebook to built our ML Model easily from `jupyter notebook` or `jupyter lab`

```bash

# Installing all the dependencies
pip install -r requirements.txt

# To list down all the packages
pip list

# Linking the virtual enviroment with our jupyter notebook
python -m ipykernel install --name=sentimentanalysis

# To list down all the enviroment in jupyter notebook
jupyter kernelspec list

# Opening the jupyter lab or notebook
jupyter lab
# or
jupyter notebook
```

## Now run the following `.ipynb` files one by one in order
1.  CreatingDataset.ipynb
2.  ModelTrain.ipynb
3.  SentimentAnalysis.ipynb

After running all this files one by one in order you will generate a `.pickel` file which will contain the exported ML Model which we are going to use to buil our Backend using Fast API and after wards integrating it with the Frontend
