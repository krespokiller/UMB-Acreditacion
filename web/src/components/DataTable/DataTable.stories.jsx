// Pass props to your component by passing an `args` object to your story
//
// ```jsx
// export const Primary = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import DataTable from './DataTable'

export default { component: DataTable }

export const Primary = {
  args: {
    data: [
      {
        __typename: 'ProgramOfStudy',
        id: 1,
        name: 'Computer Science',
        body: 'Computer Science program description',
        image: 'computer-science.jpg',
        description: 'Description for Computer Science program',
        active: true,
        programType: 'GRADUATE',
        carrerType: 'TECHNICAL',
        createdAt: '2023-10-16T21:43:48.494Z',
        headQuarterId: 1,
        classification: 'ACCREDITED',
        expirationYear: 2025,
        docenciaServicio: false,
        reaccreditationStatus: null,
        academicGroupId: 1,
        ver: 'https://economicas.unsa.edu.ar/afinan/informacion_general/book/la_escuela_de_negocios.pdf',
      },
      {
        __typename: 'ProgramOfStudy',
        id: 2,
        name: 'Electrical Engineering',
        body: 'Electrical Engineering program description',
        image: 'electrical-engineering.jpg',
        description: 'Description for Electrical Engineering program',
        active: true,
        programType: 'GRADUATE',
        carrerType: 'ENGINEERING',
        createdAt: '2023-10-16T21:43:48.494Z',
        headQuarterId: 1,
        classification: 'ACCREDITED',
        expirationYear: 2025,
        docenciaServicio: false,
        reaccreditationStatus: null,
        academicGroupId: 2,
        ver: 'https://economicas.unsa.edu.ar/afinan/informacion_general/book/la_escuela_de_negocios.pdf',
      },
      {
        __typename: 'ProgramOfStudy',
        id: 3,
        name: 'Business Administration',
        body: 'Business Administration program description',
        image: 'business-administration.jpg',
        description: 'Description for Business Administration program',
        active: true,
        programType: 'GRADUATE',
        carrerType: 'BUSINESS',
        createdAt: '2023-10-16T21:43:48.494Z',
        headQuarterId: 1,
        classification: 'ACCREDITED',
        expirationYear: 2025,
        docenciaServicio: false,
        reaccreditationStatus: null,
        academicGroupId: 3,
        ver: 'https://economicas.unsa.edu.ar/afinan/informacion_general/book/la_escuela_de_negocios.pdf',
      },
      {
        __typename: 'ProgramOfStudy',
        id: 4,
        name: 'Psychology',
        body: 'Psychology program description',
        image: 'psychology.jpg',
        description: 'Description for Psychology program',
        active: true,
        programType: 'UNDERGRADUATE',
        carrerType: 'PSYCHOLOGY',
        createdAt: '2023-10-16T21:43:48.494Z',
        headQuarterId: 1,
        classification: 'ACCREDITED',
        expirationYear: 2025,
        docenciaServicio: false,
        reaccreditationStatus: null,
        academicGroupId: 4,
        ver: 'https://economicas.unsa.edu.ar/afinan/informacion_general/book/la_escuela_de_negocios.pdf',
      },
      {
        __typename: 'ProgramOfStudy',
        id: 5,
        name: 'Environmental Science',
        body: 'Environmental Science program description',
        image: 'environmental-science.jpg',
        description: 'Description for Environmental Science program',
        active: true,
        programType: 'UNDERGRADUATE',
        carrerType: 'ENVIRONMENTAL',
        createdAt: '2023-10-16T21:43:48.494Z',
        headQuarterId: 1,
        classification: 'ACCREDITED',
        expirationYear: 2025,
        docenciaServicio: false,
        reaccreditationStatus: null,
        academicGroupId: 5,
        ver: 'https://economicas.unsa.edu.ar/afinan/informacion_general/book/la_escuela_de_negocios.pdf',
      },
    ],
  },
}
