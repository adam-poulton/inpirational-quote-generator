import React, { useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

// Components
import { 
  BackgroundImage1, BackgroundImage2, FooterCon, FooterLink, GenerateQuoteButtonText, GradientBackgroundCon, QuoteGeneratorCon, QuoteGeneratorInnerCon, GenerateQuoteButton, QuoteGeneratorSubTitle, QuoteGeneratorTitle, RedSpan
} from '@/components/QuoteGenerator/QuoteGeneratorElements';

// Assets
import CloudsThunder from '@/assets/clouds-thunder.png';
import CloudsSun from '@/assets/clouds-sun.png';
import { validateHeaderValue } from 'http';

export default function Home() {
  const [numberOfQuotes, setNumberOfQuotes] = useState<Number | null>(0);
  return (
    <>
      <Head>
        <title>Inspirational Quote Generator</title>
        <meta name="description" content="A project to generate quotes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Background*/}
      <GradientBackgroundCon>

        {/* Quote Generator Modal Pop-up*/}
        {/* <QuoteGeneratorModal/> */}

        {/* Quote Generator */}
        <QuoteGeneratorCon>
          <QuoteGeneratorInnerCon>
            <QuoteGeneratorTitle>
              Daily Inspiration Generator
            </QuoteGeneratorTitle>
            <QuoteGeneratorSubTitle>
              Looking for a splash of inspiration? Generate a quote card with a random inspirational quote provided by <FooterLink href="https://zenquotes.io/" target="_blank" rel="noopener noreferrer">ZenQuotes API</FooterLink>.
            </QuoteGeneratorSubTitle>

            <GenerateQuoteButton>
              <GenerateQuoteButtonText onClick={null}>
                Make a Quote
              </GenerateQuoteButtonText>
            </GenerateQuoteButton>
          </QuoteGeneratorInnerCon>
        </QuoteGeneratorCon>

        {/* Background Images */}
        <BackgroundImage1
          src={CloudsThunder}
          height="300"
          alt="cloudy thunder"
        />

        <BackgroundImage2
          src={CloudsSun}
          height="300"
          alt="cloudy sun"
        />

        {/* Footer */}
        <FooterCon>
          <>
            Quotes Generated: {numberOfQuotes}
            <br />
            Developed with <RedSpan>♥</RedSpan> by <FooterLink href="https://github.com/adam-poulton" target="_blank" rel="noopener noreferrer">Adam Poulton</FooterLink>
          </>
        </FooterCon>

      </GradientBackgroundCon>
    </>
  )
}
