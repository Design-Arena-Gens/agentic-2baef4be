'use client';

import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [stage, setStage] = useState(0);
  const [currentScene, setCurrentScene] = useState(0);
  const videoRef = useRef(null);

  const scenes = [
    {
      location: 'Beach Paradise',
      bg: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      complaints: [
        "You didn't bring enough sunscreen!",
        "These towels aren't soft enough!",
        "Why did you book this hotel?",
      ]
    },
    {
      location: 'Mountain Resort',
      bg: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      complaints: [
        "It's too cold here!",
        "You should have packed warmer clothes!",
        "This hiking trail is too steep!",
      ]
    },
    {
      location: 'City Tour',
      bg: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      complaints: [
        "Why aren't we at the museum yet?",
        "You're walking too slow!",
        "This restaurant has terrible reviews!",
      ]
    }
  ];

  useEffect(() => {
    if (stage === 0) {
      const timer = setTimeout(() => setStage(1), 5000);
      return () => clearTimeout(timer);
    } else if (stage === 1) {
      const timer = setTimeout(() => {
        if (currentScene < scenes.length - 1) {
          setCurrentScene(currentScene + 1);
        } else {
          setStage(2);
        }
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [stage, currentScene, scenes.length]);

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: stage === 1 ? scenes[currentScene].bg : '#2d3748',
      transition: 'background 1s ease',
      overflow: 'hidden'
    }}>
      {stage === 0 && (
        <div style={{
          textAlign: 'center',
          color: 'white',
          padding: '40px',
          maxWidth: '800px',
          animation: 'fadeIn 1s ease-in'
        }}>
          <div style={{
            fontSize: '80px',
            marginBottom: '30px',
            animation: 'rock 2s ease-in-out infinite'
          }}>
            🪑👴
          </div>
          <div style={{
            background: 'rgba(0,0,0,0.6)',
            padding: '30px',
            borderRadius: '15px',
            backdropFilter: 'blur(10px)'
          }}>
            <p style={{
              fontSize: '36px',
              fontStyle: 'italic',
              margin: '0',
              lineHeight: '1.5',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}>
              "Going on vacation with wife...<br />
              is just a change of location."
            </p>
          </div>
        </div>
      )}

      {stage === 1 && (
        <div style={{
          textAlign: 'center',
          color: 'white',
          padding: '40px',
          width: '100%',
          animation: 'sceneIn 0.5s ease-in'
        }}>
          <div style={{
            fontSize: '48px',
            fontWeight: 'bold',
            marginBottom: '40px',
            textShadow: '3px 3px 6px rgba(0,0,0,0.5)'
          }}>
            📍 {scenes[currentScene].location}
          </div>
          <div style={{
            background: 'rgba(0,0,0,0.7)',
            padding: '40px',
            borderRadius: '20px',
            maxWidth: '600px',
            margin: '0 auto',
            backdropFilter: 'blur(15px)',
            border: '3px solid rgba(255,255,255,0.2)'
          }}>
            <div style={{
              fontSize: '72px',
              marginBottom: '30px',
              animation: 'bounce 1s ease infinite'
            }}>
              😤👩
            </div>
            {scenes[currentScene].complaints.map((complaint, idx) => (
              <p key={idx} style={{
                fontSize: '28px',
                margin: '20px 0',
                fontWeight: 'bold',
                color: '#ffd700',
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                animation: `fadeInUp 0.5s ease ${idx * 0.3}s both`
              }}>
                "{complaint}"
              </p>
            ))}
          </div>
        </div>
      )}

      {stage === 2 && (
        <div style={{
          textAlign: 'center',
          color: 'white',
          padding: '40px',
          maxWidth: '800px',
          animation: 'fadeIn 1s ease-in'
        }}>
          <div style={{
            fontSize: '80px',
            marginBottom: '30px',
            animation: 'rock 2s ease-in-out infinite'
          }}>
            🪑👴😌
          </div>
          <div style={{
            background: 'rgba(0,0,0,0.6)',
            padding: '30px',
            borderRadius: '15px',
            backdropFilter: 'blur(10px)'
          }}>
            <p style={{
              fontSize: '48px',
              fontWeight: 'bold',
              margin: '0',
              color: '#90EE90',
              textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
            }}>
              "Home sweet home." 🏡
            </p>
          </div>
          <button
            onClick={() => {
              setStage(0);
              setCurrentScene(0);
            }}
            style={{
              marginTop: '40px',
              padding: '15px 40px',
              fontSize: '24px',
              background: '#4a5568',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              cursor: 'pointer',
              transition: 'transform 0.2s',
              boxShadow: '0 4px 6px rgba(0,0,0,0.3)'
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            ↻ Watch Again
          </button>
        </div>
      )}

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes rock {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }

        @keyframes sceneIn {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
