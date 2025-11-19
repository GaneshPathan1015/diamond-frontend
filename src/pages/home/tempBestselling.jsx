// best selling redesign 


import React, { useState, useEffect, useRef } from 'react';

// Mock API function - replace with your actual backend endpoint
const fetchRings = async (category) => {
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 500));
  
  const rings = {
    engagement: [
      { id: 1, name: 'Arc Hidden Halo Engagement Ring', image: '/api/placeholder/300/300' },
      { id: 2, name: 'The Windsor Ring', image: '/api/placeholder/300/300' },
      { id: 3, name: 'Slender Vine Six Prong Engagement Ring', image: '/api/placeholder/300/300' },
      { id: 4, name: 'Glamour Twisted Diamond Engagement Ring', image: '/api/placeholder/300/300' },
      { id: 5, name: 'The Chrysler Ring', image: '/api/placeholder/300/300' },
      { id: 6, name: 'The Park Avenue Ring', image: '/api/placeholder/300/300' },
    ],
    anniversary: [
      { id: 7, name: 'Eternal Band Ring', image: '/api/placeholder/300/300' },
      { id: 8, name: 'Diamond Eternity Ring', image: '/api/placeholder/300/300' },
      { id: 9, name: 'Classic Anniversary Band', image: '/api/placeholder/300/300' },
      { id: 10, name: 'Vintage Anniversary Ring', image: '/api/placeholder/300/300' },
    ],
    eternity: [
      { id: 11, name: 'Full Eternity Diamond Ring', image: '/api/placeholder/300/300' },
      { id: 12, name: 'Half Eternity Band Ring', image: '/api/placeholder/300/300' },
      { id: 13, name: 'Pave Eternity Ring', image: '/api/placeholder/300/300' },
      { id: 14, name: 'Channel Set Eternity Band', image: '/api/placeholder/300/300' },
    ],
  };
  
  return rings[category] || [];
};

const RingsCatalog = () => {
  const [activeTab, setActiveTab] = useState('engagement');
  const [rings, setRings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollContainerRef = useRef(null);
  const scrollTimeoutRef = useRef(null);

  useEffect(() => {
    const loadRings = async () => {
      setLoading(true);
      const data = await fetchRings(activeTab);
      setRings(data);
      setLoading(false);
    };
    
    loadRings();
  }, [activeTab]);

  const handleScroll = () => {
    setIsScrolling(true);
    
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, 150);
  };

  const tabs = [
    { id: 'engagement', label: 'ENGAGEMENT RINGS' },
    { id: 'anniversary', label: 'ANNIVERSARY RINGS' },
    { id: 'eternity', label: 'ETERNITY RINGS' },
  ];

  const styles = {
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '40px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
    },
    title: {
      textAlign: 'center',
      fontSize: '2.5rem',
      fontWeight: '400',
      marginBottom: '40px',
      color: '#1a1a1a',
    },
    tabsWrapper: {
      position: 'relative',
      marginBottom: '60px',
    },
    tabsContainer: {
      display: 'flex',
      overflowX: 'auto',
      gap: '20px',
      padding: '10px 20px',
      scrollBehavior: 'smooth',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
      WebkitOverflowScrolling: 'touch',
    },
    tabsScrollbar: {
      position: 'absolute',
      bottom: '-10px',
      left: '50%',
      transform: 'translateX(-50%)',
      height: '3px',
      width: isScrolling ? '60px' : '0',
      backgroundColor: '#1a1a1a',
      borderRadius: '2px',
      transition: 'width 0.3s ease',
    },
    tab: {
      background: 'none',
      border: 'none',
      fontSize: '0.95rem',
      letterSpacing: '0.5px',
      color: '#666',
      cursor: 'pointer',
      padding: '10px 20px',
      transition: 'all 0.3s ease',
      position: 'relative',
      whiteSpace: 'nowrap',
      flexShrink: 0,
    },
    activeTab: {
      color: '#1a1a1a',
      fontWeight: '600',
    },
    tabUnderline: {
      position: 'absolute',
      bottom: '0',
      left: '20px',
      right: '20px',
      height: '2px',
      backgroundColor: '#1a1a1a',
      transform: 'scaleX(1)',
      transition: 'transform 0.3s ease',
    },
    gridWrapper: {
      position: 'relative',
      marginTop: '40px',
    },
    gridContainer: {
      display: 'flex',
      overflowX: 'auto',
      gap: '40px',
      padding: '20px 0',
      scrollBehavior: 'smooth',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
      WebkitOverflowScrolling: 'touch',
    },
    gridScrollbar: {
      position: 'absolute',
      bottom: '0',
      left: '50%',
      transform: 'translateX(-50%)',
      height: '4px',
      width: isScrolling ? '120px' : '0',
      backgroundColor: '#1a1a1a',
      borderRadius: '2px',
      transition: 'width 0.4s ease',
    },
    card: {
      minWidth: '280px',
      maxWidth: '280px',
      textAlign: 'center',
      transition: 'transform 0.3s ease',
      flexShrink: 0,
    },
    imageWrapper: {
      backgroundColor: '#f8f8f8',
      borderRadius: '8px',
      padding: '30px',
      marginBottom: '20px',
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: 'auto',
      display: 'block',
      transition: 'transform 0.3s ease',
    },
    ringName: {
      fontSize: '1rem',
      fontWeight: '400',
      color: '#333',
      lineHeight: '1.5',
      margin: '0',
    },
    loading: {
      textAlign: 'center',
      fontSize: '1.2rem',
      color: '#666',
      padding: '60px 0',
    },
  };

  // Hide scrollbar CSS
  const hiddenScrollbarStyle = `
    .tabs-scroll::-webkit-scrollbar,
    .grid-scroll::-webkit-scrollbar {
      display: none;
    }
  `;

  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = hiddenScrollbarStyle;
    document.head.appendChild(styleElement);
    return () => document.head.removeChild(styleElement);
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Explore Our Bestselling Rings</h1>
      
      <div style={styles.tabsWrapper}>
        <div 
          className="tabs-scroll"
          style={styles.tabsContainer}
          onScroll={handleScroll}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              style={{
                ...styles.tab,
                ...(activeTab === tab.id ? styles.activeTab : {}),
              }}
              onClick={() => setActiveTab(tab.id)}
              onMouseEnter={(e) => e.target.style.color = '#1a1a1a'}
              onMouseLeave={(e) => {
                if (activeTab !== tab.id) e.target.style.color = '#666';
              }}
            >
              {tab.label}
              {activeTab === tab.id && <div style={styles.tabUnderline} />}
            </button>
          ))}
        </div>
        <div style={styles.tabsScrollbar} />
      </div>

      {loading ? (
        <div style={styles.loading}>Loading...</div>
      ) : (
        <div style={styles.gridWrapper}>
          <div 
            ref={scrollContainerRef}
            className="grid-scroll"
            style={styles.gridContainer}
            onScroll={handleScroll}
          >
            {rings.map((ring) => (
              <div 
                key={ring.id} 
                style={styles.card}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  const img = e.currentTarget.querySelector('img');
                  if (img) img.style.transform = 'scale(1)';
                }}
              >
                <div style={styles.imageWrapper}>
                  <img src={ring.image} alt={ring.name} style={styles.image} />
                </div>
                <h3 style={styles.ringName}>{ring.name}</h3>
              </div>
            ))}
          </div>
          <div style={styles.gridScrollbar} />
        </div>
      )}
    </div>
  );
};

export default RingsCatalog;