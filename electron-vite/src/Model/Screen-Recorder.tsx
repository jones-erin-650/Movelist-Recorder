import { create } from "zustand"

// whether files are named based off the text file or not

type FileNamingStore = {
  fileNaming: boolean,
  toggleFileNaming: () => void
}

export const useFileNaming = create<FileNamingStore>((set) => ({
  fileNaming: true,
  toggleFileNaming: () => set((state) => ({ fileNaming: !state.fileNaming }))
}))
