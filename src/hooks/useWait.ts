import {useEffect, useState} from 'react'
import {continueRender, delayRender} from 'remotion'

export default function useWait(delay = 3) {
  const [handle] = useState(
    () => delayRender(),
  )

  useEffect(() => {
    setTimeout(() => {
      continueRender(handle)
    }, delay * 1000)
  }, [])

  return [
    handle,
  ]
}
