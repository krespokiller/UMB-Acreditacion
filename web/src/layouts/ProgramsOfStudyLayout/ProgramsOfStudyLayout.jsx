import { Toaster } from '@redwoodjs/web/toast'

import Header from 'src/components/Header/Header'

const ProgramsOfStudyLayout = ({ children }) => {
  return (
    <div className="rw-scaffold mt-4">
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
      <Header />
      <main className="rw-main">{children}</main>
    </div>
  )
}

export default ProgramsOfStudyLayout
