from django.shortcuts import render,HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response


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
