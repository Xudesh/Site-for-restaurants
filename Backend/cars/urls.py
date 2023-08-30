from django.urls import path
from .views import *


urlpatterns = [
    path('', view=HomeAPI.as_view())
]