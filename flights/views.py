from django.shortcuts import render
from datetime import datetime
import requests
import json
from django.http import HttpResponse


def index(request):
    
   

    sity = requests.get('https://api.travelpayouts.com/data/ru/cities.json')
    
    airline = requests.get('https://api.travelpayouts.com/data/ru/airlines.json')
    sity_new = json.loads(sity.text)
    airline_new = json.loads(airline.text)
   
    def format_date(input_date):
    # Парсим входную строку даты и времени
        date_obj = datetime.fromisoformat(input_date)

        # Определяем словари для месяцев и дней недели на русском языке
        month_names = {
            1: 'янв', 2: 'фев', 3: 'мар', 4: 'апр', 5: 'май', 6: 'июн',
            7: 'июл', 8: 'авг', 9: 'сен', 10: 'окт', 11: 'ноя', 12: 'дек'
        }
        day_names = {
            0: 'пн', 1: 'вт', 2: 'ср', 3: 'чт', 4: 'пт', 5: 'сб', 6: 'вс'
        }

        # Форматируем дату и время в нужный формат
        formatted_date = f"{date_obj.strftime('%d')} {month_names[date_obj.month]}, {day_names[date_obj.weekday()]}"
        
        return formatted_date

    def format_time(minutes):
        if minutes < 60:
            formatted_time = f"{minutes}"
        else:
            hours = minutes // 60
            remaining_minutes = minutes % 60
            if remaining_minutes > 0:
                formatted_time = f"{hours}ч {remaining_minutes}мин"
            else:
                formatted_time = f"{hours}ч"

        return formatted_time
    
    def times(input_time):
        # Парсим входную строку времени
        parsed_time = datetime.fromisoformat(input_time)

        # Форматируем в желаемом формате без "ч"
        formatted_time = parsed_time.strftime("%H:%M")
        
        return formatted_time

    def extract_last_5_chars(input_string):
    # Проверяем, что длина строки больше или равна 5 символам
        if len(input_string) >= 5:
            # Извлекаем последние 5 символов
            last_5_chars = input_string[-5:]
            return last_5_chars
        else:
            # Если строка короче 5 символов, возвращаем ее без изменений
            return input_string



    def convert_and_calculate_time(minutes):
        try:
            minutes = int(minutes)
            if minutes < 0:
                raise ValueError("Время не может быть отрицательным")
            
            # Преобразование в часы и минуты
            hours = minutes // 60
            remaining_minutes = minutes % 60

            # Вычисление времени в формате 24 часа
            total_minutes = hours * 60 + remaining_minutes
            hours_24 = total_minutes // 60 % 24
            minutes_24 = total_minutes % 60

            return f"{hours_24}:{minutes_24:02d}"

        except ValueError as e:
            return str(e)

        




    def add_spacing(number):
        number_str = str(number)  # Преобразуем число в строку
        reversed_number_str = number_str[::-1]  # Разворачиваем строку
        spaced_number_str = ''

        for i, char in enumerate(reversed_number_str, start=1):
            spaced_number_str += char
            if i % 3 == 0 and i != len(reversed_number_str):
                spaced_number_str += ' '  # Добавляем пробел после каждой третьей цифры

        result = spaced_number_str[::-1]  # Разворачиваем строку обратно
        return result
    def transform_date(input_date):
    # Преобразуем строку в объект даты
        date_obj = datetime.strptime(input_date, "%d.%m.%Y")
        
        # Преобразуем объект даты в строку в нужном формате
        formatted_date = date_obj.strftime("%Y-%m-%d")
    
        return formatted_date
    if request.method == 'POST':
        post_start = request.POST.get('statrt')
        post_finesh = request.POST.get('finesh')
        days = request.POST.get('day')
        days_back = request.POST.get('replay')
        statrt = post_start
        finesh = post_finesh
        # Получение текущей даты и времени
        current_date = datetime.now()

        # Получение года и месяца
        current_year = current_date.year
        current_month = current_date.month

        current_month = str(current_month)
        print(len(current_month))
        if len(current_month) <2:
            current_month = f'0{current_month}'

        # Выполните необходимую обработку данных
        states = f'{current_year}-{current_month}'
        # функция для перевода чясов в минуты 
        def time_to_minutes(time_str):
    
            hours, minutes = map(int, time_str.split(':'))
            total_minutes = hours * 60 + minutes
            return total_minutes
        def minutes_to_time(total_minutes):
            if 0 <= total_minutes < 1440:  # Убеждаемся, что в пределах 24 часов
                hours = total_minutes // 60
                minutes = total_minutes % 60
                return f"{hours:02d}:{minutes:02d}"
            else:
                print("Ошибка: Некорректное количество минут")  
        
        

        if days_back != '':
            states = days_back
        for i in sity_new:
            if i["name"] == statrt:
                for item in sity_new:
                    if item["name"] == finesh:
                        if days != '':
                            tickets = requests.get(f'https://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin={i["code"]}&destination={item["code"]}&departure_at={days}&return_at={states}&unique=false&sorting=price&direct=false&currency=uzs&limit=30&page=1&locale=ru&one_way=true&token=10d9c916fc91e02b03c8e34de1b9bb3b')
                            print(f'https://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin={i["code"]}&destination={item["code"]}&departure_at={days}&return_at={states}&unique=false&sorting=price&direct=false&currency=uzs&limit=30&page=1&locale=ru&one_way=true&token=10d9c916fc91e02b03c8e34de1b9bb3b')
                            ticket_arr = json.loads(tickets.text)
                            print(tickets)
                            
                            if ticket_arr['data'] == [] or ticket_arr['data'] == None:
                                text = {
                                    "text":'Такого билета нет в наличии, выберите другую дату!'
                                }
                                
                                

                                return render(request, 'flights/index.html', {"sity":sity.text,'arr': ticket_arr,"text":json.dumps(ticket_arr),'texts':text})
                            else:
                                text = {
                                    "text":''
                                }
                                
                                for ticket in ticket_arr['data']:
                                    times_to = ticket['departure_at']  
                                    times_back = ticket['return_at']
                                    bac_time = time_to_minutes(times(times_to))
                                    bac_time = bac_time +  ticket["duration_to"]
                                    # print(ticket['departure_at'])
                                    ticket['departure_at_new'] = times_to
                                    ticket['back'] = 'True'
                                    ticket['departure_at'] =  format_date(ticket['departure_at']).lower()
                                    ticket['return_at'] =  format_date(ticket['return_at']).lower()
                                    ticket['time_to'] = times(times_to)
                                    ticket['return_to'] = minutes_to_time(bac_time)
                                    ticket['time_beck'] = times(times_back)
                                    ticket['price'] = add_spacing(ticket['price'])
                                    ticket['return_beck'] = extract_last_5_chars(times_back)
                                    ticket['duration_to'] =  format_time(ticket['duration_to']).lower() 
                                    ticket['duration_back'] =  format_time(ticket['duration_back']).lower() 
                                    for line in airline_new:
                                        if ticket['airline'] == line['code']:
                                            ticket['airline'] = line['name']
                                    if states == f'{current_year}-{current_month}':
                                        ticket['back'] = "False"
                                    
                                    
                                for i in sity_new:
                                    for item in ticket_arr['data']:
                                        if item['destination'] == i['code']:
                                                item['destination'] = i['name']
                                        if item['origin'] == i['code']:
                                                item['origin'] = i['name']
                                return render(request, 'flights/index.html', {"sity":sity.text,'arr': ticket_arr,"text":json.dumps(ticket_arr)})
                            
                        
    else:
         return render(request, 'flights/index.html',{"sity":sity.text}  )  
    
# , {"my_sity_arr":new_sity,'arr': new_arr,"text":json.dumps(new_arr),"city":resp.text}

       

    return render(request, 'flights/index.html',{"sity":sity.text} )   