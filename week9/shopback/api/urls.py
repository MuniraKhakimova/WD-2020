from django.contrib import admin
from django.urls import path, include
from api import views

urlpatterns = [
    path('', views.product_list),
    path('api/products', views.product_list),
    path('api/product/<int:id>', views.get_product),
    path('api/categories', views.get_list_of_category),
    path('api/categories/<int:id>', views.get_category_id),
    path('api/categories/<int:id>/products', views.get_products_from_category)
]
