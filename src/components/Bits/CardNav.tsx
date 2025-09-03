'use client'

import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';

type CardNavLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

export type CardNavItem = {
  label: string;
  bgColor: string;
  textColor: string;
  links: CardNavLink[];
};

export interface CardNavProps {
  logo: string;
  logoAlt?: string;
  items: CardNavItem[];
  className?: string;
  ease?: string;
  baseColor?: string;
  menuColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
}

const CardNav: React.FC<CardNavProps> = ({
  logo,
  logoAlt = 'Logo',
  items,
  className = '',
  ease = 'power3.out',
  baseColor = '#fff',
  menuColor,
  buttonBgColor,
  buttonTextColor
}) => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 300;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      const contentEl = navEl.querySelector('.card-nav-content') as HTMLElement;
      if (contentEl) {
        const wasVisible = contentEl.style.visibility;
        const wasPointerEvents = contentEl.style.pointerEvents;
        const wasPosition = contentEl.style.position;
        const wasHeight = contentEl.style.height;

        contentEl.style.visibility = 'visible';
        contentEl.style.pointerEvents = 'auto';
        contentEl.style.position = 'static';
        contentEl.style.height = 'auto';

        contentEl.offsetHeight;

        const topBar = 80;
        const padding = 16;
        const contentHeight = contentEl.scrollHeight;

        contentEl.style.visibility = wasVisible;
        contentEl.style.pointerEvents = wasPointerEvents;
        contentEl.style.position = wasPosition;
        contentEl.style.height = wasHeight;

        return topBar + contentHeight + padding;
      }
    }
    return 300;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 80, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: 60, opacity: 0 });

    const tl = gsap.timeline({ paused: true });

    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.4,
      ease
    });

    tl.to(cardsRef.current, { y: 0, opacity: 1, duration: 0.4, ease, stagger: 0.08 }, '-=0.1');

    return tl;
  };

  useLayoutEffect(() => {
    const tl = createTimeline();
    tlRef.current = tl;

    return () => {
      tl?.kill();
      tlRef.current = null;
    };
  }, [ease, items]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;

      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.set(navRef.current, { height: newHeight });

        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          newTl.progress(1);
          tlRef.current = newTl;
        }
      } else {
        tlRef.current.kill();
        const newTl = createTimeline();
        if (newTl) {
          tlRef.current = newTl;
        }
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    if (!isExpanded) {
      setIsHamburgerOpen(true);
      setIsExpanded(true);
      tl.play(0);
    } else {
      setIsHamburgerOpen(false);
      tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
      tl.reverse();
    }
  };

  const closeMenu = () => {
    if (isExpanded) {
      setIsHamburgerOpen(false);
      const tl = tlRef.current;
      if (tl) {
        tl.eventCallback('onReverseComplete', () => setIsExpanded(false));
        tl.reverse();
      }
    }
  };

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div
      className={`card-nav-container absolute left-1/2 -translate-x-1/2 w-[90%] max-w-[1200px] z-[99] top-2 md:top-6 ${className}`}
    >
      <nav
        ref={navRef}
        className={`card-nav ${isExpanded ? 'open' : ''} block h-[80px] p-0 rounded-xl shadow-md relative overflow-hidden will-change-[height]`}
        style={{ backgroundColor: baseColor }}
      >
        <div className="card-nav-top absolute inset-x-0 top-0 h-[80px] flex items-center justify-between py-2 px-4 z-[2]">
          <div className="logo-container flex items-center">
            <Link href="/" className='flex mobile:gap-x-2.5 gap-x-1.5 flex-shrink-0 items-center outline-none'>
              <div className="tablet:h-[48px] mobile:h-[42px] aspect-square h-9 relative">
                <Image
                  src="/images/logo/Logo.svg"
                  alt="VibeNear Logo"
                  fill
                  className="rounded-lg object-cover aspect-square"
                />
              </div>
              <span className="tablet:text-4xl mobile:text-[28px] text-2xl font-semibold font-reddit text-[#2970FF]">VibeNear</span>
            </Link>
          </div>

          <div className='flex items-center gap-x-2'>
            <div className="hidden sm:block">
              <Link
                href="#join-waitlist"
                className="h-[48px] w-[190px] flex justify-center items-center px-6 py-3 bg-[#1E5AE8] text-xl leading-6 text-white font-semibold rounded-xl hover:bg-[#1A4FD1] transition-all duration-200 whitespace-nowrap focus:outline-none focus-visible:scale-105"
              >
                Join Waitlist
              </Link>
            </div>

            <div
              className={`hamburger-menu ${isHamburgerOpen ? 'open' : ''} group h-full flex flex-col items-center justify-center cursor-pointer gap-[6px] px-2 py-3 focus-visible:bg-gray-100 rounded-lg focus-visible:outline-none`}
              onClick={toggleMenu}
              role="button"
              aria-label={isExpanded ? 'Close menu' : 'Open menu'}
              tabIndex={0}
              style={{ color: menuColor || '#000' }}
            >
              <div
                className={`hamburger-line w-[30px] h-[2px] bg-current transition-all duration-300 ease-in-out [transform-origin:50%_50%] ${isHamburgerOpen ? 'translate-y-[4px] rotate-45' : ''
                  } group-hover:opacity-75`}
              />
              <div
                className={`hamburger-line w-[30px] h-[2px] bg-current transition-all duration-300 ease-in-out [transform-origin:50%_50%] ${isHamburgerOpen ? '-translate-y-[4px] -rotate-45' : ''
                  } group-hover:opacity-75`}
              />
            </div>
          </div>

        </div>

        <div
          className={`card-nav-content absolute left-0 right-0 top-[80px] bottom-0 p-2 flex flex-row flex-wrap items-stretch gap-2 justify-start z-[1] ${isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
            }  md:items-end md:gap-[12px]`}
          aria-hidden={!isExpanded}
        >
          {(items || []).slice(0, 3).map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className="nav-card select-none relative flex flex-col gap-2 p-[12px_16px] pe-6 rounded-[calc(0.75rem-0.2rem)] min-w-0 flex-[1_1_auto] h-auto min-h-[80px] md:h-full md:min-h-0 md:flex-[1_1_0%]"
              ref={setCardRef(idx)}
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <div className="nav-card-label font-normal tracking-[-0.5px] text-[18px] md:text-[22px]">
                {item.label}
              </div>
              <div className="nav-card-links mt-auto flex flex-col gap-[2px]">
                {item.links?.map((lnk, i) => (
                  <Link
                    key={`${lnk.label}-${i}`}
                    className="nav-card-link inline-flex items-center gap-[6px] no-underline cursor-pointer transition-opacity duration-300 hover:opacity-90 text-[15px] md:text-[16px]"
                    href={lnk.href}
                    aria-label={lnk.ariaLabel}
                    onClick={closeMenu}
                  >
                    <Image src="/images/icons/ArrowUpRight.svg" width={24} height={24} alt="ArrowUpRight" className="nav-card-link-icon shrink-0 text-white" aria-hidden="true" />
                    {lnk.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
