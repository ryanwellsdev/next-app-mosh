import React, { CSSProperties } from 'react'
import { Html, Body, Container, Text, Link, Preview, Tailwind} from "@react-email/components"

const WelcomeTemplate = ( {name }: { name: string }) => {
  return (
    <Html>
        <Preview>Welcome Aboard!</Preview>
        <Tailwind>
      <Body className="bg-white">
        <Container>
          <Text className="font-bold text-3xl">Hello {name}</Text>
          <Link href="http://localhost:3000/">localhost:300</Link>
        </Container>
      </Body>
      </Tailwind>
    </Html>
  )
}

export default WelcomeTemplate