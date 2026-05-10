'use client'

export default function BackButton({ className }: { className: string }) {
  return (
    <button className={className} onClick={() => history.back()}>
      <i className="bi bi-arrow-left" /> Página anterior
    </button>
  )
}
