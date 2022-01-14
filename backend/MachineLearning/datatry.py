import numpy as np
import pandas as pd
import pickle
import json
from pycaret.classification import *
from sklearn.model_selection import train_test_split

game   = pd.read_csv('./fixeddata/data.csv')
game['rating']=(game['rating']*1.2).round()
training_data = game.sample(frac=0.7, random_state=25)
testing_data = game.drop(training_data.index)
clf1 = setup(data = game,
             target = 'rating',
             numeric_imputation = 'mean',
             categorical_features=['genres','genre'],
             numeric_features=['days','reviews_count','suggestions_count','ratings_count','added'],
             ignore_features = ['name','rating_top'],
             silent = True)
#comparison=compare_models()
#best_model_results=pull()
#best_model_results.to_csv('newnewdata.csv',index=True)
rf_mode  = create_model('rf')
tuned_rf=tune_model(rf_mode)
filename = 'finalized_model'
pickle.dump(tuned_rf, open(filename, 'wb'))
loaded_model = pickle.load(open(filename, 'rb'))
predictions = predict_model(loaded_model, data = testing_data)
predictions.to_json('rfnew.json',index=True)
predictions.to_csv('rfnew.csv',index=True)
#with open('helloworld.json','w') as outfile:
 #     json.dump(output_json,outfile)
conf_matrix=plot_model(estimator = rf_mode, plot = 'confusion_matrix')
#plot_model(estimator = rf_mode, plot = 'feature')







