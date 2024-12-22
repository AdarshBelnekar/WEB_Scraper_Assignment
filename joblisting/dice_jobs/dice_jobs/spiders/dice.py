import scrapy
import requests



class DiceSpider(scrapy.Spider):
    name = "dice"
    start_urls = ["https://www.dice.com/job-detail/e6652e6a-d66f-4dc0-bb74-2924ab23e12c"]

    def parse(self, response):
        # Extract Job Details
        job_data = {
            "job_id": response.url.split("/")[-1],
            "job_title": response.css('h1[data-cy="jobTitle"]::text').get(),
            "overview": response.css('p.job-overview_overviewHeader__yY9Ap::text').get(),
            "location": response.css('div[data-cy="locationDetails"] span::text').get(),
            "pay_details": response.css('div[data-cy="payDetails"] span::text').get(),
            "employment_details": response.css('div[data-cy="employmentDetails"] span::text').getall(),
            "skills": response.css('div[data-cy="skillsList"] span::text').getall(),
        }

        # Send data to Django backend
        self.send_to_django(job_data)

        # Handle Pagination (if applicable)
        next_page_url = self.get_next_page_url(response)
        if next_page_url:
            yield scrapy.Request(url=next_page_url, callback=self.parse)

    def get_next_page_url(self, response):
        # Identify next page URL logic (if applicable)
        next_button = response.css('a.next_page::attr(href)').get()
        return response.urljoin(next_button) if next_button else None

    def send_to_django(self, job_data):
        url = "http://127.0.0.1:8000/api/jobs/"  # Django REST API endpoint
        headers = {"Content-Type": "application/json"}
        response = requests.post(url, json=job_data, headers=headers)

        if response.status_code == 201:
            print(f"Job data saved successfully: {job_data['job_title']}")
        else:
            self.log(f"Failed to save job data: {response.status_code}")
