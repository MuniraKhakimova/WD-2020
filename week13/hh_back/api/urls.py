from django.contrib import admin
from django.urls import path, include
from api import views
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('login/', obtain_jwt_token),
    path('api/companies/', views.get_company_list),
    path('api/companies/<int:id>/', views.get_company),
    path('api/companies/<int:id>/vacancies/', views.get_vacancies_by_company),
    path('api/vacancies/', views.get_vacancy_list),
    path('api/vacancies/<int:id>/', views.get_vacancy),
    path('api/vacancies/top_ten/', views.get_top10_vacancy)
]
