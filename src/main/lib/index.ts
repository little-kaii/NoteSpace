import { NoteInfo } from '@shared/models'
import { GetNotes, ReadNote } from '@shared/types'
import { ensureDir, readFile, readdir, stat } from 'fs-extra'
import { homedir } from 'os'

export const getRootDir = () => {
  return `${homedir()}/NoteSpace`
}

export const getNotes: GetNotes = async () => {
  const rootDir = getRootDir()

  console.log('Root Dir: ', rootDir)

  await ensureDir(rootDir)

  const notesFileNames = await readdir(rootDir, {
    encoding: 'utf8',
    withFileTypes: false
  })

  // filter for only .md extension
  const notes = notesFileNames.filter((fileName) => fileName.endsWith('.md'))

  return Promise.all(notes.map(getNoteInfoFromFilename))
}

export const getNoteInfoFromFilename = async (filename: string): Promise<NoteInfo> => {
  const fileStats = await stat(`${getRootDir()}/${filename}`)

  return {
    title: filename.replace(/\.md$/, ''),
    lastEditTime: fileStats.mtimeMs
  }
}

export const readNote: ReadNote = async (filename) => {
  const rootDir = getRootDir()

  await ensureDir(rootDir)

  // return `Hello i am here ${rootDir}`
  return readFile(`${rootDir}/${filename}.md`, { encoding: 'utf8' })
}
