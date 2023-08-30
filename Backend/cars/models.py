from django.db import models


class FoodMarket(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='media/image/')
    price = models.DecimalField(max_digits=5, decimal_places=2)

    def __str__(self):
        return self.title