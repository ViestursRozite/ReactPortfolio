import React from "react";
import {
  InfoConatainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  DatBanner,
  DatClickToExpand,
  DatAboutProject,
} from "./InfoElements";
import useCollapse from "react-collapsed";
import { Button } from "../ButtonElements";

export const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  const { getCollapseProps, getToggleProps, isExpanded=true } = useCollapse();

  return (
    <>
      <InfoConatainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>

                
                <BtnWrap>
                  <Button
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                    {...getToggleProps()}
                    
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>

            <Column2>
              <TextWrapper>
                <TopLine>other topline</TopLine>
                {/* <DatClickToExpand {...getToggleProps()}>
                  {isExpanded ? (
                    <div>
                      contract
                    </div>
                  ) : (
                    <div>expand</div>
                  )}
                </DatClickToExpand> */}
                <DatAboutProject {...getCollapseProps()}>
                  just some random
                  <br />
                  text
                </DatAboutProject>
              </TextWrapper>
            </Column2>
          </InfoRow>
          <InfoRow>
            <DatAboutProject {...getCollapseProps()}>
              just some random
              <br />
              text
            </DatAboutProject>
          </InfoRow>
        </InfoWrapper>
      </InfoConatainer>
    </>
  );
};

export default InfoSection;
