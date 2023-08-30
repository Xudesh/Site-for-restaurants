from rest_framework import serializers
from .models import *


class RestSerializer(serializers.ModelSerializer):
    class Meta:
        model = FoodMarket
        fields = '__all__'

