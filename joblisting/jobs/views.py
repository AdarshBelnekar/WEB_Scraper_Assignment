from rest_framework import generics
from django.http import HttpResponse
from .models import Job
from .serializers import JobSerializer


# JobListCreate - This handles both listing and creating jobs via the API.
class JobListCreate(generics.ListCreateAPIView):
    queryset = Job.objects.all()
    serializer_class = JobSerializer

    # Home View
def home(request):
    return HttpResponse("Welcome to the Job Listing API. Use /api/jobs/ to access the job listings.")