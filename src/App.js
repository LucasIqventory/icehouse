import { createElement } from 'react';
import { Route, Routes } from 'react-router-dom';
import SiteLayout from './components/SiteLayout.jsx';
import HomePage from './pages/HomePage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';
import ContactPage from './pages/ContactPage.tsx';

function PlaceholderPage({ title }) {
  return createElement(
    'main',
    { className: 'section-band frost-band', id: 'main' },
    createElement('div', { className: 'section-shell' }, createElement('h1', null, title)),
  );
}

export default function App() {
  return createElement(
    Routes,
    null,
    createElement(
      Route,
      { element: createElement(SiteLayout) },
      createElement(Route, { path: '/', element: createElement(HomePage) }),
      createElement(Route, { path: '/products', element: createElement(ProductsPage) }),
      createElement(Route, { path: '/contact', element: createElement(ContactPage) }),
    ),
  );
}