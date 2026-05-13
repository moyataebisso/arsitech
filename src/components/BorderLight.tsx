'use client'

export function BorderLight() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-[60] overflow-hidden"
    >
      <div className="border-light-runner" />
    </div>
  )
}
