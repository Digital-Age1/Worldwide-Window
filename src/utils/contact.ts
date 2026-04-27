import contactData from '@/content/global/contact.json';

interface ContactContent {
  phone?: string;
  phoneDisplay?: string;
  phoneTel?: string;
  email?: string;
  address?: string;
  businessHours?: string;
}

const contact = contactData as ContactContent;
const displayPhone = contact.phoneDisplay || contact.phone || '(800) 223-1287';
const rawTel = contact.phoneTel || contact.phone || contact.phoneDisplay || '';
const telDigits = rawTel.replace(/\D/g, '');
const fallbackTel = telDigits
  ? telDigits.length === 10
    ? `+1${telDigits}`
    : `+${telDigits}`
  : '+18002231287';

export const contactInfo = {
  phoneDisplay: displayPhone,
  phone: displayPhone,
  phoneTel: contact.phoneTel || fallbackTel,
  email: contact.email || 'clean@worldwidewindow.net',
  address: contact.address || 'Washington, Oregon & Idaho',
  businessHours: contact.businessHours || 'Mon-Sat: 7:00 AM - 7:00 PM',
};
