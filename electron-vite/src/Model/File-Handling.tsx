import {create} from 'zustand'

// This character is needed to handle backturn stance parsing and naming recordings

// When you create a store with zustand it's a custom hook that can be used anywhere
type CharacterStore = {
  character: string,
  setCharacter: (input:string) => void
}

export const useCharacter = create<CharacterStore>((set) => ({
  character: 'no character selected',
  setCharacter: (input:string) => set({character: input})
}))


// input text file to be parsed

type MovelistStore = {
  movelist: File | null,
  setMovelist: (input:File) => void
}

export const useMovelist = create<MovelistStore>((set) => ({
  movelist: null,
  setMovelist: (input:File) => set({movelist: input})
}))