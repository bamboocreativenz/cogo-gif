/** @jsx jsx */
import { jsx, Image } from 'theme-ui'

const sizes = `(min-width: 768px) 600px,(min-width: 1440px) 1163px,400px`

interface ResponsiveImageProps {
  webP: any
  img: any
  alt: string
  sxProps?: any
}

export default function ResponsiveImage ({
  webP,
  img,
  alt,
  sxProps
}: ResponsiveImageProps) {
  return (
    <picture sx={{ flex: 1, ...sxProps }}>
      <source
        media='(min-width: 1920px)'
        srcSet={webP.srcSet}
        sizes={sizes}
        type='image/webp'
      />
      <source
        media='(min-width: 1920px)'
        srcSet={img.srcSet}
        sizes={sizes}
        type='image/png'
      />
      <Image srcSet={img.srcSet} sizes={sizes} src={img.src} alt={alt} />
    </picture>
  )
}
