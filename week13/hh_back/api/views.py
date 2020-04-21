from django.shortcuts import render

# Create your views here.
from api.serialize import CompanySerialize, VacancySerialize
from api.models import Company, Vacancy
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView


def get_company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerialize(companies, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CompanySerialize(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)


def get_company(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == 'GET':
        serializer = CompanySerialize(company)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = CompanySerialize(instance=company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.errors})

    elif request.method == 'DELETE':
        company.delete()

        return Response({'deleted': True})


def get_vacancies_by_company(request, id):
    try:
        vacancies = Vacancy.objects.filter(company_id=id).all()
        serializer = VacancySerialize(vacancies)
        return Response(serializer.data)
    except Exception as e:
        return Response({'error': str(e)})


def get_vacancy_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        serializer = VacancySerialize(vacancies, many=True)

        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = VacancySerialize(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response({'error': serializer.errors},
                        status=status.HTTP_500_INTERNAL_SERVER_ERROR)


def get_vacancy(request, id):
    try:
        vacancy = Vacancy.objects.get(id=id)
    except Vacancy.DoesNotExist as e:
        return Response({'error': str(e)})

    if request.method == 'GET':
        serializer = VacancySerialize(vacancy)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = CompanySerialize(instance=vacancy, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response({'error': serializer.errors})

    elif request.method == 'DELETE':
        vacancy.delete()

        return Response({'deleted': True})


def get_top10_vacancy(request):
    vacancies = Vacancy.objects.order_by("salary")
    length = min(10, len(vacancies))
    serializer = VacancySerialize(vacancies for i in range(length))
    return Response(serializer.data)
