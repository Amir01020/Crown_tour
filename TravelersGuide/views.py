from django.shortcuts import render


def TravelersGuide(request):
    return render(request, 'TravelersGuide/TravelersGuide.html')
