"use client"

import { useState } from "react"
import Konami from "react-konami-code"
import Image from "next/image"

export const KonamiCode = () => {
  const [playAudio, setPlayAudio] = useState<Boolean>(false)
  const [altText, setAltText] = useState<string>("")
  const handleKonami = () => {
    setPlayAudio(true)
    setAltText("You see my face, now goodbye 👋")
    setTimeout(() => setPlayAudio(false), 2000)
    const styles = [
      "color: #4AE4B5",
      "background: #04101a",
      "font-size: 32px",
      "font-weight: 700",
      "border: 1px solid #4AE4B5",
      "padding: 8px 16px",
    ].join(";")
    console.info(
      "%cCongratulations! You are definitely a geek like me! We should work together!",
      styles
    )
  }
  return (
    <>
      <Konami timeout={2000} action={() => handleKonami()}>
        <Image
          priority
          placeholder={"empty"}
          quality={50}
          className="konamiImg"
          width={570}
          height={800}
          src={
            "https://images.prismic.io/nicolasfiascaro/f327bd5a-7839-4f0b-b895-22266a67b982_nikonami.png?auto=compress,format"
          }
          alt={altText}
        />
      </Konami>
      {playAudio && (
        <audio id="konamiSound" controls className="sr-only" autoPlay>
          <source
            src="https://prismic-io.s3.amazonaws.com/nicolasfiascaro/5420e267-bfe6-4ebe-a9e0-7ffef68a95ca_mk_toasty.mp3"
            type="audio/mpeg"
          />
          Your browser does not support the audio element.
        </audio>
      )}
    </>
  )
}
