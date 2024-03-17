from django.contrib import admin
from HelloWorldApp.models import Topics,WebPage,AccessRecord

# Register your models here.

admin.site.register(Topics)
admin.site.register(WebPage)
admin.site.register(AccessRecord)