from django.shortcuts import render


def visa(request):
    return render(request, 'visa/visa.html')


def tickets(request):
    return render(request, 'visa/tickets.html')