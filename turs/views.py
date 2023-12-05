from django.shortcuts import render
from .models import Turs_obj
from django.views.generic import DetailView



def index(request):

    arr = Turs_obj.objects.all()

    return render(request, 'turs/turHome.html', {'arr': arr})

class StateDetailView(DetailView):
    model = Turs_obj
    template_name = 'turs/tursDescription.html'
    context_object_name = 'state'
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # добавляем данные в контекст
        context['my_arr'] = Turs_obj.objects.all()
        return context
        


def tursProgram(request):
    return render(request, 'turs/tursProgram.html')

