import React from 'react';

interface WelcomeProps {
  title?: string;
  subtitle?: string;
}

const Welcome: React.FC<WelcomeProps> = ({ 
  title = "Welcome to Your Fullstack Starter",
  subtitle = "A modern, production-ready template for building full-stack applications"
}) => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'center', 
      alignItems: 'center',
      padding: '2rem',
      textAlign: 'center'
    }}>
      <h1 style={{ 
        fontSize: '2.5rem', 
        fontWeight: 'bold', 
        marginBottom: '1rem',
        color: '#333'
      }}>
        {title}
      </h1>
      <p style={{ 
        fontSize: '1.2rem', 
        color: '#666',
        maxWidth: '600px',
        lineHeight: '1.6'
      }}>
        {subtitle}
      </p>
    </div>
  );
};

export default Welcome;
