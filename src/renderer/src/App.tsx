import {
  ActionButtonsRow,
  Content,
  FloatingNoteTitle,
  MarkDownEditor,
  NotePreviewList,
  RootLayout,
  Sidebar
} from '@/components'
import { useRef } from 'react'

function App() {
  const contentContainerRef = useRef<HTMLDivElement>(null)

  const resetScroll = () => {
    contentContainerRef.current?.scrollTo(0, 0)
  }

  return (
    <RootLayout className=" bg-[#14181e]">
      <Sidebar className="p-2">
        <ActionButtonsRow className="flex justify-between mt-1" />
        <NotePreviewList className="mt-3 space-y-1" onSelect={resetScroll} />
      </Sidebar>
      <Content ref={contentContainerRef} className=" border-l-[1px] border-[#494949] p-2">
        <FloatingNoteTitle />
        <MarkDownEditor />
      </Content>
    </RootLayout>
  )
}

export default App
