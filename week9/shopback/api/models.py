from django.db import models


# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=200)

    def __eq__(self, other):
        return self.name == other.name

    def __str__(self):
        return '{}: {}'.format(self.id, self.name)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name
        }


class Product(models.Model):
    name = models.CharField(max_length=200)
    price = models.FloatField()
    description = models.TextField(default='')
    count = models.IntegerField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return '{}: {}'.format(self.id, self.name)

    def to_json(self):
        return {
            'id': self.id,
            'category': self.category.name,
            'name': self.name,
            'description': self.description,
            'price': self.price,
            'count': self.count
        }

    def __eq__(self, other):
        return other.name == self.name
