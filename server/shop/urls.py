from django.urls import path
from shop.views import *

urlpatterns = [
   path('products/', get_products, name='index'), 
]
