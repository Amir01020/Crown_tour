from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static
urlpatterns = [
    path('', views.index, name='turs'),
    path('/tur-<int:pk>', views.StateDetailView.as_view(), name='state-detail'),
    # path('/tursProgram', views.tursProgram, name='tursProgram'),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
