import numpy as np
import pandas as pd
import pickle
from pycaret.classification import *
from sklearn.model_selection import train_test_split



game   = pd.read_csv('./input/game/data2.csv')
game['rating']=game['rating'].round()
training_data = game.sample(frac=0.7, random_state=25)
testing_data = game.drop(training_data.index)


clf1 = setup(data = game,
             target = 'genre',
             numeric_imputation = 'mean',
             categorical_features=['genres'],
             numeric_features=['days','reviews_count','suggestions_count','ratings_count','added'],
             ignore_features = ['metacritic','name','rating','rating_top'],
             silent = True)
comparison=compare_models()
best_model_results=pull()
best_model_results.to_csv('newdata.csv',index=True)

rf_mode  = create_model('rf')
tuned_rf=tune_model(rf_mode)
filename = 'finalized_model'
pickle.dump(tuned_rf, open(filename, 'wb'))
loaded_model = pickle.load(open(filename, 'rb'))
predictions = predict_model(loaded_model, data = testing_data)
predictions.to_csv('genresguess.csv',index=True)

#conf_matrix=plot_model(estimator = rf_mode, plot = 'confusion_matrix')


plot_model(estimator = rf_mode, plot = 'feature')






