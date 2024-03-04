import { notesMock } from '@/store/mocks'
import { ComponentProps } from 'react'
import { NotePreview } from './NotePreview'

export const NotePreviewList = ({ ...props }: ComponentProps<'ul'>) => {
  return (
    <ul {...props}>
      {notesMock.map((note, i) => (
        <NotePreview key={i} {...note} />
      ))}
    </ul>
  )
}
