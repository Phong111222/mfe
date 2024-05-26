import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);

    return () => {
      ref.current = null;
    };
  }, []);

  return <div ref={ref} />;
};
