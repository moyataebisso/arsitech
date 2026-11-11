'use client'

export function BorderLight() {
  return (
    <div
      aria-hidden="true"
      className="border-light-layer pointer-events-none fixed inset-0 z-[60] overflow-hidden"
    >
      <div className="border-light-runner" />
    </div>
  )
}
