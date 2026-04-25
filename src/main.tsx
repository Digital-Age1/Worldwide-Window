import { StrictMode } from 'react'
import './i18n'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import content from '@/content'

const seo = content.global.seo
document.title = seo.defaultTitle
document.querySelector('meta[name="description"]')?.setAttribute('content', seo.metaDescription)
document.querySelector('meta[name="keywords"]')?.setAttribute('content', seo.keywords || '')
document.querySelector('meta[property="og:title"]')?.setAttribute('content', seo.ogTitle || seo.defaultTitle)
document.querySelector('meta[property="og:description"]')?.setAttribute('content', seo.ogDescription || seo.metaDescription)
document.querySelector('link[rel="canonical"]')?.setAttribute('href', seo.canonicalUrl || window.location.href)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
