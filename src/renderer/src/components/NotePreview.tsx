import { cn, formatDateFromMs } from '@renderer/utils'
import { NoteInfo } from '@shared/models'
import React, { ComponentProps } from 'react'

export type NotePreviewProps = NoteInfo & {
  isActive?: boolean
} & ComponentProps<'div'>

export const NotePreview = ({
  title,
  content,
  lastEditTime,
  isActive = false,
  className,
  ...props
}: NotePreviewProps) => {
  const date = formatDateFromMs(lastEditTime)

  return (
    <div
      className={cn(
        'cursor-pointer px-2.5 py-3 rounded-md transition-colors duration-75',
        {
          'bg-zinc-800': isActive,
          'hover:bg-zinc-800/75': !isActive
        },
        className
      )}
      {...props}
    >
      <h3 className=" mb-2 font-bold truncate">{title}</h3>
      <span className="inline-block w-full text-xs font-light text-left">{date}</span>
    </div>
  )
}
