from django.urls import path
from . import views

urlpatterns = [
    path('', views.TravelersGuide, name='TravelersGuide'),
]

