export const QUOTE_FORM_NAME = 'quote-form';

export const submitNetlifyForm = async (form: HTMLFormElement) => {
  const data = new URLSearchParams();
  new FormData(form).forEach((value, key) => {
    data.append(key, value.toString());
  });

  const response = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: data.toString(),
  });

  if (!response.ok) {
    throw new Error('Netlify form submission failed');
  }
};
