from django.shortcuts import render
from turs.models import Turs_obj


def index(request):
    arr = Turs_obj.objects.all()
    
    return render(request, 'main/index.html', {'arr': arr})




