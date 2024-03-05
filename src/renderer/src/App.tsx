import { Content, MarkDownEditor, NotePreviewList, RootLayout, Sidebar } from '@/components'
import { ActionButtonsRow } from '@/components'

function App() {
  return (
    <RootLayout className=" bg-[#1c1c1c]">
      <Sidebar className="p-2">
        <ActionButtonsRow className="flex justify-between mt-1" />
        <NotePreviewList className="mt-3 space-y-1" />
      </Sidebar>
      <Content className=" border-l-[1px] border-[#494949] p-2">
        <MarkDownEditor />
      </Content>
    </RootLayout>
  )
}

export default App
