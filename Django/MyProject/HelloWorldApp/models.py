from django.db import models

# Create your models here.

class Topics(models.Model):

    topic=models.CharField(max_length=256,unique=True)

    def __str__(self):

        return self.topic


class WebPage(models.Model):

    topic=models.ForeignKey(Topics,on_delete=models.CASCADE)

    name=models.CharField(max_length=256,unique=True)

    url=models.CharField(max_length=256,unique=True)

    def __str__(self):

        return str(self.name)

class AccessRecord(models.Model):

    name=models.ForeignKey(WebPage,on_delete=models.CASCADE)

    date=models.DateField(unique=True)

    def __str__(self):

        return str(self.date)




    