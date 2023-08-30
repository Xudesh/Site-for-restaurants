from django.shortcuts import render
from rest_framework import generics
from .models import *
from .serializers import *




class HomeAPI(generics.ListAPIView):
    queryset = FoodMarket.objects.all()
    serializer_class = RestSerializer

