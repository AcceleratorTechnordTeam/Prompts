import { useMemo } from 'react'
import { Flex } from '../../components/ui/flex/Flex'
import { IconButton } from '../../components/ui/iconButton/IconButton'
import { useDelete } from './useDelete'

export const useRemoveHistoryRow = (rows: any[]) => {
  const { deleteResponse, isDeleting } = useDelete()

  return useMemo(() => {
    if (!rows || rows.length === 0) return []

    return rows.map((row) => {
      const id = row.ID
      return {
        ...row,
        supprimer: (
          <Flex fullWidth>
            <IconButton handleClick={() => deleteResponse(id)} isLoading={isDeleting} />
          </Flex>
        )
      }
    })
  }, [rows])
}
