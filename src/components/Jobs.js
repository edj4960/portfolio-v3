import React, { useEffect, useRef, useState } from 'react';
import SectionHeader from './SectionHeader';
import DeskIcon from './DeskIcon';
import jobs from '../data/jobs';

import './Jobs.scss';

const Jobs = () => {

  const [selected, setSelected] = useState(0);
  const [jobInfo, setJobInfo] = useState(jobs[0]);
  const markerRef = useRef();
  const selectedJobRef = useRef();

  useEffect(() => {
    markerRef.current.style.transform = `translateY(calc( ${selected}*var(--tab-height) + ${selected}*var(--offset)*2 + var(--offset) ))`;

    selectedJobRef.current.style.opacity = 0;

    setTimeout(() => {
      setJobInfo(jobs[selected]);

      document.querySelectorAll('#jobs-list li')?.forEach((item, idx) => {
        if (idx === selected) {
          item.classList.add('selected');
        } else {
          item.classList.remove('selected');
        }
      });

      selectedJobRef.current.style.opacity = 1;
    }, 400);
  }, [selected]);

  return (
    <section id='jobs-section'>
      <div className='container'>
        <SectionHeader>Where I've Worked</SectionHeader>

        <div className='jobs-content'>
          <DeskIcon className='desk-icon' />

          <div className='jobs-container'>
            <div className='jobs-selector'>
              <div ref={markerRef} className='selected-marker'/>
              <ul id='jobs-list'>
                {
                  jobs.map((job, idx) => <li key={job.name} onClick={() => setSelected(idx)}>{job.name}</li>)
                }
              </ul>
            </div>
            <div className='selected-job' ref={selectedJobRef}>
              <h3>
                <span>{jobInfo.title}</span>  
                <span className='company-link'>
                  &nbsp;@&nbsp;
                  <a href={jobInfo.link} rel="noreferrer" target="_blank">{jobInfo.name}</a>
                </span>
              </h3>
              <p>{jobInfo.dates}</p>
              <div className='job-text'>
                <ul>
                  {
                    jobInfo.info.map((pg, idx) => <li key={idx}>{pg}</li>)
                  }
                </ul>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </section>
  )
}

export default Jobs;