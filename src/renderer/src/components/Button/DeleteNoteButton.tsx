import { ActionButton, ActionButtonProps } from '@/components'
// import { createEmptyNoteAtom } from '@renderer/store'
// import { useSetAtom } from 'jotai'
import { FaRegTrashCan } from 'react-icons/fa6'

export const DeleteNoteButton = ({ ...props }: ActionButtonProps) => {
  //   const createEmptyNote = useSetAtom(createEmptyNoteAtom)

  //   const handleCreation = async () => {
  //     await createEmptyNote()
  //   }

  return (
    <ActionButton {...props}>
      <FaRegTrashCan className="w-4 h-4 text-zinc-300" />
    </ActionButton>
  )
}
