import React, { useState, useEffect, useRef, useCallback } from 'react';

// 7 Luxury Financial & Stewardship Background Videos from assets
export const HERO_VIDEOS = [
  {
    id: 0,
    src: '/assets/hero-videos/advisor-client-consulting.mp4',
    title: 'Advisory Consultation',
    subtitle: 'Fiduciary Stewardship & Planning'
  },
  {
    id: 1,
    src: '/assets/hero-videos/family-time-home.mp4',
    title: 'Family Wealth',
    subtitle: 'Securing Multi-Generational Prosperity'
  },
  {
    id: 2,
    src: '/assets/hero-videos/family-hospital-protection.mp4',
    title: 'Life & Health Shield',
    subtitle: 'Comprehensive Capital Protection'
  },
  {
    id: 3,
    src: '/assets/hero-videos/financial-advisor-bonds.mp4',
    title: 'Bonds & Fixed Income',
    subtitle: 'Disciplined Sovereign & AAA Allocation'
  },
  {
    id: 4,
    src: '/assets/hero-videos/financial-advisor-laptop.mp4',
    title: 'Portfolio Analytics',
    subtitle: 'Quantitative Multi-Cycle Research'
  },
  {
    id: 5,
    src: '/assets/hero-videos/manager-investment-review.mp4',
    title: 'Institutional Guidance',
    subtitle: 'Direct Routing with Premier AMCs'
  },
  {
    id: 6,
    src: '/assets/hero-videos/tax-dashboard-planning.mp4',
    title: 'Tax Optimization',
    subtitle: 'Strategic Long-Term Compounding'
  }
];

export function HeroVideoBackground({ onSceneChange }) {
  // Current active video playlist index (0 to 6)
  const [currentIndex, setCurrentIndex] = useState(0);

  // Which video DOM slot is currently visible and primary ('A' or 'B')
  const [activeSlot, setActiveSlot] = useState('A');

  const onSceneChangeRef = useRef(onSceneChange);
  useEffect(() => {
    onSceneChangeRef.current = onSceneChange;
  });

  // Slot states: track src, opacity, and zIndex for dual-buffer crossfade
  const [slotA, setSlotA] = useState({
    src: HERO_VIDEOS[0].src,
    index: 0,
    opacity: 1,
    zIndex: 2
  });

  const [slotB, setSlotB] = useState({
    src: HERO_VIDEOS[1].src,
    index: 1,
    opacity: 0,
    zIndex: 1
  });

  const videoRefA = useRef(null);
  const videoRefB = useRef(null);
  const isTransitioningRef = useRef(false);
  const transitionTimerRef = useRef(null);
  const fallbackTimerRef = useRef(null);

  // Transition to next video smoothly with ZERO black gap
  const transitionToVideo = useCallback((targetIndex) => {
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;

    if (fallbackTimerRef.current) {
      clearTimeout(fallbackTimerRef.current);
    }

    const nextIndex = targetIndex !== undefined 
      ? targetIndex 
      : (currentIndex + 1) % HERO_VIDEOS.length;

    const nextVideoData = HERO_VIDEOS[nextIndex];

    if (activeSlot === 'A') {
      // Slot A is currently visible; prepare and fade in Slot B
      const vidB = videoRefB.current;
      const vidA = videoRefA.current;

      // Update Slot B src if not already set
      setSlotB(prev => ({
        ...prev,
        src: nextVideoData.src,
        index: nextIndex,
        zIndex: 2 // Bring incoming video on top
      }));

      // Make sure Slot A stays at full opacity underneath during the fade
      setSlotA(prev => ({ ...prev, zIndex: 1 }));

      const startFadeB = () => {
        if (!vidB) return;
        vidB.currentTime = 0;
        const playPromise = vidB.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Video B is now actively decoding & rendering frames.
              // Smoothly fade it in on top of Video A (which is still playing!).
              setSlotB(prev => ({ ...prev, opacity: 1 }));

              // After 1200ms crossfade finishes:
              transitionTimerRef.current = setTimeout(() => {
                // Pause old Video A
                if (vidA) {
                  try { vidA.pause(); } catch (e) { /* silent */ }
                }

                // Prepare Slot A with the video AFTER next so it's preloaded
                const prepIndex = (nextIndex + 1) % HERO_VIDEOS.length;
                setSlotA({
                  src: HERO_VIDEOS[prepIndex].src,
                  index: prepIndex,
                  opacity: 0,
                  zIndex: 1
                });

                setActiveSlot('B');
                setCurrentIndex(nextIndex);
                isTransitioningRef.current = false;
              }, 1200);
            })
            .catch(() => {
              // Fallback if browser blocked autoplay
              setSlotB(prev => ({ ...prev, opacity: 1 }));
              setActiveSlot('B');
              setCurrentIndex(nextIndex);
              isTransitioningRef.current = false;
            });
        }
      };

      // If video B src needs to load, wait for canplay or timeout
      if (vidB && vidB.src && vidB.src.includes(nextVideoData.src) && vidB.readyState >= 2) {
        startFadeB();
      } else {
        setTimeout(startFadeB, 80);
      }

    } else {
      // Slot B is currently visible; prepare and fade in Slot A
      const vidA = videoRefA.current;
      const vidB = videoRefB.current;

      setSlotA(prev => ({
        ...prev,
        src: nextVideoData.src,
        index: nextIndex,
        zIndex: 2 // Bring incoming video on top
      }));

      setSlotB(prev => ({ ...prev, zIndex: 1 }));

      const startFadeA = () => {
        if (!vidA) return;
        vidA.currentTime = 0;
        const playPromise = vidA.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setSlotA(prev => ({ ...prev, opacity: 1 }));

              transitionTimerRef.current = setTimeout(() => {
                if (vidB) {
                  try { vidB.pause(); } catch (e) { /* silent */ }
                }

                const prepIndex = (nextIndex + 1) % HERO_VIDEOS.length;
                setSlotB({
                  src: HERO_VIDEOS[prepIndex].src,
                  index: prepIndex,
                  opacity: 0,
                  zIndex: 1
                });

                setActiveSlot('A');
                setCurrentIndex(nextIndex);
                isTransitioningRef.current = false;
              }, 1200);
            })
            .catch(() => {
              setSlotA(prev => ({ ...prev, opacity: 1 }));
              setActiveSlot('A');
              setCurrentIndex(nextIndex);
              isTransitioningRef.current = false;
            });
        }
      };

      if (vidA && vidA.src && vidA.src.includes(nextVideoData.src) && vidA.readyState >= 2) {
        startFadeA();
      } else {
        setTimeout(startFadeA, 80);
      }
    }
  }, [activeSlot, currentIndex]);

  // Initial playback on mount
  useEffect(() => {
    const vidA = videoRefA.current;
    if (vidA) {
      vidA.muted = true;
      vidA.playsInline = true;
      const p = vidA.play();
      if (p !== undefined) {
        p.catch(() => {
          // Autoplay handled by browser policy
        });
      }
    }

    return () => {
      if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
      if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current);
    };
  }, []);

  // Monitor playback time to trigger crossfade before video ends
  const handleTimeUpdate = (slot) => {
    if (slot !== activeSlot || isTransitioningRef.current) return;
    const vid = slot === 'A' ? videoRefA.current : videoRefB.current;
    if (!vid) return;

    // When 1.4s remain in current video, trigger the crossfade!
    if (vid.duration && Number.isFinite(vid.duration)) {
      if (vid.currentTime >= Math.max(1, vid.duration - 1.4)) {
        transitionToVideo();
      }
    }
  };

  // If ended event fires before timeupdate, trigger transition immediately
  const handleEnded = (slot) => {
    if (slot === activeSlot && !isTransitioningRef.current) {
      transitionToVideo();
    }
  };

  // Fallback timer: if a video doesn't trigger timeupdate or ended within 9 seconds
  useEffect(() => {
    if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current);
    fallbackTimerRef.current = setTimeout(() => {
      if (!isTransitioningRef.current) {
        transitionToVideo();
      }
    }, 9000);

    return () => {
      if (fallbackTimerRef.current) clearTimeout(fallbackTimerRef.current);
    };
  }, [currentIndex, transitionToVideo]);

  // Notify parent of active video scene index and transitionToVideo trigger
  useEffect(() => {
    if (onSceneChangeRef.current) {
      onSceneChangeRef.current({ currentIndex, transitionToVideo });
    }
  }, [currentIndex, transitionToVideo]);

  return (
    <div className="hero-video-bg-container" aria-hidden="true">
      {/* Video Slot A */}
      <video
        ref={videoRefA}
        src={slotA.src}
        className="hero-video-bg-slot"
        style={{
          opacity: slotA.opacity,
          zIndex: slotA.zIndex
        }}
        muted
        playsInline
        autoPlay
        preload="auto"
        onTimeUpdate={() => handleTimeUpdate('A')}
        onEnded={() => handleEnded('A')}
      />

      {/* Video Slot B */}
      <video
        ref={videoRefB}
        src={slotB.src}
        className="hero-video-bg-slot"
        style={{
          opacity: slotB.opacity,
          zIndex: slotB.zIndex
        }}
        muted
        playsInline
        preload="auto"
        onTimeUpdate={() => handleTimeUpdate('B')}
        onEnded={() => handleEnded('B')}
      />

      {/* Left-side cinematic backdrop gradient for razor-sharp text readability without darkening people on the right */}
      <div className="hero-video-tint" />
    </div>
  );
}

export default HeroVideoBackground;
