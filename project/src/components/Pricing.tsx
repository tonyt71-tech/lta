import React from "react";

export default function Pricing() {
  return (
    <section id="pricing" className="px-4 md:px-6">
      <div className="page-wrap py-12 md:py-16">
        <h2 className="hd-2 mb-8">Lessons &amp; Pricing</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 1-on-1 Private */}
          <div className="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-sm">
            <h3 className="hd-3 mb-2">1-on-1 Private Lesson</h3>
            <p className="body mb-4">
              Personalized coaching, perfect for beginners or focused skill work.
            </p>
            <p className="hd-3" style={{ color: "var(--brand-accent)" }}>
              $25 per hour
            </p>
          </div>

          {/* 2–3 Players */}
          <div className="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-sm">
            <h3 className="hd-3 mb-2">Semi-Private (2–3 Players)</h3>
            <ul className="body space-y-2 mb-4">
              <li>
                2 Players: <strong>$18</strong> per person (
                <strong>$36/hour</strong> total)
              </li>
              <li>
                3 Players: <strong>$15</strong> per person (
                <strong>$45/hour</strong> total)
              </li>
            </ul>
            <p className="body">
              Balanced value and individual attention, ideal for friends or siblings.
            </p>
          </div>

          {/* 4–6 Players */}
          <div className="rounded-2xl border border-white/15 bg-white/5 p-6 shadow-sm">
            <h3 className="hd-3 mb-2">Small Group (4–6 Players)</h3>
            <ul className="body space-y-2">
              <li>
                4 Players: <strong>$12</strong> per person (
                <strong>$48/hour</strong> total)
              </li>
              <li>
                5 Players: <strong>$10</strong> per person (
                <strong>$50/hour</strong> total)
              </li>
              <li>
                6 Players: <strong>$9</strong> per person (
                <strong>$54/hour</strong> total)
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8">
          <a href="#contact" className="btn-primary">Schedule a Lesson</a>
        </div>
      </div>
    </section>
  );
}
