from django.shortcuts import render


def companyHome(request):
    return render(request, 'company/companyHome.html')
