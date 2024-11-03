from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User
from .serializers import *


# ================================================= #
#                 USERS VIEWS                       #
# ================================================= #


@api_view(['GET'])
def get_users(request):
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data)



# ================================================= #
#                 PRODUCTS VIEWS                    #
# ================================================= #


@api_view(['GET'])
def get_products(request):
    products = [
        {
            "name": "Robot-V16",
            "quantity" : "23",
            "price": "12000",
        },
          {
            "name": "R2-D2",
            "quantity" : "7",
            "price": "11700",
        },
            {
            "name": "C-3PO",
            "quantity" : "3",
            "price": "18000",
        },
    ]
    return Response(products)
