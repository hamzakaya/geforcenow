import { useState, useMemo } from 'react'

export default function useSelections<T>(
  items: T[],
  defaultSelected: T[] = [],
) {
  const [selected, setSelected] = useState<T[]>(defaultSelected)
  const selectedSet = useMemo(() => new Set<T>(selected), [selected])

  const actions = useMemo(() => {
    const isSelected = (item: T) => selectedSet.has(item)

    const select = (item: T) => {
      selectedSet.add(item)
      return setSelected(Array.from(selectedSet))
    }

    const unSelect = (item: T) => {
      selectedSet.delete(item)
      return setSelected(Array.from(selectedSet))
    }

    const toggle = (item: T) => {
      if (isSelected(item)) unSelect(item)
      else select(item)
    }

    return { isSelected, select, unSelect, toggle }
  }, [selectedSet])

  return {
    selected,
    setSelected,
    ...actions,
  } as const
}
