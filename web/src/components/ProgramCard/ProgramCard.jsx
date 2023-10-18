const ProgramCard = ({ programOfStudy, handleClick }) => {
  const { image, active, programType, headQuarter, classification, name } =
    programOfStudy
  return (
    <div
      className="relative mx-auto max-w-full max-w-md overflow-hidden rounded-xl bg-white p-4 shadow-lg focus:border-red-500 focus:outline-none focus:ring"
      onClick={(e) => {
        e.preventDefault()
        handleClick(programOfStudy)
      }}
      aria-hidden="true"
    >
      {/* Card Content */}
      {/* Avatar */}
      <div className="mb-4 grid grid-cols-2">
        <div className="col-span-1">
          <img
            className="h-16 w-16 rounded-full object-cover"
            src={image}
            alt="Avatar"
          />
        </div>

        {/* Status Badge */}
        <div className="col-span-1 flex items-center justify-end">
          <span
            className={`inline-block rounded-full ${
              active === true ? 'bg-green-500' : 'bg-red-500'
            } px-3 py-1 text-sm font-semibold text-white`}
          >
            {active === true ? 'Activo' : 'Inactivo'}
          </span>
        </div>
      </div>

      {/* Meta Information */}
      <div className="text-md mb-4 font-semibold lg:text-2xl">{name}</div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="text-base text-sm lg:text-base">
          <strong>Tipo de programa:</strong> {programType}
        </div>
        <div className="text-base text-sm lg:text-base">
          <strong>Sede:</strong> {headQuarter.name}
        </div>
        <div className="text-base text-sm lg:text-base">
          <strong>Estus de acreditacion:</strong> {classification}
        </div>
        {/* Add more meta information items as needed */}
      </div>
    </div>
  )
}

export default ProgramCard
