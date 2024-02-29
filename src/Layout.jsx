import './App.css';
import Header from './components/Shared/Header';
import Footer from './components/Shared//Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
