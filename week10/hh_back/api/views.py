from django.shortcuts import render

# Create your views here.

from api.models import Company, Vacancy
from django.http.response import JsonResponse


def get_company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        companies_json = [company.short() for company in companies]
        return JsonResponse(companies_json, safe=False)
    elif request.method == 'POST':
        return JsonResponse({'data': 'company post request'})


def get_company(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error', str(e)})
    if request.method == 'GET':
        return JsonResponse(company.to_json())


def get_vacancies_by_company(request, id):
    if request.method == 'GET':
        vacancies = Vacancy.objects.filter(company_id=id).all()
        vacancies_json = [vacancy.to_json() for vacancy in vacancies]
        return JsonResponse(vacancies_json, safe=False)
    elif request.method == 'POST':
        return JsonResponse({'data': 'vacancy post request'})


def get_vacancy_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        vacancies_json = [vacancy.short() for vacancy in vacancies]
        return JsonResponse(vacancies_json, safe=False)
    elif request.method == 'POST':
        return JsonResponse({'data': 'vacancy post request'})


def get_vacancy(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    if request.method == 'GET':
        return JsonResponse(vacancy.to_json())


def get_top10_vacancy(request):
    vacancies = Vacancy.objects.order_by("-salary")
    lenght = min(10, len(vacancies))
    vacancies_json = [vacancies[i].to_json() for i in range(lenght)]
    return JsonResponse(vacancies_json, safe=False)
