from django.contrib import admin
from .models  import *


class FoodAdmin(admin.ModelAdmin):
    list_display = ['id', 'title']
admin.site.register(FoodMarket, FoodAdmin)