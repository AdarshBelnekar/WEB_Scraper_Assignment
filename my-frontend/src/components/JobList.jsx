import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch jobs from the backend
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/jobs/');
        setJobs(response.data); // Set jobs data from the API response
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch jobs');
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <div className="flex justify-between items-center mb-4">
        <div className="text-gray-600">Most recent</div>
      </div>
      <div className="space-y-4">
        {jobs.map((job) => (
          <Link key={job.id} to={`/jobs/${job.id}`} className="block bg-gray-50 p-4 rounded shadow hover:bg-gray-100">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-lg font-bold">{job.job_title}</div>
                <div className="text-gray-600">{job.company}</div>
                <div className="text-gray-600">{job.location} <span></span><p>{job.posted_date}</p></div>
                <div className="text-gray-600">{job.overview}</div>

              </div>
              <div className="text-gray-600">{job.pay}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default JobList;
