from django.db import models
from datetime import date


class IncludedPrice(models.Model):
    titler = models.CharField('услуга тура:', max_length=250)

    def __str__(self):
        return self.titler

    class Meta:
        verbose_name = 'услуга тура'
        verbose_name_plural = 'услуги туров'


class TourPlan(models.Model):
    name_tur = models.CharField('Название тура', max_length=250)
    day_tur = models.CharField('День', max_length=250)
    comment_turs = models.TextField('Описание')

    def __str__(self):
        return self.name_tur

    class Meta:
        verbose_name = 'План тура'
        verbose_name_plural = 'Планы тура'


class Turs_obj(models.Model):   
    TURS_TAYP = [
        ("Пляжный","Пляжный"),
        ("Национальный","Национальный"),
        ("Шоппинг","Шоппинг"),
        ("Экскурсии","Экскурсии"),
        ("Экстремальный","Экстремальный"),
        ("Горные лыжи","Горные лыжи"),
    ]
    type_turs = models.CharField(max_length=100, choices=TURS_TAYP)
    premium_comment = models.CharField('Описание уникального тура' , max_length=200)
    adout_comment = models.CharField('Примечание к туру' , max_length=200)
    premium = models.BooleanField('уникальный тур')
    
    img_tur = models.ImageField(upload_to='media/')
    name_tur = models.CharField('Название тура', max_length=250)
    season = models.CharField('Сезон', max_length=250)
    how_many_days = models.DecimalField('Сколько дней',  max_digits=20, decimal_places=0)
    how_many_nights = models.DecimalField('Сколько ночей', max_digits=20, decimal_places=0)
    create_day = models.DateField('день создания тура', default=date.today)
    duration_tur = models.DecimalField('длительность тура', max_digits=20, decimal_places=0)
    price = models.CharField('цена тура',max_length=250)
    arrival_day = models.DateField('прилёт')
    departure_day = models.DateField('вылет')
    comment_turs = models.TextField('Описание тура')
    hotel_name = models.CharField('название отеля', max_length=255)
    hotel_eat = models.CharField('Питание', max_length=255)
    hotel_number = models.CharField('Номер отеля', max_length=255)
    arrival_city = models.CharField('c какого города вылет', max_length=255)
    departure_city = models.CharField('в какой город прилёт', max_length=255)

    YesServices = models.ManyToManyField(IncludedPrice, verbose_name='Включено в стоимость:', related_name='NoIncludedPrice', null=True, blank=True)
    NoServices = models.ManyToManyField(IncludedPrice, verbose_name='Не включено в стоимость:', related_name='YesIncludedPrice', null=True, blank=True)

    tru_io = models.ManyToManyField(TourPlan, verbose_name='План тура', related_name='tru_io_pla', null=True, blank=True)

    def __str__(self):
        return self.name_tur

    class Meta:
        verbose_name = 'Тур'
        verbose_name_plural = 'Туры'
