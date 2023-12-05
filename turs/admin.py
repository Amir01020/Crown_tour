# from django import forms
from django.contrib import admin
from .models import Turs_obj, IncludedPrice, TourPlan
from modeltranslation.admin import TranslationAdmin

# admin.site.register(Turs_obj)
# admin.site.register(IncludedPrice)

@admin.register(Turs_obj)
class Turs_objAdmin(TranslationAdmin):
    filter_horizontal = ["YesServices", "NoServices", "tru_io"]
    search_fields = ('name_tur',)


@admin.register(IncludedPrice)
class IncludedPriceAdmin(TranslationAdmin):
    search_fields = ('titler', )

@admin.register(TourPlan)
class TourPlanAdmin(TranslationAdmin):
    search_fields = ('name_tur', )


