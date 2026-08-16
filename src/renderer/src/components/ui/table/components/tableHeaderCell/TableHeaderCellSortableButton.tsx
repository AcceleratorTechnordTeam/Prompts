import { ChevronDownIcon } from '../../icons/ChevronDownIcon'
import { ChevronUpIcon } from '../../icons/ChevronUpIcon'
import { MinusIcon } from '../../icons/MinusIcon'

type TableHeaderCellSortableButtonProps = {
  size?: number
  strokeWidth?: number
  className?: string
  currentSortDirection?: string
  isCurrentlySorted?: boolean
  onClickSort?: () => void
}

export const TableHeaderCellSortableButton = ({
  currentSortDirection,
  isCurrentlySorted,
  className,
  size = 16,
  strokeWidth = 2,
  onClickSort
}: TableHeaderCellSortableButtonProps) => {
  return (
    <button
      className={className}
      data-sortable={isCurrentlySorted}
      type="button"
      onClick={onClickSort}
    >
      {isCurrentlySorted && currentSortDirection === 'asc' ? (
        <ChevronDownIcon size={size} strokeWidth={strokeWidth} />
      ) : isCurrentlySorted && currentSortDirection === 'desc' ? (
        <ChevronUpIcon size={size} strokeWidth={strokeWidth} />
      ) : (
        <MinusIcon size={size} strokeWidth={strokeWidth} />
      )}
    </button>
  )
}
