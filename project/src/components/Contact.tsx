import React from 'react';

export default function Contact() {
  return (
    <main>
      <section className="section-solid">
        <div className="page-wrap py-14 md:py-20 text-center">
          <h1 className="hd-1">Contact &amp; Schedule</h1>
          <div className="divider mx-auto max-w-xl mt-6" />
          <p className="subhead opacity-90 mt-8">Get in touch or book your lesson directly.</p>
        </div>
      </section>

      <section className="section-panel">
        <div className="page-wrap py-12 md:py-16">
          <div className="card card-surface p-6 md:p-8">
            <p className="body"><strong>Email:</strong> lawtontennisacademy@gmail.com</p>
            <p className="body mt-2"><strong>Phone:</strong> (580) 483-3342</p>
          </div>

          <div className="mt-10">
            <a href="mailto:lawtontennisacademy@gmail.com" className="btn-primary">Schedule</a>
          </div>
        </div>
      </section>
    </main>
  );
}
