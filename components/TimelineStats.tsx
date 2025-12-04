interface TimelineStatsProps {
  itemsCount: number
  groupsCount: number
}

export const TimelineStats = ({ itemsCount, groupsCount }: TimelineStatsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="bg-linear-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.5 1.5H2.5A1 1 0 001.5 2.5v15a1 1 0 001 1h15a1 1 0 001-1v-10" />
              <path
                d="M16.5 4.5l-6 6m0 0l2 2m-2-2l-2 2"
                strokeWidth="1.5"
                stroke="white"
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-blue-600 dark:text-blue-300">Total Tasks</p>
            <p className="text-3xl font-bold text-blue-900 dark:text-blue-100">{itemsCount}</p>
          </div>
        </div>
      </div>

      <div className="bg-linear-to-br from-purple-50 to-purple-100 dark:from-purple-950 dark:to-purple-900 rounded-lg p-6 border border-purple-200 dark:border-purple-800">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 1a3 3 0 00-3 3v1H4a2 2 0 00-2 2v11a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-3V4a3 3 0 00-3-3zm0 2a1 1 0 011 1v1H9V4a1 1 0 011-1z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-purple-600 dark:text-purple-300">Teams</p>
            <p className="text-3xl font-bold text-purple-900 dark:text-purple-100">{groupsCount}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
