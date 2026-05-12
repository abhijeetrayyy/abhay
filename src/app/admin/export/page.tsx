'use client';

import { useEffect, useState } from 'react';
import * as data from '@/lib/data';

interface ExportItem {
  type: string;
  label: string;
  desc: string;
  icon: string;
}

export default function ExportPage() {
  const [exporting, setExporting] = useState(false);

  const exportData = async (type: string) => {
    setExporting(true);
    let rows: string[][] = [];

    switch (type) {
      case 'leads': {
        const contacts = await data.getAllContacts();
        rows = [['Name', 'Email', 'Phone', 'Subject', 'Source', 'Status', 'Priority', 'Date'],
          ...contacts.map(c => [c.name, c.email, c.phone || '', c.subject || '', c.source, c.status, c.priority, new Date(c.created_at).toISOString()])];
        break;
      }
      case 'registrations': {
        const regs = await data.getAllRegistrations();
        rows = [['First Name', 'Last Name', 'Email', 'Phone', 'Experience', 'Status', 'Priority', 'Date'],
          ...regs.map(r => [r.first_name, r.last_name, r.email, r.phone || '', r.experience_level || '', r.status, r.priority, new Date(r.created_at).toISOString()])];
        break;
      }
      case 'newsletter': {
        const subs = await data.getNewsletterSubscribers();
        rows = [['Email', 'Name', 'Source', 'Status', 'Date'],
          ...subs.map(s => [s.email, s.name || '', s.source, s.status, new Date(s.subscribed_at).toISOString()])];
        break;
      }
      case 'events': {
        const events = await data.getAllEvents();
        rows = [['Title', 'Type', 'Start Date', 'End Date', 'Location', 'Price', 'Status', 'Spots'],
          ...events.map(e => [e.title, e.event_type, e.start_date, e.end_date || '', `${e.location_city || ''}, ${e.location_country || ''}`, `$${e.price_amount}`, e.status, `${e.spots_remaining}/${e.max_participants}`])];
        break;
      }
    }

    const csv = rows.map(r => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a'); a.href = url; a.download = `${type}-export-${new Date().toISOString().split('T')[0]}.csv`; a.click();
    setExporting(false);
  };

  const items: ExportItem[] = [
    { type: 'leads', label: 'Leads & Inquiries', desc: 'All contact form submissions and begin journey requests', icon: '◉' },
    { type: 'registrations', label: 'Event Registrations', desc: 'All event applications and sign-ups', icon: '○' },
    { type: 'newsletter', label: 'Newsletter Subscribers', desc: 'Active email subscribers', icon: '◌' },
    { type: 'events', label: 'Events', desc: 'All events with details and capacity', icon: '◇' },
  ];

  return (
    <div className="p-8 lg:p-12" style={{ backgroundColor: '#FBF9F5' }}>
      <div className="mb-10">
        <h1 className="text-4xl mb-2" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontWeight: 400, color: '#1F1B16' }}>Export Data</h1>
        <p style={{ fontFamily: "'Lora', Georgia, serif", color: 'rgba(31,27,22,0.4)' }}>Download your data in CSV format for analysis and reporting.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <button key={item.type} onClick={() => exportData(item.type)} disabled={exporting}
            className="group p-6 text-left transition-all duration-300 disabled:opacity-50"
            style={{ backgroundColor: '#FDFCFA', border: '1px solid rgba(31,27,22,0.05)', borderRadius: 2, cursor: 'pointer' }}>
            <span className="text-3xl mb-4 block transition-colors" style={{ color: '#C9A04A' }}>{item.icon}</span>
            <h3 className="text-lg mb-2" style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: '#1F1B16', fontWeight: 400 }}>{item.label}</h3>
            <p className="text-sm mb-4" style={{ fontFamily: "'Lora', Georgia, serif", color: 'rgba(31,27,22,0.4)' }}>{item.desc}</p>
            <span className="text-xs flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ fontFamily: "'Cinzel', serif", color: '#A07D2E' }}>
              <span>↓</span> Download CSV
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
