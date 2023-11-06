'use client';

import React from 'react'

import { SessionProvider } from 'next-auth/react'

const Provider = ({ children, session }: React.PropsWithChildren<{}> ) => {
  return (
    <SessionProvider session={session}>
      { children }
    </SessionProvider>
  )
}

export default Provider