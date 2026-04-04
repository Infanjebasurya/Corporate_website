import { useEffect, useRef, useState } from 'react'

export default function LazyVideo({
  src,
  className = '',
  priority = false,
  preload = 'metadata',
  rootMargin = '240px 0px',
  poster,
}) {
  const containerRef = useRef(null)
  const [shouldLoad, setShouldLoad] = useState(priority)
  const [isReady, setIsReady] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    if (priority || shouldLoad || !containerRef.current) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
          observer.disconnect()
        }
      },
      { rootMargin },
    )

    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [priority, shouldLoad])

  return (
    <div ref={containerRef} className="absolute inset-0">
      {poster ? (
        <img
          src={poster}
          alt=""
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${isReady && !hasError ? 'opacity-0' : 'opacity-100'}`}
        />
      ) : null}
      {shouldLoad ? (
        <video
          className={`${className} transition-opacity duration-500 ${isReady && !hasError ? 'opacity-100' : 'opacity-0'}`}
          autoPlay
          muted
          loop
          playsInline
          poster={poster}
          preload={priority ? preload : 'none'}
          onLoadedData={() => setIsReady(true)}
          onCanPlay={() => setIsReady(true)}
          onError={() => setHasError(true)}
        >
          <source src={src} type="video/mp4" />
        </video>
      ) : null}
    </div>
  )
}
