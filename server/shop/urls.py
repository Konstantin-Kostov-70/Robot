from django.urls import path
from .views import *

urlpatterns = [
   path('users/', get_users, name='users'),
   path('products/', get_products, name='products'), 
]
