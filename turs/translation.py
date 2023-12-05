from modeltranslation.translator import register, TranslationOptions
from .models import IncludedPrice, TourPlan, Turs_obj


@register(IncludedPrice)
class MedicalPriceTranslationOptions(TranslationOptions):
    fields = ('titler',)


@register(TourPlan)
class TourPlanTranslationOptions(TranslationOptions):
    fields = ('name_tur', 'day_tur', 'comment_turs')


@register(Turs_obj)
class Medical_objTranslationOptions(TranslationOptions):
    fields = ('type_turs', 'premium_comment', 'adout_comment', 'name_tur', 'season', 'comment_turs', 'hotel_name', 'hotel_eat', 'hotel_number', 'arrival_city', 'departure_city')

