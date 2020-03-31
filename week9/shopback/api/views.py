from django.http.response import JsonResponse, HttpResponse
from api.models import Product, Category


def product_list(request):
    products = Product.objects.all()
    product_names = [str(product) + '<br>' for product in products]
    return HttpResponse(product_names)


def product_description(request, id):
    try:
        product = Product.objects.get(id=id)
    except Product.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, safe=False)
    return JsonResponse(product.to_json())


def products_by_category(request, id):
    try:
        category = Category.objects.get(id=id)
    except Category.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, safe=False)

    products = Product.objects.filter(category_id=id).all()
    product_names = [str(product) + '<br>' for product in products]
    return HttpResponse(product_names)


def category_list(request):
    categories = Category.objects.all()
    category_names = [str(category) + '<br>' for category in categories]
    return HttpResponse(category_names)


def category_by_id(request, id):
    try:
        category = Category.objects.get(id=id)
    except Category.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, safe=False)
    return JsonResponse(category.to_json())
