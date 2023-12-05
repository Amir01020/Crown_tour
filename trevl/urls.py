
from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('i18n/', include('django.conf.urls.i18n')),
    path('admin/', admin.site.urls),
    path('', include('main.urls')),
    path('turs', include('turs.urls')),
    path('company', include('company.urls')),
    path('TravelersGuide', include('TravelersGuide.urls')),
    
    path('visa', include('visa.urls')),
    # path('MedicalTours', include('MedicalTours.urls')),
    path('flights', include('flights.urls')),

]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)