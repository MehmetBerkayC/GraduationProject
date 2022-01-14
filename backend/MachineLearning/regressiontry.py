from pycaret.regression import *

import numpy as np
import pandas as pd
import pickle

from sklearn.model_selection import train_test_split



game   = pd.read_csv('./input/game/gamedata.csv')
#game = pd.read_json('./input/game/egedatamlrounded2.json')
#game['rating']=game['rating'].astype('category')
training_data = game.sample(frac=0.7, random_state=25)
testing_data = game.drop(training_data.index)
clf1 = setup(data = training_data,
             target = 'rating',
             numeric_imputation = 'mean',
             numeric_features=['ratings_count','reviews_count','suggestions_count','metacritic'],
             ignore_features = ['name'],
             silent = True)
comparison=compare_models()
best_model_results=pull()
best_model_results.to_csv('egeresultregress.csv',index=True)
