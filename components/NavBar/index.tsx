import { useEffect, useState } from 'react';
import { LOGO_KD } from 'assets/images';
import Link from 'next/link';
import COLOUR from 'styles';
import { HeaderTypes, NavBarItemType } from 'types/interfaces';
import { NavItems } from './navItems';
import Paragraph from 'components/Paragraph';
import NavItem from 'components/NavItem';
import {
  HeaderWrapper,
  LogoWrapper,
  HeaderContent,
  MenuCloser,
  MenuContactInfo,
  MobileMenuWrapper,
  NavWrapper,
} from './styled';

const NavBar = ({ bgColor }: HeaderTypes) => {
  const limitScroll: number = 460;
  const [scrollTop, setScrollTop] = useState<number>(1);
  const [mounted, setMounted] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onScroll = (e: any) => {
    setScrollTop(e.target.documentElement.scrollTop);
  };

  const openMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (!mounted) {
      if (typeof window !== undefined && bgColor) {
        window.addEventListener('scroll', onScroll);
        setMounted(true);
      }
    }
  }, []);

  const iconVariants = {
    opened: {
      rotate: 135
    },
    closed: {
      rotate: 0
    }
  };

  const menuVariants = {
    opened: {
      top: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.5
      }
    },
    closed: {
      top: "-80vh"
    }
  };

  const linkVariants = {
    opened: {
      opacity: 1,
      y: 50
    },
    closed: {
      opacity: 0,
      y: 0
    }
  };

  return (
    <HeaderWrapper
      bgColor={bgColor}
      scrollTop={scrollTop}
      limitScroll={limitScroll}
    >
      <HeaderContent>
        <Link href="/">
          <LogoWrapper
            bgColor={bgColor}
            scrollTop={scrollTop}
            limitScroll={limitScroll}
          >
            {LOGO_KD}
            <div>
              <strong>Kudzai Mabika</strong>
              <span>Software Engineer.</span>
            </div>
          </LogoWrapper>
        </Link>
        <MobileMenuWrapper
          onClick={openMenu}
          bgColor={bgColor}
          scrollTop={scrollTop}
          limitScroll={limitScroll}
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </MobileMenuWrapper>
        <NavWrapper
          bgColor={bgColor}
          isOpen={isMenuOpen}
          limitScroll={limitScroll}
          scrollTop={scrollTop}
        >
          {NavItems.map((option: NavBarItemType, idx: number) => (
            <NavItem
              highlightColor={
                bgColor &&
                scrollTop !== undefined &&
                limitScroll &&
                scrollTop < limitScroll
                  ? COLOUR.white_cloud
                  : bgColor
              }
              key={idx}
              type={option?.type}
              label={option?.label}
              icon={option?.icon}
              isExternal={option?.isExternal}
              onClick={() => {
                option?.onClick();
                setIsMenuOpen(false);
              }}
              route={option?.route}
            />
          ))}
          <MenuContactInfo
            bgColor={bgColor}
            scrollTop={scrollTop}
            limitScroll={limitScroll}
          >
            <Paragraph
              highlightColor={bgColor}
              children={`<a href="mailto:kudzai.mabika10@gmail.com" title="kudzai.mabika10@gmail.com" target="_blank" rel="noopener noreferrer"> kudzai.mabika10@gmail.com</a>`}
            />
            <br />
            <br />
            <Paragraph
              highlightColor={bgColor}
              children={`<a href="tel:0738992160" title="0738992160" target="_blank" rel="noopener noreferrer"> +27-73-899-2160 </a>`}
            />
          </MenuContactInfo>
        </NavWrapper>
      </HeaderContent>
      <MenuCloser onClick={openMenu} isOpen={isMenuOpen} />
    </HeaderWrapper>
  );
};

export default NavBar;
