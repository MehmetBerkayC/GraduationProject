import numpy as np
import pandas as pd
import pickle
from pycaret.classification import *
from sklearn.model_selection import train_test_split



game   = pd.read_csv('./input/game/data.csv')
#game = pd.read_json('./input/game/egedatamlrounded2.json')


s1= pd.Series(game['rating'])
s2= pd.Series(game['metacritic'])
s3=pd.Series(game['ratings_count'])
s4=pd.Series(game['suggestions_count'])
s5=pd.Series(game['reviews_count'])
s6=pd.Series(game['rating_top'])
s7=pd.Series(game['days'])
s8=pd.Series(game['added'])
print(f"rating and metacritic correlation: {s1.corr(s2,method='kendall')}")

print(f"rating and suggestion count correlation: {s1.corr(s4,method='kendall')}")

print(f"rating and reviews count  correlation: {s1.corr(s5,method='kendall')}")

print(f"rating and rating count correlation: {s1.corr(s3,method='kendall')}")

print(f"rating and rating top feature correlation: {s1.corr(s6,method='kendall')}")

print(f"rating and days feature correlation: {s1.corr(s7,method='kendall')}")

print(f"rating and added feature correlation: {s1.corr(s8,method='kendall')}")