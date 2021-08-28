import { useState, createContext, useContext, useEffect, useRef } from 'react';

export const SnipcartContext = createContext();

export const SnipcartProvider = ({ children }) => {
  const snipcart = useSnipcartState();
  return (
    <SnipcartContext.Provider value={snipcart}>
      { children }
    </SnipcartContext.Provider>
  )
}

export function useSnipcartState() {
  const subscriptionRef = useRef();
  const [state, setState] = useState({});

  useEffect(() => {
    let unsubscribe;

    (function pollToSubscribe() {
      if ( window.Snipcart ) {
        unsubscribe = window.Snipcart.store.subscribe(() => refreshState());
        return;
      }
      setTimeout(() => pollToSubscribe(), 100)
    })();

    return () => unsubscribe && unsubscribe();
  }, []);

  /**
   * getState
   */

  function getState() {
    return window.Snipcart.store.getState();
  }

  /**
   * refreshState
   */

  function refreshState() {
    const state = getState();
    setState(state);
  }

  return {
    refreshState,
    getState,
    ...state,
  }
}

export function useSnipcart() {
  const snipcart = useContext(SnipcartContext);
  return snipcart;
}