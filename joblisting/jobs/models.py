# scraper/models.py
from django.db import models
from uuid import uuid4

class Job(models.Model):
    job_id = models.UUIDField(default=uuid4, unique=True, primary_key=True, editable=False)
    job_title = models.CharField(max_length=255, null=True, blank=True)
    overview = models.TextField(null=True, blank=True)
    location = models.CharField(max_length=255, null=True, blank=True)
    pay_details = models.DecimalField(max_digits=10, decimal_places=2, null=True, blank=True)
    employment_details = models.JSONField(null=True, blank=True)
    skills = models.JSONField(null=True, blank=True)

    def __str__(self):
        return self.job_title
