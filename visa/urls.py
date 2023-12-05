from django.urls import path
from . import views

urlpatterns = [
    path('/', views.visa, name='visa'),
    path('tickets', views.tickets, name='tickets'),
]

