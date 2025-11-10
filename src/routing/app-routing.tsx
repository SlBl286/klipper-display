import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { AppRoutingSetup } from './app-routing-setup';

export function AppRouting() {

  const [previousLocation, setPreviousLocation] = useState('');
  const [firstLoad, setFirstLoad] = useState(true);
  const location = useLocation();
  const path = location.pathname.trim();

  useEffect(() => {
    if (firstLoad) {
 
        setFirstLoad(false);
    }
  });

  useEffect(() => {
    if (!CSS.escape(window.location.hash)) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [previousLocation]);

  return <AppRoutingSetup />;
}
