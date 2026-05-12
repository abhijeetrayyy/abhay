'use client';

import { useState } from 'react';

export default function ExportPage() {
  const [exporting, setExporting] = useState(false);

  const exportData = async (type: string) => {
    setExporting(true);

    // Simulated export - in production, fetch from Supabase
    const data = [
      ['Name', 'Email', 'Status', 'Date'],
      ['Maria Santos', 'maria@example.com', 'New', '2026-05-13'],
      ['James Chen', 'james@example.com', 'Contacted', '2026-05-12'],
    ];

    const csv = data.map(row => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${type}-export-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();

    setExporting(false);
  };

  return (
    <div className="p-8 lg:p-12">
      <div className="mb-10">
        <h1 className="text-cream text-4xl mb-2" style={{ fontFamily: 'var(--font-display)', fontWeight: 300 }}>
          Export Data
        </h1>
        <p className="text-cream/40" style={{ fontFamily: 'var(--font-body)' }}>
          Download your data in CSV format for analysis and reporting.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { type: 'leads', label: 'Leads & Inquiries', desc: 'All contact form submissions and begin journey requests', icon: '◉' },
          { type: 'registrations', label: 'Event Registrations', desc: 'All event applications and sign-ups', icon: '○' },
          { type: 'newsletter', label: 'Newsletter Subscribers', desc: 'Active email subscribers', icon: '◌' },
          { type: 'events', label: 'Events', desc: 'All events with details and capacity', icon: '◇' },
        ].map((item) => (
          <button
            key={item.type}
            onClick={() => exportData(item.type)}
            disabled={exporting}
            className="group bg-charcoal-light border border-cream/10 rounded-sm p-6 text-left hover:border-sage/30 transition-all duration-300 disabled:opacity-50"
          >
            <span className="text-3xl text-sage/60 group-hover:text-sage mb-4 block transition-colors">{item.icon}</span>
            <h3 className="text-cream text-lg mb-2" style={{ fontFamily: 'var(--font-display)' }}>
              {item.label}
            </h3>
            <p className="text-cream/40 text-sm mb-4" style={{ fontFamily: 'var(--font-body)' }}>
              {item.desc}
            </p>
            <span className="text-sage text-xs flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ fontFamily: 'var(--font-label)' }}>
              <span>↓</span> Download CSV
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
