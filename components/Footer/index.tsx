import React, { useState, useEffect} from 'react';
import {Icon} from '@iconify/react';
import COLOUR from 'styles';
import Headline from 'components/Headline';
import useDarkMode from 'use-dark-mode';
import Paragraph from 'components/Paragraph';
import { FooterContainer, FooterContent, FooterTextContent, SocialIcons, SocialContainer} from './styled';
import ThemeButton from "components/ThemeButton";
import useCursorStyle from 'hooks';
interface FooterProps {
  mainColor?: string;
}

const Footer = ({ mainColor = COLOUR.blue_universe }: FooterProps) => {
  const [onDarkMode, setOnDarkMode] = useState(false);
  const darkmode = useDarkMode();

  useEffect(() => {
    setOnDarkMode(darkmode.value);
  }, [darkmode]);

  const {
    addCursorBorder,
    removeCursorBorder,
  } = useCursorStyle();

  
  const onMouseEnter = React.useCallback(() => {
    addCursorBorder();
  }, [addCursorBorder]);

  const onMouseLeave = React.useCallback(() => {
    removeCursorBorder();
  }, [addCursorBorder]);

  return (
    <FooterContainer suppressHydrationWarning={true}>
      <FooterContent>
        <Headline typeHeadline="h3">Get in touch</Headline>
        <FooterTextContent >
          <Paragraph
            highlightColor={mainColor}
            children={`<a href="mailto:kdmab10@gmail.com" title="kdmab10@gmail.com" target="_blank" rel="noopener noreferrer">kdmab10@gmail.com</a>`}
          />
        <SocialContainer>
            <SocialIcons onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} href="https://bit.ly/2TlC1kI" target="_blank" rel="noopener noreferrer">
            <Icon icon="icon-park-outline:github" height="28" />
            </SocialIcons>
            <SocialIcons  onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} href="https://bit.ly/3iyK3zl" target="_blank" rel="noopener noreferrer">
            <Icon icon="brandico:linkedin-rect" height="28" />
            </SocialIcons>
          </SocialContainer>    
            <Paragraph
              size={0.9}
              highlightColor={mainColor}
              children={`<p> Created with ❤️ using NextJs & GraphCMS view <a href="https://github.com/kmabika/kmabika.github.io" target="_blank" rel="noopener noreferrer" > source </a> on GitHub </p>`}
            />
        </FooterTextContent>
      </FooterContent>
      <ThemeButton callback={() => darkmode.toggle()} darkMode={onDarkMode}/>
    </FooterContainer>
  );
};

export default Footer;
